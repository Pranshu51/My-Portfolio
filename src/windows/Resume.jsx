
import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';

import { Download } from 'lucide-react';
// Used React-PDF =>to display PDF in window
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header" className="flex items-center justify-between">
        <WindowControls target="resume" />
        <h2 className="text-sm font-medium">Resume.pdf</h2>

        <a
          href="/files/resume.pdf"
          download="My_Resume.pdf"
          className="cursor-pointer p-1 hover:bg-gray-700 rounded-md transition-colors"
          title="Download resume"
        >
          <Download className="icon" />
        </a>
      </div>
       <Document file="files/resume.pdf" >
        <Page pageNumber={1}
        rederTextLayer
        rederAnnotationLayer
         />
      </Document>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;