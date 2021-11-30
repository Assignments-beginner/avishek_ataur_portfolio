import "./App.css";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="App-header bg-white">
        <Header />
        <Banner />
        <About />
        <Skills />
        <Contact/>
      </div>
    </div>
  );
}

export default App;
