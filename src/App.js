import React  from "react"
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";


function App() {
  return (
    <div className="bg-[#205161]">
        <Navbar/>
        <Introduction/>
        <About/>
        <Projects/>
        <Tech />
        <Contacts/>
    </div>
  );
}

export default App;
