import React from 'react';

interface ExperienceItemProps {
  company: string;
  location: string;
  period: string;
  role?: string;
  isActive: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ company, location, period, role, isActive }) => (
  <div className="flex flex-col">
    <h3 className="text-4xl font-semibold tracking-tight text-slate-700">
      {company}, {location}
    </h3>
    <p className="mt-3.5 text-2xl tracking-tight text-gray-400">{period}</p>
    {role && <p className="mt-3.5 text-2xl tracking-tight text-slate-700">{role}</p>}
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    { company: "Coach Coegi", location: "India (Remote)", period: "Nov 2022- to Date", role: "Virtual Assitant", isActive: true },
    { company: "HLB Jim Roberts", location: "Kampala", period: "Sep 2024- to Date", role: "Digital Marketer/ Accountant", isActive: false },
    { company: "Penghis Ltd", location: "Kampala", period: "Feb 2021- Nov 2023 ", role: "Project Coordinator", isActive: true }
  ];

  return (
    <section className="flex overflow-hidden flex-col px-16 w-full min-h-[827px] max-md:px-5 max-md:max-w-full">
      <h2 className="gap-2.5 self-stretch py-20 w-full text-6xl tracking-tighter leading-none text-slate-700 max-md:max-w-full max-md:text-4xl">
        <span className="font-medium">My </span>
        <span className="font-medium text-orange-400">Work Experience</span>
      </h2>
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <div className="flex flex-col items-start self-stretch leading-none min-w-[240px] max-md:max-w-full">
          {experiences.map((exp, index) => (
            <div key={index} className={index > 0 ? "mt-24 max-md:mt-10" : ""}>
              <ExperienceItem {...exp} />
            </div>
          ))}
        </div>
        <div className="flex relative gap-2.5 w-12 min-h-[400px]">
          <div className="absolute top-0 left-2/4 z-0 shrink-0 self-start w-0 border-dashed -translate-x-2/4 border-[3px] border-slate-700 h-[394px] translate-y-[0%]" />
          <div className="flex z-0 flex-col justify-between w-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex overflow-hidden gap-2.5 justify-center items-center ${index > 0 ? "mt-32 max-md:mt-10" : ""} w-12 h-12 bg-white border-2 border-dashed border-slate-800 min-h-[48px] rounded-[48px]`}>
                <div className={`flex self-stretch my-auto w-9 h-9 ${exp.isActive ? 'bg-orange-400' : 'bg-slate-800'} rounded-full min-h-[36px]`} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[444px] max-md:max-w-full">
          {experiences.map((exp, index) => (
            <div key={index} className={`flex flex-col ${index > 0 ? "mt-12 max-md:mt-10" : ""} max-w-full w-[444px]`}>
              <h3 className="text-4xl font-semibold tracking-tight leading-none text-slate-700">
                {exp.role}
              </h3>
              {index < 2 && (
                <p className="mt-3.5 text-xl font-medium tracking-tight text-gray-400 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;