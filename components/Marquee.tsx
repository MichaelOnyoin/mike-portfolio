import React from 'react';
import "@/app/globals.css";

const Marquee =()=>{
    return(
        <div className="marquee object-contain self-center w-full aspect-[5.8] bg-orange-500 rounded-lg h-28 ">
            
            <div className=" marquee__inner w-full my-6 container mx-auto" aria-hidden="true">
                
                <span>UX-Design </span><img src="star.svg" alt="Star Icon"  style={{height:'50px'}} />
                <span>App-Design</span><img src="star.svg" alt="Star Icon"  style={{height:'50px',}}  />
                <span className=''>Dashboard</span><img src="star.svg" alt="Star Icon"  style={{height:'50px',color:'goldenrod'}} />
                <span>Wireframes</span>
                
            </div>
            
        </div>
       
    )
}

export default Marquee