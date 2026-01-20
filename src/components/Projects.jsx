import React from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Greenbin E-commerce",
      image: "https://placehold.co/600x400/1e293b/e6e6e6?text=Project+1", // Replace with your image
      description:
        "A high-performance waste management platform built with React and Node.js. Features include real-time tracking and automated scheduling.",
      stack: ["React", "Tailwind", "Node.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com",
    },
    // Add more projects here
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
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                <ArrowUpRight />
              </span>
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

            {/* Links */}
            <div className="flex gap-4 mt-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
              >
                <ExternalLink size={24} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
