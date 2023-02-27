import React  from "react"
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>

      <main className="px-40">
        <Introduction></Introduction>
        <About></About>
        <Projects></Projects>
        <Tech></Tech>
        <Contacts></Contacts>
      </main>
    </div>
  );
}

export default App;
