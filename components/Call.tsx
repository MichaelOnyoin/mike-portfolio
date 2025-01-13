'use client'
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {Linkedin, Instagram, Facebook, Phone, Ticket} from 'lucide-react';

export function Call() {
  const form = useRef<HTMLFormElement>(null);
  const whatsappNumber = "+256782726885"; // Replace with your WhatsApp number

   const sendWhatsAppMessage = () => {
    const message = "Hello, I would like to get in touch for your services!"; // Customize your message
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const sendEmail = () => {
    
    if (!form.current) {
        console.error('Form reference is null');
        return;
      }
   
    emailjs
      .sendForm('service_tldv0ba', 'template_n314jm9', form.current!, {
        publicKey: 'ZYsFQxAoL-y-JRcX4',
        
        limitRate:{
            throttle: 100000, // can't send more than one email per 100s
          }
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Email Not Sent')
        },
      );
  };
    return (
        <section className="px-8 py-16">
            <div className="container mx-auto mb-20 text-center">
                <h1 className="text-5xl font-bold text-blue-gray-900 mb-4">Contact Me</h1>
                
                <h2 className="text-5xl font-semibold tracking-tighter text-center text-slate-700 max-md:max-w-full max-md:text-4xl">
                    Have an Awesome Project Idea? <span className="text-orange-400">Let&apos;s Discuss</span>
                </h2>
                <p className="text-xl text-gray-500 mt-6">
                We would love to hear from you! Please fill out the form below or reach out via WhatsApp.
                </p>
            </div>
            <div>
                <div className="container mx-auto border border-gray-200 shadow-lg rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-10 p-8">
                        <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
                            <h4 className="text-2xl font-semibold text-white mb-2">Contact Information</h4>
                            <p className="text-base text-gray-500 mb-8">
                                Fill up the form and I will get back to you within 24 hours.
                            </p>
                            <div className="flex gap-5">
                                <Phone className="h-6 w-6 text-white" />
                                <h6 className="text-lg text-white">+256(782) 726 885</h6>
                            </div>
                            <div className="flex my-2 gap-5">
                                <EnvelopeClosedIcon className="h-6 w-6 text-white" />
                                <h6 className="text-lg text-white">nassozimariam5@gmail.com</h6>
                            </div>
                            <div className="flex mb-10 gap-5">
                                <Ticket className="h-6 w-6 text-white" />
                                <h6 className="text-lg text-white">Open Support Ticket</h6>
                            </div>
                            <div className="flex items-center gap-5">
                                <button className="text-white">
                                   
                                    <Facebook className="h-6 w-6 text-blue-200 hover:fill-blue-400" />
                                </button>
                                <button className="text-white">
                                    
                                    <Instagram className="h-6 w-6 text-blue-200 hover:fill-purple-600" href="null" />
                                </button>
                                <button className="text-white">
                                  
                                    <Linkedin className="h-6 w-6 text-blue-200 hover:fill-blue-600" href="null" />
                                </button>
                            </div>
                            {/* Here */}
                            <div className='flex flex-col justify-center items-center'>
                            {/* <p className="text-lg text-gray-500 mt-2 self-start">Or reach out to me via WhatsApp.</p> */}

                                <div className="mt-12 text-slate-500 border border-solid border-neutral-300 rounded-[32px] px-8 py-4 hover:bg-green-500 hover:text-white max-md:px-5 max-md:py-3">
                                <button color="self-start px-4 py-2 mt-4 text-lg font-semibold tracking-tight  max-md:px-5 max-md:mt-10" onClick={sendWhatsAppMessage}>
                                    Send Message on WhatsApp
                                </button>
                                </div>
                            </div>

                        </div>
                        <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
                            <form action={sendEmail} ref={form}>
                                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                                    <div className="mb-3 md:mb-0">
                                        <label className="block text-gray-700">First Name</label>
                                        <input
                                            type="text"
                                            name="to_name"
                                            placeholder="eg. Lucas"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700">Last Name</label>
                                        <input
                                            type="text"
                                            name="last-name"
                                            placeholder="eg. Jones"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="from_name"
                                        placeholder="eg. lucas@mail.com"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                                    />
                                </div>
                                <p className="text-sm text-gray-500 mb-2">What are you interested in?</p>
                                <div className="mb-14">
                                    <label className="inline-flex items-center">
                                        <input type="radio" name="type" value="Design" className="form-radio text-gray-600" defaultChecked />
                                        <span className="ml-2 text-gray-700">Accounting</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" name="type" value="Development" className="form-radio text-gray-600" />
                                        <span className="ml-2 text-gray-700">Marketing</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" name="type" value="Support" className="form-radio text-gray-600" />
                                        <span className="ml-2 text-gray-700">Coaching</span>
                                    </label>
                                    <label className="inline-flex items-center ml-6">
                                        <input type="radio" name="type" value="Other" className="form-radio text-gray-600" />
                                        <span className="ml-2 text-gray-700">Other</span>
                                    </label>
                                </div>
                                <div className="mb-8">
                                    <label className="block text-gray-700">Your Message</label>
                                    <textarea
                                        name="message"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700"
                                    ></textarea>
                                </div>
                                <div className="w-full flex justify-end">
                                    <button className="w-full md:w-fit px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-orange-400">
                                        Send message
                                    </button>
                                </div>
                            </form>
                            
                        </div>
                        
                    </div>
                    <div className="flex flex-wrap gap-10 justify-between ml-48 items-center px-4 pb-4 max-w-full text-base tracking-tight text-black w-[770px]">
                            <div className="flex items-center self-stretch my-auto">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/be3840f0cd669a05dfa6997ae7ef5acb947748b7a2153435b7abce144ce4c6eb?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                                <span className="flex flex-wrap self-stretch my-auto">4.9/5 Average Ratings</span>
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
            </div>
        </section>
    );
}

export default Call;