import WindowWrapper from "#hoc/WindowWrapper"
import { Download } from "lucide-react"
import WindowControls from "./WindowControls"
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

import { Document, Page, pdfjs } from "react-pdf"

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs"

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>resume.pdf</h2>
        <a
          href="/files/resume.pdf"
          download
          className="cursor-pointer"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>

      <Document
        file="/files/resume.pdf"
        onLoadError={(err) => console.error("PDF load error:", err)}
      >
        <Page pageNumber={1} />
      </Document>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow