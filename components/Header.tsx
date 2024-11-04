import React from 'react';

interface HeaderProps {
  activeTab: string;
}

const Header: React.FC<HeaderProps> = ({ activeTab }) => {
  const tabs = ['Home', 'About', 'Service', 'Resume', 'Project', 'Contact'];

  return (
    <header className="flex relative flex-col items-center self-center w-full max-md:max-w-full">
      <nav className="flex z-0 flex-wrap gap-3.5 justify-between items-center px-2.5 max-w-full bg-neutral-900 min-h-[86px] rounded-[50px] w-[1298px]">
        {tabs.map((tab) => (
          <a
            key={tab}
            href={`#${tab.toLowerCase()}`}
            className={`overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl ${
              activeTab === tab.toLowerCase()
                ? 'font-bold bg-orange-400'
                : ''
            } tracking-tight text-white whitespace-nowrap rounded-[60px] max-md:px-5`}
          >
            {tab}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;