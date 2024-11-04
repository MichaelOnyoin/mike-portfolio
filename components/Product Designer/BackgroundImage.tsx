import React from 'react';

const BackgroundImage: React.FC = () => {
  return (
    <div className="flex relative z-0 flex-col items-start self-end text-2xl tracking-tight text-white min-w-[240px] w-[952px] max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/4c7a02f13c0ede516ea9773df2b729ec4e74cacc7b0317d3a805fdec91371b14?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Background design element" className="object-contain absolute bottom-0 z-0 max-w-full aspect-[2] h-[406px] right-[57px] w-[812px]" />
      <div className="flex absolute -bottom-7 z-0 flex-col px-20 pb-16 max-w-full h-[688px] left-[-35px] pt-[468px] w-[1018px] max-md:px-5 max-md:pt-24">
        <div className="flex flex-col pb-7 max-w-full w-[367px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/fc528da7168ba558a0000e485571a9a08b5b31755e02bb453cbf0ae5aad98eb7?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain ml-14 w-7 aspect-[1.17] max-md:ml-2.5" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/fc528da7168ba558a0000e485571a9a08b5b31755e02bb453cbf0ae5aad98eb7?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain z-10 self-end mt-0 mr-6 w-7 aspect-[1.17] max-md:mr-2.5" />
        </div>
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/e67f32d04f31e09a2650feaa59c8f05d98cf87c81242dd606a9cc80ff29dff52?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="Decorative background element" className="object-contain z-0 self-center max-w-full aspect-[1.5] w-[952px]" />
    </div>
  );
};

export default BackgroundImage;