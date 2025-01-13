import React from "react";
import Portfolio from "@/components/Portfolio"; 
import { Display } from "@/components/Display"; 

export default function Project() {
    return (
        <div className="flex flex-col items-center">
            
            <Portfolio />
            <Display />
        </div>
    );
}
