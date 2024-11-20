import logo from "../Logo .svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/menu">
          Menu
        </Link>
        <Link to="/reservations">
          Resarvations
        </Link>
        <Link to="/order">
          Order
        </Link>
        <Link to="/login">
          Login
        </Link>
      </nav>
    </header>
  );
};
export default Header;
