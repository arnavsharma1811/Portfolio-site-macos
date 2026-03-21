import { Check, Flag } from "lucide-react";
import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const Terminal = () => {
  return (
    <>
      {/* Header */}
      <div
        id="window-header"
        
      >
       <WindowControls target = "terminal" />
        <h2 className="font-bold text-lg">Tech Stack</h2>
      </div>

      {/* Body */}
      <div className="techstack ">
        <p className="mb-4">
          <span className="font-bold">@ARNAV $ </span> show tech stack
        </p>

        {/* Header Row */}
        <div className="label ">
          <p className="w-40">Category</p>
          <p>Technologies</p>
        </div>

        {/* Content Rows */}
        <ul className="content ">
          {techStack.map(({ category, items }, idx) => (
            <li key={idx} className="flex py-2">
              {/* Left column */}
              <div className="flex items-center w-40 gap-2">
                <Check className="text-green-500" size={18} />
                <h3 className="font-semibold">{category}</h3>
              </div>

              {/* Right column */}
              <div className="flex-1">
                <p>{items.join(", ")}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="footnote ">
          <p className="flex items-center gap-2 text-green-500">
            <Check size={18} /> {techStack.length} of {techStack.length} stacks
            loaded successfully (100%)
          </p>
          <p className="flex items-center gap-2 text-black">
            <Flag size={15} fill="black" /> Render time : 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");
export default TerminalWindow;