import React from 'react';
import "@/app/banner.css";

const Banner =()=>{
    return(
        <>
        <div className="marquee">
            <div className="marquee__item">Welcome to the Marquee Effect! This text will scroll continuously.</div>
            <div className="marquee__item">Enjoy the smooth scrolling effect created with CSS animations!</div>
        </div>
        </>
       
    )
}

export default Banner;