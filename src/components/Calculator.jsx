import Button from './Buttons';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="row">
      <Button type="button" className="clear" text="AC" />
      <Button type="button" className="plus-minus" text="+/-" />
      <Button type="button" className="percent" text="%" />
      <Button type="button" className="operator" text="÷" />
    </div>
    <div className="row">
      <Button type="button" className="number" text="7" />
      <Button type="button" className="number" text="8" />
      <Button type="button" className="number" text="9" />
      <Button type="button" className="operator" text="x" />
    </div>
    <div className="row">
      <Button type="button" className="number" text="4" />
      <Button type="button" className="number" text="5" />
      <Button type="button" className="number" text="6" />
      <Button type="button" className="operator" text="-" />
    </div>
    <div className="row">
      <Button type="button" className="number" text="1" />
      <Button type="button" className="number" text="2" />
      <Button type="button" className="number" text="3" />
      <Button type="button" className="operator" text="+" />
    </div>
    <div className="row">
      <Button type="button" className="zero number" text="0" />
      <Button type="button" className="decimal" text="." />
      <Button type="button" className="equals operator" text="=" />
    </div>
  </div>
);

export default Calculator;
