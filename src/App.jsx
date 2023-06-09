import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import Calculator from './components/pages/Calculator';

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="branding">
            <Link to="/math_magicians/"><h1>Math Magicians</h1></Link>
          </div>
          <ul>
            <li>
              <Link to="/math_magicians/">Home</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/math_magicians/calculator">Calculator</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/math_magicians/quote">Quote</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/math_magicians/" element={<Home />} />
          <Route path="/math_magicians/quote" element={<Quote />} />
          <Route path="/math_magicians/calculator" element={<Calculator />} />
        </Routes>
      </main>
      <footer>
        <p className="copyright">&copy; 2023 Math Magicians | Developed by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
