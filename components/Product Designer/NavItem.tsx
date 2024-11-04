import React from 'react';

interface NavItemProps {
  label: string;
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
  return (
    <div
      className={`overflow-hidden gap-2.5 self-stretch px-10 py-5 my-auto text-xl ${
        isActive ? 'font-bold bg-orange-400' : ''
      } tracking-tight text-white whitespace-nowrap rounded-[60px] max-md:px-5`}
    >
      {label}
    </div>
  );
};

export default NavItem;