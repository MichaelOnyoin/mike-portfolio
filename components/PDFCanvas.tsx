'use client'

import getPDFDocument from "../utils/getPDFDocument";
import createPDFPage from "../utils/createPDFPage";
import renderPDFToCanvas from "../utils/renderPDFToCanvas";

import { useRef, useEffect } from "react";

export const PDFCanvas = () => {
    const ref = useRef<HTMLDivElement>(null);
  
    const renderPDF = async () => {
      // PDF Path or URL
      const url = window.location.origin + "/resume.pdf";
  
      // Page number you want to render
      const pageNumber = 1;
  
      // Fetch the PDF
      const pdfDocument = await getPDFDocument(url);
  
      // Get the PDF page
      const pdfPage = await createPDFPage(pdfDocument, pageNumber);
      
      // Get the viewport of the page to extract sizes
      const viewport = pdfPage.getViewport({ scale: 1 });
      const { height, width } = viewport;
  
      // Create the canvas
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
  
      // Render the pdf to canvas
      const pdfCanvas = await renderPDFToCanvas(pdfPage, canvas);
  
      // then add the canvas with pdf to the div element
      ref.current?.replaceChildren(pdfCanvas)
    };
  
    useEffect(() => {
      renderPDF();
    }, []);
  
    return <div ref={ref} className="w-full h-full"></div>;
  };

