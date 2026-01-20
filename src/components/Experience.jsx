import React from "react";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  const datas = [
    {
      id: 1,
      title: "Junior Frontend Engineer - Greenbin  ",
      period: 2024,
      description: [
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      stack: ["React", "Javascript", "TailwindCss"],
      link: "#",
    },
    {
      id: 2,
      title: "Senior Frontend Engineer - Greenbin  ",
      period: 2015,
      description: [
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      stack: ["React", "Javascript", "TailwindCss"],
      link: "#",
    },
    {
      id: 3,
      title: "Senior Frontend Engineer - Greenbin  ",
      period: 2015,
      description: [
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      stack: ["React", "Javascript", "TailwindCss"],
      link: "#",
    },
    {
      id: 4,
      title: "Senior Frontend Engineer - Greenbin  ",
      period: 2015,
      description: [
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      ],
      stack: ["React", "Javascript", "TailwindCss"],
      link: "#",
    },
  ];

  return (
    <>
      {datas.map((data) => (
        <div
          key={data.id}
          className="group relative flex flex-col lg:flex-row justify-between align-top gap-4 p-4 
                     rounded-xl transition-colors duration-300 ease-in-out
                     hover:bg-white/2  
                     hover:drop-shadow-lg "
        >
          <a
            href={data.link}
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 z-20 cursor-pointer"
            aria-label={`View details for ${data.title}`}
          />
          <p className="font-normal text-sm lg:text-[14px] text-[#94a3b8] mt-1">
            {data.period} - Present
          </p>
          <div>
            <h1
              className="font-semibold mb-2 text-xl lg:text-[20px] text-[#e6e6e6] origin-left transition-transform duration-300 ease-out
                           group-hover:text-[#A48E12] group-hover:scale-98"
            >
              {data.title}
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
            </h1>
            <p className="font-normal lg:text-[14px] text-[#94a3b8] max-w-119">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              {data.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#A48E12] rounded-2xl text-sm lg:rounded-4xl lg:text-[14px] text-white px-3 py-1"
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
