import React from 'react';
//import { Sparkle } from 'lucide-react';


const Marquee =()=>{
    return(
        <div className="marquee object-contain self-center w-full aspect-[5.8] bg-orange-500 rounded-lg h-28 " >
            <div className='bg-white center' id='slant' >
            
            <div className=" marquee__inner w-full my-6 container mx-auto text-black"  >
                
                <span>Digital Marketing </span><img src="sparkles.svg" alt="Star Icon"  style={{height:'50px'}} className='fill-zinc-950' />
                <span>Accounting</span><img src="sparkles.svg" alt="Star Icon" className='bg-sky-blue' style={{height:'50px'}}  />
                <span className=''>Coaching</span><img src="sparkles.svg" alt="Star Icon"  style={{height:'50px',color:'goldenrod'}} className='text-gold' />
                <span>Event Planning</span>
                
            </div>
            </div>
        </div>
       
    )
}

export default Marquee