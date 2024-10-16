import React from "react";
import "./index.css"
import Home from "./Routes/Home"
import About from "./Routes/About"
import Projects from "./Routes/Projects"
import Contact from "./Routes/Contact"
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>} />
      <Route path = "/About" element = {<About/>} />
      <Route path = "/Projects" element = {<Projects/>} />
      <Route path = "/Contact" element = {<Contact/>} />
    </Routes>
  
    </>
  );
}

export default App;
