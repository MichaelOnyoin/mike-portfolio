import React from "react";

export const Display = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="text-center mb-8 items-center">
                <h1 className="text-4xl font-bold flex-grow text-gray-600">Sample Projects</h1>
                
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="container mx-auto p-4 col-span-2">
                <p className="text-lg text-gray-700">Take a sneak peak at my work</p>
                <h1 className="text-4xl font-bold text-gray-700">Sample Projects</h1>
                <button className="mt-4 px-6 py-2 bg-black text-white rounded">View all</button>
                </div>
                <img src="https://placehold.co/400x300" alt="A shelf with various kitchen items including jars, a vase, and glasses" className="rounded-lg" />
                <img src="https://placehold.co/400x300" alt="A dining table set with plates, cutlery, and a vase with yellow flowers" className="rounded-lg" />
                <img src="https://placehold.co/400x300" alt="A table with several glasses filled with blue liquid" className="rounded-lg" />
                <img src="https://placehold.co/400x300" alt="A lamp on a side table next to a couch" className="rounded-lg" />
                <img src="https://placehold.co/400x300" alt="A plate with pancakes and various breakfast items" className="rounded-lg" />
                <img src="https://placehold.co/400x300" alt="A set of ceramic bowls and plates" className="rounded-lg" />
            </div>
            {/* Embed Videos */}
            <div className="col-span-2">
                    <h2 className="text-2xl font-bold mt-8">Featured Videos</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/lJIrF4YjHfQ?si=5OlHVdy9dbDV8IXL"  
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            className="rounded-lg"
                        ></iframe>
                        <iframe 
                            width="100%" 
                            height="315" 
                            src="https://www.youtube.com/embed/8sekyV_o2pM?si=QAFtDwTIIJ1glaCN" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen 
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
        </div>
    );
};
