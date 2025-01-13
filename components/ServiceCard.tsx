import React from "react";
import {Calendar} from 'lucide-react'

export function ServiceCard() {
    return (
      <div> 
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-6 flex items-center space-x-4 ">
            <img src="coach.avif" alt="Image of grass representing lawn mowing service" className="w-56 h-56 rounded-full object-cover" />
            <div className="flex-1">
                <h2 className="text-xl font-semibold">Coaching</h2>
                <p className="text-slate-700 text-lg">
                Are you ready to unlock your full potential and achieve the success you&apos;ve been dreaming of? As a coach, I&apos;m here to guide you on a transformational journey—helping you overcome challenges, set clear goals, and take actionable steps toward the life you deserve.

                Whether you&apos;re looking to grow in your career, improve your mindset, or achieve work-life balance, my coaching services are designed to empower you with the tools, strategies, and confidence to succeed. Together, we&apos;ll create a personalized plan that aligns with your values and vision, turning obstacles into opportunities and ambitions into achievements
                </p>
            </div>
            <div className="text-right px-4">
                <div className="text-xl font-semibold">$30.00</div>
                <div className="text-gray-500 text-lg flex items-right">
                    <Calendar className="h-6 w-6 mr-6"/> 
                    Duration
                </div>
                <button className="mt-2 text-white px-4 py-2 rounded bg-orange-400">Buy Service</button>
            </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-6 flex items-center space-x-4 ">
            <img src="digit.avif" alt="Image of grass representing lawn mowing service" className="w-56 h-56 rounded-full object-cover" />
            <div className="flex-1">
                <h2 className="text-xl font-semibold">Digital Marketing</h2>
                <p className="text-slate-700 text-lg">
                Are you ready to take your business to new heights and connect with customers you&apos;ve never reached before? I specialize in helping businesses like yours break into untouched markets through strategic digital marketing.

                With a tailored approach to your unique goals, I&apos;ll help you identify untapped opportunities, craft engaging campaigns, and position your brand in front of the right audience. From social media growth and search engine optimization to targeted ad strategies, I&apos;ll ensure your message reaches the people who need your products or services the most
                </p>
            </div>
            <div className="text-right px-4">
                <div className="text-xl font-semibold">$30.00</div>
                <div className="text-gray-500 text-lg flex items-right">
                    <Calendar className="h-6 w-6 mr-6"/> 
                    Duration
                </div>
                <button className="mt-2 text-white px-4 py-2 rounded bg-orange-400">Buy Service</button>
            </div>
        </div>
        <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-6 flex items-center space-x-4 ">
            <img src="selfmanage.avif" alt="Image of grass representing lawn mowing service" className="w-56 h-56 rounded-full object-cover" />
            <div className="flex-1">
                <h2 className="text-xl font-semibold">Self Management</h2>
                <p className="text-slate-700 text-lg">
                Feeling overwhelmed by your busy schedule or struggling to keep up with daily routines? I can help you take control of your time, prioritize what matters most, and build lasting habits that fit seamlessly into your lifestyle.

                 Through my self-management coaching, I&apos;ll guide you to create a personalized system to balance work, personal responsibilities, and even your self-care routines—without the stress. Whether it&apos;s mastering your calendar, building effective to-do lists, or staying on track with personal hygiene and wellness, I&apos;ll give you the tools to stay organized and confident every day
                 </p>
            </div>
            <div className="text-right px-4">
                <div className="text-xl font-semibold">$30.00</div>
                <div className="text-gray-500 text-lg flex items-right">
                    <Calendar className="h-6 w-6 mr-6"/> 
                    Duration
                </div>
                <button className="mt-2 text-white px-4 py-2 rounded bg-orange-400">Buy Service</button>
            </div>
        </div>
      </div>
    );
}