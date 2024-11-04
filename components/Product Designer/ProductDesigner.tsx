import React from 'react';
import Header from './Header';
import Experience from './Experience';
import ActionButtons from './ActionButton';
import BackgroundImage from './BackgroundImage';

const ProductDesigner: React.FC = () => {
  return (
    <main className="flex relative z-0 gap-10 justify-center items-start w-full min-h-[846px] text-neutral-900">
      {/* <Header /> */}
      <Experience />
      <ActionButtons />
      <BackgroundImage />
    </main>
  );
};

export default ProductDesigner;