import Dock from "./components/Dock";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "./windows";
import Safari from "#components/Safari";
import ResumeWindow from "#components/Resume";
import FinderWindow from "#components/Finder";
import TxtFileWindow from "#components/TxtFile";
import ImgFileWindow from "#components/ImgFile";
import Home from "#components/Home";
import PhotosWindow from "#components/Photos";
import ContactWindow from "#components/Contact";



gsap.registerPlugin(Draggable);

const App = () => {
  return ( <main> 
    <Navbar />
    <Welcome />
    <Dock />
    <Terminal />
    <Safari />
    <ResumeWindow />
    <FinderWindow />
    <TxtFileWindow />
    <ImgFileWindow />
    <PhotosWindow />
    <ContactWindow />
    <Home />
  </main>
  
  
  )
};

export default App