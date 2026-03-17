import { useLayoutEffect, useRef } from "react";
import useWindowStore, { type WindowData } from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  {Draggable}  from "gsap/Draggable";

gsap.registerPlugin(Draggable)
// Define the HOC type
function WindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
  windowKey: string
) {
  const Wrapped: React.FC<P> = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const {isOpen, zIndex} = windows[windowKey]
    const win: WindowData | undefined = windows[windowKey];
    const ref = useRef<HTMLElement | null>(null);


    useGSAP(() => {
     const el = ref.current;
     if(!el || !isOpen) return;

     el.style.display = 'block';

     gsap.fromTo(el, {scale : 0.8, opacity: 0, y: 40},

      {scale: 1, opacity: 1, y:0, duration: 0.4, ease: "power3.out"},
     )
    }, [isOpen])

    useGSAP(() => {
      const el = ref.current;
      if(!el) return;
      
      const [instance] = Draggable.create(el, {onPress : () => focusWindow(windowKey)

      });
      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if(!el) return;
      el.style.display = isOpen ? "block" : "none" ;
    }, [isOpen]);

    if (!win?.isOpen) return null; // don't render if window is closed

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex: win.zIndex }}
         className="absolute w-[600px] h-[400px] overflow-y-auto "

        onClick={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}

export default WindowWrapper;