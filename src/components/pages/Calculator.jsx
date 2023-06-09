import React, { useState } from 'react';
import Button from './Buttons';
import calculate from '../logic/calculate';
import teacher from '../../assets/teacher1.png';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <div className="cal-frame">
      <div className="teacher-frame">
        <img src={teacher} alt="teacher" />
      </div>

      <div className="lets-math">
        <span>Let&apos;s do some Math!</span>
      </div>

      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="row">
          <Button className="clear" text="AC" onClick={() => handleClick('AC')} />
          <Button className="plus-minus" text="+/-" onClick={() => handleClick('+/-')} />
          <Button className="percent" text="%" onClick={() => handleClick('%')} />
          <Button className="operator" text="÷" onClick={() => handleClick('÷')} />
        </div>
        <div className="row">
          <Button className="number" text="7" onClick={() => handleClick('7')} />
          <Button className="number" text="8" onClick={() => handleClick('8')} />
          <Button className="number" text="9" onClick={() => handleClick('9')} />
          <Button className="operator" text="x" onClick={() => handleClick('x')} />
        </div>
        <div className="row">
          <Button className="number" text="4" onClick={() => handleClick('4')} />
          <Button className="number" text="5" onClick={() => handleClick('5')} />
          <Button className="number" text="6" onClick={() => handleClick('6')} />
          <Button className="operator" text="-" onClick={() => handleClick('-')} />
        </div>
        <div className="row">
          <Button className="number" text="1" onClick={() => handleClick('1')} />
          <Button className="number" text="2" onClick={() => handleClick('2')} />
          <Button className="number" text="3" onClick={() => handleClick('3')} />
          <Button className="operator" text="+" onClick={() => handleClick('+')} />
        </div>
        <div className="row">
          <Button className="number zero" text="0" onClick={() => handleClick('0')} />
          <Button className="decimal" text="." onClick={() => handleClick('.')} />
          <Button className="equals operator" text="=" onClick={() => handleClick('=')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
