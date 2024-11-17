import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li>
                <a role="button" href="/home">Homepage</a>
              </li>
              <li>
                <a role="button" href="/about">About Us</a>
              </li>
              <li>
                <a role="button" href="/blog">Blog</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default App;
