import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="flex relative z-0 flex-col items-start self-end text-2xl tracking-tight text-white min-w-[240px] w-[952px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/4c7a02f13c0ede516ea9773df2b729ec4e74cacc7b0317d3a805fdec91371b14?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Background" className="object-contain absolute bottom-0 z-0 max-w-full aspect-[2] h-[406px] right-[57px] w-[812px]" />
      <div className="flex overflow-hidden absolute z-0 gap-2.5 justify-center items-center p-2.5 max-w-full bg-white bg-opacity-10 bottom-[43px] h-[82px] left-[292px] min-h-[82px] right-[293px] rounded-[50px] w-[367px]">
        <button className="flex overflow-hidden justify-center items-center self-stretch px-5 py-2.5 my-auto w-52 font-medium whitespace-nowrap bg-orange-400 border border-gray-300 border-solid rounded-[60px]">
          <span className="self-stretch my-auto">Portfolio</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/5102791e89011128a70c5f4019db43355c97bc8eab0bf659b52cf9074b59dc7f?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]" />
        </button>
        <button className="overflow-hidden flex-1 shrink gap-2.5 self-stretch py-2.5 pr-4 pl-5 my-auto font-light rounded-[60px]">
          Hire me
        </button>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/e67f32d04f31e09a2650feaa59c8f05d98cf87c81242dd606a9cc80ff29dff52?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Hero" className="object-contain z-0 self-center max-w-full aspect-[1.5] w-[952px]" />
    </div>
  );
};

export default HeroImage;