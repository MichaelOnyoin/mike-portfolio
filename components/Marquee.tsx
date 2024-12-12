import React from 'react';
import { Sparkle } from 'lucide-react';
//import Image from 'next/image';


const Marquee =()=>{
    return(
        <div className="marquee object-contain self-center w-full aspect-[5.8] bg-orange-500 rounded-lg h-28 pt-3 pb-3 " >
            <div className='bg-white' id='slant' >
            
            <div className=" marquee__inner w-full my-6 container mx-auto text-black"  >
                
                <span>Digital Marketing </span><Sparkle className="w-50 fill-gold" href='null' strokeWidth={1.0} fill='gold' />
                {/* <img src="sparkles.svg" alt="Star Icon"  style={{height:'50px'}} className='' /> */}
                {/* <Image src={'sparkles.svg'} alt='Star Icon' height={50} width={50}/> */}
                <span>Accounting</span><Sparkle className="w-50 h-full center fill-gold" href='null' strokeWidth={1.0} fill='gold'/>
                {/* <img src="sparkles.svg" alt="Star Icon" className='bg-sky-blue' style={{height:'50px'}}  /> */}
                <span className=''>Coaching</span><Sparkle className="w-50 fill-gold" href='null' strokeWidth={1.0} fill='gold'/>
                {/* <img src="sparkles.svg" alt="Star Icon"  style={{height:'50px',color:'goldenrod'}} className='text-gold' /> */}
                <span>Event Planning</span>
                
            </div>
            </div>
        </div>
       
    )
}

export default Marquee