import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex overflow-hidden flex-col pt-10 w-full bg-white max-w-[1440px] max-md:max-w-full">
      <Header activeTab="home" />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;