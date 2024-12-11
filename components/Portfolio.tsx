import React from 'react';

interface PortfolioItemProps {
  imageSrc: string;
  title: string;
  description:string;
}
//imageSrc,
const PortfolioItem: React.FC<PortfolioItemProps> = ({  title, imageSrc, description }) => (
  <div className="flex grow shrink gap-2.5 justify-center self-stretch p-2.5 my-auto bg-white rounded-3xl min-h-[271px] min-w-[240px] w-[506px] max-md:max-w-full">
    {/* bg-[url('/public/accounting-unsplash.jpg')] */}
    <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] min-h-screen max-md:max-w-full  ">
      <div className="flex items-start relative flex-shrink-0 max-md:max-w-full">
        <div className="flex gap-2.5 justify-center p-2 w-16 border border-orange-400 border-solid  rotate-15 rounded-[60px]">
          
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/c1ce4261a3ad5f803804e7445d5013e8bab76f7f292f05346f2bdf89c021074b?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="arrow button" className="object-contain flex-1 shrink w-full aspect-square basis-0 rounded-full" role='button' />
          
        </div>   
      </div>
      <div className='relative flex-shrink-0 group'>
       <img loading='lazy' src={imageSrc} className='rounded-lg w-full' alt='project-images'/>
       <div className='absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4 mx-2 mb-4 float rounded-lg hidden group-hover:block'>
        <h3 className="gap-2.5 px-2.5 pt-10 pb-2.5  max-w-full text-5xl font-bold tracking-tighter whitespace-nowrap min-h-[138px] text-white w-[593px] max-md:mt-10 max-md:text-4xl">
          {title}
        </h3>  
        <p className="text-white text-lg">{description}</p>
          
      </div>
      </div>
      
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const portfolioItems = [
     { imageSrc: "accounting-unsplash.jpg", 
      title: "HLB Accounting", 
      description:'creating a financial statement analysis for a company. This project would involve gathering the company`s financial data, such as income statements, balance sheets, and cash flow statements. The analysis would include calculating financial ratios, assessing the company`s financial performance, profitability, liquidity, and solvency.' },
    // { imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/c156205109c5a1e3454218b5d4337b3f7cd901a80f52cb81e0fddd4f05d0aae4?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", title: "Lirante" }
    //{ imageSrc: "https://placehold.co/320x180", title: "LirApp" },
    { imageSrc: "Marketing-1024x1024.jpg",
       title: "Digital Marketing",
        description:'This project would involve conducting market research to identify target audiences, analyzing competitors, setting marketing objectives, creating a marketing strategy, designing promotional materials, determining the marketing channels to use (such as social media, email, or advertising),' },
    
        // { imageSrc: "events-unsplash.jpg", 
        //   title: "HLB Accounting", 
        //   description:'creating a financial statement analysis for a company. This project would involve gathering the company&apos;s financial data, such as income statements, balance sheets, and cash flow statements. The analysis would include calculating financial ratios, assessing the company&apos;s financial performance, profitability, liquidity, and solvency.' },
      
  ];

  return (
    <section className="flex overflow-hidden flex-col px-16 py-24 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full font-bold max-md:max-w-full">
        <h2 className="self-stretch my-auto text-6xl tracking-tighter text-slate-700 w-[643px] max-md:max-w-full max-md:text-4xl">
          Lets have a look at my <span className="text-orange-400">Portfolio</span>
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
                <PortfolioItem key={index} {...item} />
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
          {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map((tag, index) => (
            <div key={index} className="overflow-hidden gap-2.5 self-stretch px-8 py-4 bg-gray-100 rounded-3xl max-md:px-5">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-12 max-w-full w-[742px] max-md:mt-10">
          <div className="flex flex-wrap gap-5 items-end max-md:max-w-full">
            <h3 className="text-5xl font-bold tracking-tighter text-slate-700 max-md:max-w-full max-md:text-4xl">
              Lirante - Food Delivery Solution
            </h3>
            <div className="flex gap-2.5 justify-center items-center px-3 bg-orange-400 border-2 border-orange-400 border-solid h-[58px] min-h-[58px] rotate-[-1.570796370506285rad] rounded-[60px] w-[58px]">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/9ae7a72f372960b5a51eefa4929239e41a547aed319630a96df61c89249a86d1?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain flex-1 shrink aspect-square basis-0 w-[34px]" role='button' />
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