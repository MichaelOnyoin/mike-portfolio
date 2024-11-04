import React from 'react';

interface ExperienceItemProps {
  company: string;
  location: string;
  period: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, location, period }) => {
  return (
    <div className="flex flex-col mt-24 first:mt-0">
      <h3 className="text-4xl font-semibold tracking-tight text-slate-700">
        {company}, {location}
      </h3>
      <div className="mt-3.5 text-2xl tracking-tight text-gray-400">
        {period}
      </div>
    </div>
  );
};

export default ExperienceItem;