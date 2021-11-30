import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <div className="App-header bg-white">
        <Header />
        <Banner />
      </div>
    </div>
  );
}

export default App;
