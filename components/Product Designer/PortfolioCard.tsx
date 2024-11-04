import React from 'react';

interface PortfolioCardProps {
  image: string;
  category: string;
  title: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, category, title }) => {
  return (
    <div className="flex grow shrink gap-2.5 justify-center self-stretch p-2.5 my-auto bg-white rounded-3xl min-h-[371px] min-w-[240px] w-[506px] max-md:max-w-full">
      <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex gap-2.5 items-start w-full max-md:max-w-full">
          <div className="flex gap-2.5 justify-center p-4 w-16 border border-orange-400 border-solid min-h-[64px] rotate-[-1.570796370506285rad] rounded-[60px]">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/c1ce4261a3ad5f803804e7445d5013e8bab76f7f292f05346f2bdf89c021074b?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain flex-1 shrink w-full aspect-square basis-0" />
          </div>
        </div>
        <h3 className="gap-2.5 px-2.5 pt-16 pb-2.5 mt-36 max-w-full text-7xl font-bold tracking-tighter whitespace-nowrap min-h-[138px] text-stone-50 w-[593px] max-md:mt-10 max-md:text-4xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;