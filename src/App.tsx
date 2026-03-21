import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "./windows";
import Safari from "#components/Safari";

gsap.registerPlugin(Draggable);

const App = () => {
  return ( <main> 
    <Navbar />
    <Welcome />
    <Dock />
    <Terminal />
    <Safari />
  </main>
  
  
  )
};

export default App