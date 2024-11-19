import React from 'react';
import CallToActionButton from './CallToActionButton';
const Hero: React.FC = () => {
  return (
    <section className="flex relative z-0 gap-10 justify-center items-start w-full min-h-[846px] text-neutral-900">
      <div className="flex absolute z-0 flex-col items-center text-8xl tracking-tighter text-center leading-[96px] min-w-[240px] right-[263px] top-[37px] w-[913px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
        <div className="flex flex-col items-center max-w-full w-[913px] max-md:text-4xl max-md:leading-10">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/ac547e3f01a5fbeeec27fb622dc87bc107742c8201e9abbd9467a4344a547b41?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Designer logo" className="object-contain max-w-full rounded-none aspect-[1.98] w-[127px]" />
          <h1 className="mt-2.5 mr-5 max-md:max-w-full max-md:text-4xl max-md:leading-10">
            <span className="font-semibold">I&apos;m </span>
            <span className="font-semibold text-orange-400">Mariam</span>
            <span className="font-semibold">,Digital Marketing & Accountant</span>
          </h1>
        </div>
      </div>
      <div className="flex absolute z-0 flex-col text-xl font-medium tracking-tight bottom-[335px] left-[71px] min-w-[240px] text-slate-700">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/bd2705fc09e3e2a7d100cc98d7cd0b62d71b9770d9cc40c24372d6e1a31d4b05?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Testimonial icon" className="object-contain w-9 aspect-square" />
        <p className="mt-6">
          My Exceptional digital marketing strategies <br></br> will ensure your business&apos; success
        </p>
      </div>
      <div className="flex absolute z-0 flex-col items-end leading-none text-center bottom-[341px] right-[71px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/afed4b7ae19836d293ba524f52f4bc281548d12a0ee458f86138c5293c311d41?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Experience badge" className="object-contain w-40 max-w-full aspect-[5]" />
        <div className="flex flex-col items-end mt-5">
          <div className="text-5xl font-bold tracking-tighter max-md:text-4xl">
            5 Years
          </div>
          <div className="mt-1.5 text-xl tracking-tight">
            Experience
          </div>
        </div>
      </div>
      <div className="flex relative z-0 flex-col items-start self-end text-2xl tracking-tight text-white min-w-[240px] w-[952px] max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/4c7a02f13c0ede516ea9773df2b729ec4e74cacc7b0317d3a805fdec91371b14?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Background design" className="object-contain absolute bottom-0 z-0 max-w-full aspect-[2] h-[406px] right-[57px] w-[812px]" />
       
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/e67f32d04f31e09a2650feaa59c8f05d98cf87c81242dd606a9cc80ff29dff52?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Hero image" className="object-contain z-0 self-center max-w-full aspect-[1.5] w-[952px]" />
      </div>
      <CallToActionButton className="absolute left-2/4 z-0 -translate-x-2/4 bottom-[46px] translate-y-[0%]" />
    </section>
  );
};

export default Hero;