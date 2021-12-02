import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <div className="App-header bg-white">
        <Router>
          <Header />
          <Routes>
            <Route path="/aboutme" element={<About />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
