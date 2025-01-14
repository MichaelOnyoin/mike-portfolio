import React from 'react';
import {Linkedin, Instagram, Facebook, Phone,Twitter,  SendHorizontal} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="flex overflow-hidden flex-col justify-between px-16 py-6 w-full rounded-3xl bg-neutral-800 max-h-[685px] max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
        <h2 className="self-stretch my-auto text-6xl font-semibold tracking-tighter text-gray-50 w-[643px] max-md:max-w-full max-md:text-4xl">
          Lets Connect there
        </h2>
        <button className="flex overflow-hidden justify-center items-center self-stretch px-5 py-2.5 my-auto text-2xl font-medium tracking-tight text-white bg-orange-400 rounded-[60px] w-[202px]">
          <span className="self-stretch my-auto">Hire me</span>
         
        </button>
      </div>
        <div className="flex flex-wrap gap-7 justify-between items-start mt-14 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col justify-between items-start min-h-[239px] min-w-[240px] w-[635px] max-md:max-w-full">
         
          <p className="self-stretch mt-9 text-xl tracking-tight text-gray-50 max-md:max-w-full">
          I wanted to let you know that if you need to get in touch with me for any questions or updates, you can easily reach out via the contact page. It&apos;s the quickest and most efficient way for us to communicate, and I&apos;ll be able to assist you faster there.
          </p>
          <div className="flex gap-1.5 items-start mt-9">
            
            <Facebook className="w-full mr-4 hover:fill-blue-800" href='null' strokeWidth={1.5} />
              <Twitter className="w-full mr-4 hover:fill-blue-400" href='null' strokeWidth={1.5} fill='azure'/>
              <Instagram className="w-full mr-4" href='null' strokeWidth={1.5} fill='purple'/>
              <Linkedin className="w-full mr-4 hover:fill-pink-500" href='null' strokeWidth={1.5} />
              <Phone className="w-full mr-4" href='null' strokeWidth={1.5} fill='green'/>
          </div>
        </div>
        <nav className="flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-orange-400">Navigation</h3>
          <ul className="flex flex-col self-start mt-7 text-base tracking-tight text-gray-50 ">
            <li className='hover:underline'><a href="#home">Home</a></li>
            <li className="mt-5 hover:underline"><a href="#about">About Us</a></li>
            <li className="mt-5 hover:underline"><a href="#service">Service</a></li>
            <li className="mt-5 hover:underline"><a href="#resume">Resume</a></li>
            <li className="mt-5 hover:underline"><a href="#project">Project</a></li>
          </ul>
        </nav>
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-orange-400">Contact</h3>
          <address className="flex flex-col mt-7 text-base tracking-tight text-gray-50 not-italic">
            <p>+256(782)726885</p>
            <p className="mt-5">nassozimariam5@gmail.com</p>
            <p className="mt-5">Portfolio-jcrea.com</p>
          </address>
        </div>
        <div className="flex flex-col min-w-[240px] w-[304px]">
          <h3 className="text-xl font-semibold tracking-tight text-orange-400">Get the latest information</h3>
          <form className="flex items-start mt-7 w-full max-w-[304px]">
            <label htmlFor="footerEmail" className="sr-only">Email Address</label>
            <input
              type="email"
              id="footerEmail"
              placeholder="Email Address"
              className="overflow-hidden gap-2.5 self-stretch px-3.5 py-4 text-base tracking-tight text-black bg-white rounded-s-2xl min-h-[51px] min-w-[240px] w-[258px] "
              aria-label="Email Address"
            />
            <button type="submit" className="flex gap-5 justify-center items-center px-2 py-3.5 bg-orange-400 rounded-e-2xl min-h-[57px] w-[76px]">
             <SendHorizontal className="w-full" strokeWidth={1.5}/>
             
            </button>
          </form>
        </div>
      </div>
      {/* <img loading="lazy" src="https://cdn.builder.io/api/v1/img/assets/1391f202a6104b468a8033acf7e36115/a86fb62869fcd47fde219128eb253c9bcf8d32d8bb11d07493e6939321571cb1?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Decorative line" className="object-contain mt-14 w-full aspect-[500] max-md:mt-10 max-md:max-w-full" /> */}
      <div className="flex flex-wrap gap-10 items-start mt-14 w-full text-xl tracking-tight text-white max-md:mt-10 max-md:max-w-full">
        <p>Copyright© 2025 Michael. All Rights Reserved.</p>
        <p>User Terms & Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;