import React from "react";
import { Github, ExternalLink, ArrowUpRight, Figma } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Layr",
      image: "/Layr.png",
      description:
        "Designing shouldn’t start with dragging rectangles. AI Frame Expander was born from a simple question, what if you could turn an empty frame into a ready-to-edit layout with just a prompt? This tool reimagines how designers begin their creative process. Instead of staring at a blank frame, you describe your vision , “SaaS dashboard with sidebar and charts” and AI instantly expands it into a structured, responsive layout.",
      stack: ["Figma"],
      icons: [
        {
          icon: <Figma size={20} />,
          url: "https://www.figma.com/design/vuGHkYTiX6Vo8wUM1me3no/Team-5?node-id=1057-33&t=L76FK9g5OhfrCGZA-1",
        },
      ],
    },
    {
      id: 2,
      title: "Luxura -Dynamic E-Commerce Product Catalog",
      image: "/Luxura-product-catalog.png",
      description: `A modern, production-ready e-commerce product catalog built with Next.js 14, Redux Toolkit, TypeScript, 
      and Tailwind CSS. Features advanced filtering, sorting, pagination, and a stunning user interface.`,
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind",
        "Redux",
        "Framer-motion",
      ],
      icons: [
        {
          icon: <Figma size={20} />,
          url: "https://www.figma.com/design/mFo5t1EVxHt15JWJgv5L9W/LUXURA?node-id=1-2&t=S5IpU1UpGYbYSuUs-1",
        },
        {
          icon: <Github size={20} />,
          url: "https://github.com/Maven0001/alx-project-nexus/tree/master/my-product-catalog",
        },
        {
          icon: <ExternalLink size={20} />,
          url: "https://luxura-product-catalog.vercel.app/",
        },
      ],
    },
    {
      id: 3,
      title: "Tisha",
      image: "",
      description: `A modern, production-ready platform for individuals who are ready to learn and also creators who are ready to share their knowledge.`,
      stack: ["Next.js", "React", "TypeScript", "Tailwind", "Redux"],
      icons: [
        {
          icon: <ExternalLink size={20} />,
          url: "https://tisha.app",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {projects.map((project) => (
        <div
          key={project.id}
          className="group relative grid grid-cols-1 md:grid-cols-4 lg:p-4 gap-6 py-6 rounded-xl transition-all duration-300 hover:bg-white/5"
        >
          {/* Project Image Thumbnail */}
          <div className="md:col-span-1">
            <img
              src={project.image}
              alt={project.title}
              className="rounded border-2 border-[#888888]/20 transition duration-300 group-hover:border-[#A48E12]/50 w-full h-auto"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-3 flex flex-col gap-2">
            <h3 className="text-[#e6e6e6] font-semibold text-lg transition-colors duration-300 group-hover:text-[#A48E12] group-hover:scale-98 flex items-center gap-2">
              {project.title}
              {/* <span className="inline-block ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight />
              </span> */}
            </h3>

            <p className="text-[#94a3b8] text-sm leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#A48E12]/10 text-[#A48E12] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Icon links */}
            <div className="flex flex-wrap gap-4 mt-4">
              {project.icons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
