import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#232932] xl:px-40 lg:px-30 md:px-20 px-5">
      <div>
        <Navbar />
      </div>
      <div className="xl:px-40 lg:px-30 ">
        <Homepage />
        <About />
        <Projects/>
      </div>
    </div>
  );
}

export default App;
