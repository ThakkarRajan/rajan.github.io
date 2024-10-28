import "./App.scss";
import { useLocation } from "react-router-dom";

import About from "./containers/about";
import Resume from "./containers/resume";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Home from "./containers/home";
import Navbar from "./components/navbar";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="App">
      <Navbar />
      <div className="App__main-page-content">
        <div id="Home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="resume">
          <Resume />
        </div>

        <div id="portfolio">
          <Portfolio />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
