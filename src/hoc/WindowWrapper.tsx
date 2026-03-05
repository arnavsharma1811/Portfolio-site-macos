import useWindowStore from "../store/window";
import { useRef } from "react";

const WindowWrapper = (Component, WindowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null);
    
    return (
        <section id = {WindowKey} ref = {ref} style = {{zIndex}}
        className="absolute"
        >
        <Component {... props} />

        </section>
    )
   
}
 Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"}`
    
 return Wrapped;
}

export default WindowWrapper;