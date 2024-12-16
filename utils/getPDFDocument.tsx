// app/_utils/getPDFDocument.tsx
import type { PDFDocumentProxy, PageViewport, PDFPageProxy} from 'pdfjs-dist';
//import pdfJS from '../public/pdf.worker.min.js';
// this function takes an argument we named path that 
// can be a path to the file or can be an external link
// that contains the PDF
const getPDFDocument = async (path: string): Promise<PDFDocumentProxy> => {
  const pdfJS = await import('pdfjs-dist')
  pdfJS.GlobalWorkerOptions.workerSrc =
    window.location.origin + "/pdf.worker.min.mjs";

  return new Promise((resolve, reject) => {
    pdfJS
      .getDocument(path)
      .promise.then((document: any) => {
        resolve(document);
      })
      .catch(reject);
  });
};

export default getPDFDocument