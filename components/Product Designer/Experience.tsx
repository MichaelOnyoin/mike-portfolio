import React from 'react';
import ExperienceItem from './ExperienceItem';

interface ExperienceData {
  company: string;
  location: string;
  period: string;
  position: string;
  description: string;
}

const experiences: ExperienceData[] = [
  {
    company: "Cognizant",
    location: "Mumbai",
    period: "Sep 2016- July 2020",
    position: "Experience Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
  },
  {
    company: "Sugee Pvt limited",
    location: "Mumbai",
    period: "Sep 2020- July 2023",
    position: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales"
  },
  {
    company: "Cinetstox",
    location: "Mumbai",
    period: "Sep 2023",
    position: "Lead UX Designer",
    description: ""
  }
];

const Experience: React.FC = () => {
  return (
    <section className="flex overflow-hidden flex-col px-16 w-full min-h-[827px] max-md:px-5 max-md:max-w-full">
      <h2 className="gap-2.5 self-stretch py-20 w-full text-6xl tracking-tighter leading-none text-slate-700 max-md:max-w-full max-md:text-4xl">
        <span className="font-medium">My </span>
        <span className="font-medium text-orange-400">Work Experience</span>
      </h2>
      <div className="flex flex-wrap gap-10 justify-between items-start w-full max-md:max-w-full">
        <div className="flex flex-col items-start self-stretch leading-none min-w-[240px] max-md:max-w-full">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
        <div className="flex relative gap-2.5 w-12 min-h-[400px]">
          <div className="absolute top-0 left-2/4 z-0 shrink-0 self-start w-0 border-dashed -translate-x-2/4 border-[3px] border-slate-700 h-[394px] translate-y-[0%]" />
          <div className="flex z-0 flex-col justify-between w-12">
            {[0, 1, 2].map((_, index) => (
              <div key={index} className="flex overflow-hidden gap-2.5 justify-center items-center w-12 h-12 bg-white border-2 border-dashed border-slate-800 min-h-[48px] rounded-[48px]">
                Continuing from the previous code:

                <div className={`flex self-stretch my-auto w-9 h-9 ${index === 1 ? 'bg-slate-800' : 'bg-orange-400'} rounded-full min-h-[36px]`} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col min-w-[240px] w-[444px] max-md:max-w-full">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col max-w-full w-[444px] mt-12 first:mt-0">
              <h3 className="text-4xl font-semibold tracking-tight leading-none text-slate-700">
                {exp.position}
              </h3>
              {exp.description && (
                <p className="mt-3.5 text-xl font-medium tracking-tight text-gray-400 max-md:max-w-full">
                  {exp.description}
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