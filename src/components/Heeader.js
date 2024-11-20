import logo from "../Logo .svg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to="/menu" style={{ margin: "0 10px" }}>
          Menu
        </Link>
        <Link to="/reservations" style={{ margin: "0 10px" }}>
          Resarvations
        </Link>
        <Link to="/order" style={{ margin: "0 10px" }}>
          Order
        </Link>
        <Link to="/login" style={{ margin: "0 10px" }}>
          Login
        </Link>
      </nav>
    </header>
  );
};
export default Header;
