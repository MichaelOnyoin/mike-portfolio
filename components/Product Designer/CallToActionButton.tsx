import React from 'react';

interface CallToActionButtonProps {
  className?: string;
}

const CallToActionButton: React.FC<CallToActionButtonProps> = ({ className = '' }) => {
  return (
    <div className={`flex overflow-hidden gap-2.5 justify-center items-center p-2.5 max-w-full bg-white bg-opacity-10 h-[82px] min-h-[82px] rounded-[50px] w-[367px] ${className}`}>
      <button className="flex overflow-hidden justify-center items-center self-stretch px-5 py-2.5 my-auto w-52 font-medium whitespace-nowrap bg-orange-400 border border-gray-300 border-solid rounded-[60px]">
        <span className="self-stretch my-auto">Portfolio</span>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/1391f202a6104b468a8033acf7e36115/5102791e89011128a70c5f4019db43355c97bc8eab0bf659b52cf9074b59dc7f?apiKey=2c0ef7d7caa24d8d8c04d3962010fc58&" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[42px]" />
      </button>
      <button className="overflow-hidden flex-1 shrink gap-2.5 self-stretch py-2.5 pr-4 pl-5 my-auto font-light rounded-[60px]">
        Hire me
      </button>
    </div>
  );
};

export default CallToActionButton;