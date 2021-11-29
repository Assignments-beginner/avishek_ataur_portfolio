import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App bg-primary">
      <div className="App-header border border-5 border-primary">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default App;
