import React from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import NotFound from "./NotFound";
import {Routes, Route} from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
