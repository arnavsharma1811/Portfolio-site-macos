import { useLayoutEffect, useRef } from "react";
import useWindowStore, { type WindowData } from "../store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function WindowWrapper<P extends object>(
  Component: React.ComponentType<P>,
  windowKey: string
) {
  const Wrapped: React.FC<P> = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const win: WindowData | undefined = windows[windowKey];
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !win?.isOpen) return;

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
    }, [win?.isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      Draggable.create(el, {
        type: "x,y",
        bounds: document.body, // keep inside viewport
        edgeResistance: 0.65,
        inertia: true,
        onPress: () => focusWindow(windowKey),
      });
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = win?.isOpen ? "block" : "none";
    }, [win?.isOpen]);

    if (!win?.isOpen) return null;

    return (
      <div
        id={windowKey}
        ref={ref}
        style={{ zIndex: win.zIndex }}
        className="absolute w-[600px] h-[400px] bg-gray-900 text-white rounded-md shadow-lg cursor-move"
        onClick={() => focusWindow(windowKey)}
      >
        <Component {...props} />
      </div>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
}

export default WindowWrapper;