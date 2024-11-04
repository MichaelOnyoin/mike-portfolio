import React from 'react';

interface ServiceCardProps {
  title: string;
  image: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, image, icon }) => {
  return (
    <div className="flex relative gap-2.5 items-start min-w-[240px] w-[416px]">
      <div className="flex z-0 flex-col self-end text-3xl font-medium tracking-tight text-white min-w-[240px] w-[416px]">
        <div className="flex relative flex-col pt-11 w-full aspect-[0.819] rounded-[37px_37px_37px_37px]">
          <img loading="lazy" src={image} alt={title} className="object-cover absolute inset-0 size-full" />
          <div className="flex relative flex-col w-full">
            <h3 className="flex-1 shrink px-9 w-full max-md:px-5">
              {title}
            </h3>
            <div className="mt-6 max-w-full border-2 border-solid border-gray-50 border-opacity-30 min-h-[2px] w-[416px]" />
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/20b7cf86852084f29c378734cac0ab0547ce9433bb4bdbd6ae777d8d20e61349?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain mt-12 w-full aspect-[1.19] max-md:mt-10" />
        </div>
      </div>
      <div className="flex absolute right-0 bottom-0 z-0 gap-2.5 justify-center items-center self-start px-5 bg-slate-800 h-[114px] min-h-[114px] rotate-[-1.570796370506285rad] rounded-[57px] w-[115px] max-md:px-5">
        <img loading="lazy" src={icon} alt="" className="object-contain flex-1 shrink aspect-square basis-0 w-[72px]" />
      </div>
    </div>
  );
};

export default ServiceCard;