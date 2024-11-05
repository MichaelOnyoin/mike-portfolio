import React from 'react';

interface ServiceCardProps {
  title: string;
  imageSrc: string;
  iconSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, iconSrc }) => (
  <div className="flex relative gap-2.5 items-start min-w-[240px] w-[416px]" id='service'>
    <div className="flex z-0 flex-col self-end text-3xl font-medium tracking-tight text-white min-w-[240px] w-[416px]">
      <div className="flex relative flex-col pt-11 w-full aspect-[0.819] rounded-[37px_37px_37px_37px]">
        <img loading="lazy" src={imageSrc} alt={`${title} background`} className="object-cover absolute inset-0 size-full" />
        <div className="flex relative flex-col w-full">
          <h3 className="flex-1 shrink px-9 w-full max-md:px-5">{title}</h3>
          <div className="mt-6 max-w-full border-2 border-solid border-gray-50 border-opacity-30 min-h-[2px] w-[416px]" />
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/20b7cf86852084f29c378734cac0ab0547ce9433bb4bdbd6ae777d8d20e61349?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain mt-12 w-full aspect-[1.19] max-md:mt-10" />
      </div>
    </div>
    <div className="flex absolute right-0 bottom-0 z-0 gap-2.5 justify-center items-center self-start px-5 bg-slate-800 h-[114px] min-h-[114px] rotate-[-1.570796370506285rad] rounded-[57px] w-[115px] max-md:px-5">
      <img loading="lazy" src={iconSrc} alt={`${title} icon`} className="object-contain flex-1 shrink aspect-square basis-0 w-[72px]" />
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    { title: "UI/ UX Design", imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/f6d29b44d119f4216b0dbba632ccf0e2524fb94a794c6ac8e6a8f183e7f1dbc2?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", iconSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/a90078884d5286afe0275ec2e5d1133738f2b4656d28c7f33ae9e5dd5654b295?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" },
    { title: "Web Design", imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/2d486f196f66e8e6bcf484f14ba48b43f46c716353e8070ddfe3a853ca4c83d3?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", iconSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/65f963ad014dd5875a3f924860fcd01c1734109cd97b5b00d9786c97270b3a2c?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" },
    { title: "Landing Page", imageSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/27a83de7dea093f45141f30be968cd0175538966adf6d95d6778a14253a0e412?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&", iconSrc: "https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/a90078884d5286afe0275ec2e5d1133738f2b4656d28c7f33ae9e5dd5654b295?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" }
  ];

  return (
    <section className="flex overflow-hidden relative flex-col items-center pt-28 pr-16 pb-14 pl-16 w-full bg-neutral-900 min-h-[878px] rounded-[50px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="flex overflow-hidden absolute inset-x-0 bottom-0 z-0 flex-col self-start px-20 pt-36 w-full h-[828px] max-md:pt-24 max-md:pl-5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/964419d3b808d99db98a3f6dea6d199a513bac6a3589d6316fb862517ec94271?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Background design" className="object-contain max-w-full aspect-[0.71] w-[486px]" />
      </div>
      <div className="flex z-0 flex-wrap gap-10 justify-between items-end max-w-full w-[1299px]">
        <h2 className="text-5xl tracking-tighter leading-none text-gray-50 max-md:text-4xl">
          <span className="font-medium">My </span>
          <span className="font-medium text-orange-400">Services</span>
        </h2>
        <p className="text-xl font-medium tracking-tight text-white w-[576px] max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </div>
      <div className="flex z-0 flex-col items-center mt-24 w-full max-w-[1299px] max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-6 justify-between items-start w-full max-md:max-w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex gap-3 items-start mt-10">
          <div className="flex shrink-0 bg-orange-400 rounded-3xl h-[15px] w-[60px]" />
          <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
          <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
          <div className="flex shrink-0 bg-gray-200 rounded-3xl h-[15px] w-[15px]" />
        </div>
      </div>
    </section>
  );
};

export default Services;