import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App p-4">
      <div className="App-header bg-white">
        <Header/>
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
