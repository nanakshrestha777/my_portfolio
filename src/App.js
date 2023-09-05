import React from 'react';
import "./index.css";
import Home from "./Components/home"
import Project from "./Components/project"
import Contact from "./Components/contact"
import About from "./Components/about"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>

    </>

  );
}
export default App;