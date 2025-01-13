import React from "react";


export const Showcase = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
                <div className="md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold mb-4">Influencer Marketing</h1>
                    <p className="text-lg mb-4">
                    My strategic approach to promoting products, services, or brands through individuals who have established credibility and a loyal following in specific niches or industries. These individuals, known as influencers, leverage their personal platforms—such as social media, blogs, or video channels—to reach and engage with their audience, fostering trust and encouraging action.
                    </p>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded">Learn More</button>
                </div>
                <div className="md:w-1/2 p-4">
                {/* https://placehold.co/600x400*/}
                    <img src="istockphoto-digit.webp" alt="Hand holding a smartphone displaying analytics data" className="rounded-lg shadow-lg " style={{height:'50%'}}/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
                <div className="md:w-1/2 p-4 mr-10 justify-right">
                    <img src="accounting.avif" alt="Hand holding a smartphone displaying analytics data" className="rounded-lg shadow-lg"/>
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold mb-4">Accounting</h1>
                    <p className="text-lg mb-4">
                    Our accounting services provide you with the expertise you need to manage your finances effectively. 
                    From bookkeeping to tax preparation, we ensure your financial health is in good hands.
                    </p>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded">Learn More</button>
                </div>
                
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-4">
                <div className="md:w-1/2 p-4">
                    <h1 className="text-4xl font-bold mb-4">Coaching</h1>
                    <p className="text-lg mb-4">
                    Our coaching services are designed to help you achieve your personal and professional goals. Whether you need guidance in your career or personal life, our experienced coaches are here to support you.
                    </p>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded">Learn More</button>
                </div>
                <div className="md:w-1/2 p-4">
                    <img src="coaching.webp" alt="Hand holding a smartphone displaying analytics data"  className="rounded-lg shadow-lg w-full h-400"/>
                </div>
            </div>
            
        </div>
    );
};