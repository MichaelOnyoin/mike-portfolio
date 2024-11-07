import React from 'react';


const Marquee =()=>{
    return(
        <div className="marquee object-contain self-center w-full aspect-[5.8] bg-orange-400 rounded-lg h-28 " >
            
            <div className=" marquee__inner w-full my-6 container mx-auto" aria-hidden="true" id='slant'>
                
                <span>Digital Marketing </span><img src="star.svg" alt="Star Icon"  style={{height:'50px'}} />
                <span>Accounting</span><img src="star.svg" alt="Star Icon" className='fill-current' style={{height:'50px'}}  />
                <span className=''>Coaching</span><img src="star.svg" alt="Star Icon"  style={{height:'50px',color:'goldenrod'}} />
                <span>Event Planning</span>
                
            </div>
            
        </div>
       
    )
}

export default Marquee