import React from "react";
import Link from "next/link";
//import { PDFCanvas } from "@/components/PDFCanvas";
import { Head, NextScript, Main, Html } from "next/document";

export default function Project(){
    return (
        <div>
            {/* <iframe src='/assets/pdfs/myResume.pdf' /> */}
            <iframe src='resume.pdf' className="w-full min-h-screen mt-10 bg-white"/>
            
            <Link href="resume.pdf" className="font-bold text-orange-500 items-center px-10">Resume</Link>

            {/* <object data="resume.pdf" type="application/pdf" width="100%" height="100%">
                <p>Unable to display PDF file. <a href="sample.pdf">Download</a> instead.</p>
            </object> */}
            {/* <PDFCanvas /> */}
            {/*<PDFCanvas>
                <
            <PDFCanvas/> */}
             <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
             </Html>
            
        </div>
    )
}

