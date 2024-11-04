import React from 'react';
import PortfolioCard from './PortfolioCard';

const portfolioItems = [
  { image: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/3b1c8f9a09754ee0acecc3af4f41e95fbe049c835f561c76215adcc580d21e54?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", category: "UI/ UX Design", title: "Lirante" },
  { image: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/c156205109c5a1e3454218b5d4337b3f7cd901a80f52cb81e0fddd4f05d0aae4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", category: "App Design", title: "Lirante" },
];

const Portfolio: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col px-16 py-24 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold max-md:max-w-full">
        <h2 className="self-stretch my-auto text-6xl tracking-tighter text-slate-700 w-[643px] max-md:max-w-full max-md:text-4xl">
          <span className="font-semibold">Lets have a look at my </span>
          <span className="font-semibold text-orange-400">Portfolio</span>
        </h2>
        <button className="overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl tracking-tight text-white bg-orange-400 rounded-[60px] max-md:px-5">
          See All
        </button>
      </div>
      <div className="flex flex-col items-center self-center mt-12 w-full max-w-[1290px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-md:max-w-full">
          <div className="flex items-center w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-6 items-center self-stretch my-auto min-w-[240px] w-[1290px] max-md:max-w-full">
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-start mt-12 max-md:mt-10">
            <div className="flex shrink-0 bg-orange-400 rounded-3xl h-[15px] w-[60px]" />
            <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
            <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
            <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
          </div>
        </div>
        <div className="flex flex-wrap gap-3.5 items-start mt-12 text-xl text-black max-md:mt-10 max-md:max-w-full">
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 bg-gray-100 rounded-3xl max-md:px-5">
            Landing Page
          </button>
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 bg-gray-100 rounded-3xl max-md:px-5">
            Product Design
          </button>
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 whitespace-nowrap bg-gray-100 rounded-3xl max-md:px-5">
            Animation
          </button>
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 whitespace-nowrap bg-gray-100 rounded-3xl max-md:px-5">
            Glassmorphism
          </button>
          <button className="overflow-hidden gap-2.5 self-stretch px-8 py-4 whitespace-nowrap bg-gray-100 rounded-3xl max-md:px-5">
            Cards
          </button>
        </div>
        <div className="flex flex-col mt-12 max-w-full w-[742px] max-md:mt-10">
          <div className="flex flex-wrap gap-5 items-end max-md:max-w-full">
            <h3 className="text-5xl font-bold tracking-tighter text-slate-700 max-md:max-w-full max-md:text-4xl">
              Lirante - Food Delivery Solution
            </h3>
            <div className="flex gap-2.5 justify-center items-center px-3 bg-orange-400 border-2 border-orange-400 border-solid h-[58px] min-h-[58px] rotate-[-1.570796370506285rad] rounded-[60px] w-[58px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/9ae7a72f372960b5a51eefa4929239e41a547aed319630a96df61c89249a86d1?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain flex-1 shrink aspect-square basis-0 w-[34px]" />
            </div>
          </div>
          <p className="self-start mt-6 text-xl tracking-tight text-center text-slate-700 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;