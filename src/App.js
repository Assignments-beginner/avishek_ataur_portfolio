import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import Qualifications from "./Components/Qualifications/Qualifications";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <div className="App-header bg-white">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/qualifications" element={<Qualifications />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
