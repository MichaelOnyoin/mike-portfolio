import React from 'react';

const HireMe: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col justify-center items-center py-24 pr-16 pl-16 w-full bg-gray-100 min-h-[806px] rounded-[50px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap justify-between items-center max-w-full min-h-[600px] w-[1299px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/1684d90b401a49bebea03501121004cdf345282e9bfc321b1a68d7827431ca35?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Designer at work" className="object-contain self-stretch my-auto aspect-[1.01] min-w-[240px] w-[603px] max-md:max-w-full" />
        <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <h2 className="w-full text-6xl font-semibold tracking-tighter leading-none text-slate-700 max-md:max-w-full max-md:text-4xl">
            Why <span className="text-orange-400">Hire me</span>?
          </h2>
          <p className="mt-12 text-xl tracking-tight text-gray-400 max-md:mt-10 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
          </p>
          <div className="flex flex-wrap gap-2.5 items-start mt-12 w-full max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="text-4xl font-medium tracking-tight text-slate-800">450+</div>
              <div className="mt-2.5 text-xl tracking-tight text-gray-500">Project Completed</div>
            </div>
            <div className="flex flex-col flex-1 shrink basis-0 min-w-[240px]">
              <div className="text-4xl font-medium tracking-tight text-slate-800">450+</div>
              <div className="mt-2.5 text-xl tracking-tight text-gray-500">Project Completed</div>
            </div>
          </div>
          <button className="self-start px-14 py-8 mt-12 text-3xl font-semibold tracking-tight border border-solid border-neutral-900 rounded-[32px] text-neutral-900 max-md:px-5 max-md:mt-10">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;