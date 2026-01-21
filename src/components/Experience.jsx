import React from "react";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const datas = [
    {
      id: 1,
      title: "User Interface Designer - DTI  ",
      periodstart: 2022,
      periodend: 2024,
      description: [
        "Built intuitive User Interfaces that expresses great User Experience. I conducted user research and usability testing to inform my design decisions and collaborated with product managers and developers to ensure a smooth handoff of designs. Additionally, I contributed to the design system and maintained UI consistency across various projects.",
      ],
      stack: ["Figma", "Miro", "Jira"],
    },
    {
      id: 2,
      title: "UI Designer & Frontend Developer - Greenbin  ",
      periodstart: 2024,
      periodend: 2025,
      description: [
        "Built intuitive User Interfaces that expresses great User Experience. I conducted user research and usability testing to inform my design decisions and collaborated with product managers and developers to ensure a smooth handoff of designs. Additionally, I contributed to the design system and maintained UI consistency across various projects.",
        ,
      ],
      stack: ["Figma", "React", "Javascript", "TailwindCss", "Github"],
    },
    {
      id: 3,
      title: "User Interface Designer - Dev & Design  ",
      periodstart: 2024,
      periodend: 2024,
      description: [
        "Collaborate with a team of designers to buid User Interfaces with great User Experience",
      ],
      stack: ["Figma", "Jitter"],
    },
  ];

  return (
    <>
      {datas.map((data) => (
        <div
          key={data.id}
          className="group relative flex flex-col lg:flex-row justify-between align-top gap-4 py-4 lg:p-4 
                     rounded-xl transition-colors duration-300 ease-in-out
                     hover:bg-white/2  
                     hover:drop-shadow-lg lg:border-none "
        >
          {/* LINK */}
          {/* <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`View details for ${data.title}`}
          /> */}
          <p className="font-normal text-sm lg:text-[14px] text-[#94a3b8] mt-1">
            {data.periodstart} - {data.periodend}
          </p>
          <div>
            <h1
              className="font-semibold mb-2 text-lg lg:text-[20px] text-[#e6e6e6] origin-left transition-transform duration-300 ease-out
                           group-hover:text-[#A48E12] group-hover:scale-98"
            >
              {data.title}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </h1>
            <p className="font-normal text-sm leading-relaxed lg:text-[14px] text-[#94a3b8] max-w-119">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {data.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#A48E12]/10 text-[#A48E12] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
