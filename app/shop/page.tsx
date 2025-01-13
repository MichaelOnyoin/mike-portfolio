import React from 'react';
import { Showcase } from '@/components/ShowCase';
import { ServiceCard } from "@/components/ServiceCard";

export default function Shop() {
    return (
        <div>
            
            <main className="p-4 text-gray-800">
                
                <Showcase/>
                <ServiceCard/>

            </main>
            
        </div>
    );
};

//export default Shop;