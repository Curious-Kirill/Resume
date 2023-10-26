import About from "./components/About";
import Cetificates from "./components/Cetificates";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="w-full h-bg-[#0a192f]">
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Cetificates />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
