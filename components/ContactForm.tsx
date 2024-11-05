'use client'
import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import { env } from 'node:process';


const ContactForm: React.FC = () => {
  //form: RefObject<HTMLFormElement>
  const [email,setEmail]=useState('');
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // if (!form.current) {
    //   console.error('Form reference is null');
    //   return ;
    // }
    // Proceed with sending the email

    emailjs
      .send('service_tldv0ba', 'template_n314jm9', form.current!, {
        publicKey: process.env.PUBLIC_KEY,
        limitRate:{
          throttle: 100000, // can't send more than one email per 100s
        }
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },)};

  

  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 w-full max-md:max-w-full" id='contact'>
      <h2 className="text-6xl font-semibold tracking-tighter text-center text-slate-700 max-md:max-w-full max-md:text-4xl">
        Have an Awesome Project Idea? <span className="text-orange-400">Let's Discuss</span>
      </h2>
      <div className="flex flex-col justify-center items-center mt-2.5 max-w-full w-[832px]">
        <form ref={form} onSubmit={sendEmail} className="flex flex-wrap gap-10 justify-between px-3.5 py-3 w-full border border-gray-200 border-solid max-w-[832px] min-h-[86px] rounded-[50px] max-md:max-w-full">
          <div className="flex gap-4 h-full min-w-[240px] rounded-[50px] w-[253px]">
            <div className="flex gap-2.5 justify-center items-center bg-orange-100 min-h-[58px] rounded-[50px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/0482c37642295008266da954111c085610a5f4fb7f5b681cdc38ecb77bd25333?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain self-stretch my-auto w-8 aspect-square" />
            </div>
            <label htmlFor="email" className="sr-only">Enter Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Email Address"
              className="my-auto text-xl font-medium tracking-tight text-black basis-auto bg-transparent border-none outline-none"
              aria-label="Enter Email Address"
            />
          </div>
          <button type="submit" className="overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl font-medium tracking-tight text-white whitespace-nowrap bg-orange-400 rounded-[60px] max-md:px-5">
            Send
          </button>
        </form>
        <div className="flex flex-wrap gap-10 justify-between items-center mt-2.5 max-w-full text-base tracking-tight text-black w-[770px]">
          <div className="flex items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/be3840f0cd669a05dfa6997ae7ef5acb947748b7a2153435b7abce144ce4c6eb?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">4.9/5 Average Ratings</span>
          </div>
          <div className="flex items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/00ed3e6f0f9e3fd459f81a3320e22e120103fbf324606b84b07f584459c4597d?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">25+ Winning Awards</span>
          </div>
          <div className="flex items-center self-stretch my-auto">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/7d589a60ef3a42570c7b4f6147227ddbff25a54c309d9d1571dfa7891b520d37?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
            <span className="self-stretch my-auto">Certified Product Designer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;