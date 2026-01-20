import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { ArrowUpRight } from "lucide-react";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [activeSection, setActiveSection] = useState("about");

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      rootMargin: "-10% 0px -85% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <>
      <div
        onMouseMove={handleMouseMove}
        className="lg:h-screen overflow-hidden grid  grid-cols-1 lg:grid-cols-[1fr_1.3fr] px-7 lg:px-20 "
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
          }}
        />
        {/* FIRST GRID */}
        <header className="relative z-40 flex flex-col py-20 gap-4 lg:gap-6 lg:py-24">
          <div className="flex flex-col gap-2 items-start ">
            <h1 className="text-4xl lg:text-[48px] tracking-tight lg:font-semibold text-[#e6e6e6] ">
              Ibrahim Ayinde
            </h1>
            <p className="lg:text-[20px] lg:font-medium text-[#e6e6e6]">
              Frontend Engineer
            </p>
          </div>
          <p className="text-sm lg:text-[16px] lg:font-normal leading-normal text-[#94a3b8]">
            I build seamless interactive digital experiences one, <br />
            component at a time.
          </p>

          <nav className="hidden lg:flex flex-col gap-4 mt-16">
            {["about", "experience", "projects"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault(); // Stop the default jump
                  const element = document.getElementById(item);
                  if (element && scrollContainerRef.current) {
                    // Manually calculate position including the 96px (24) offset
                    const topPos = element.offsetTop - 96;
                    scrollContainerRef.current.scrollTo({
                      top: topPos,
                      behavior: "smooth",
                    });
                  }
                  setActiveSection(item);
                }}
                className={`group flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-all
                  ${activeSection === item ? "text-[#e6e6e6]" : "text-[#888888] hover:text-[#e6e6e6]"}`}
              >
                {/* The line grows and turns white when active */}
                <span
                  className={`h-px transition-all duration-300 bg-current 
                  ${activeSection === item ? "w-16 bg-[#e6e6e6]" : "w-8 group-hover:w-16"}`}
                ></span>
                {item}
              </a>
            ))}
          </nav>
        </header>

        {/* SECOND GRID */}

        <div
          ref={scrollContainerRef}
          className="relative z-40 overflow-y-auto no-scrollbar py-12 lg:py-24 scroll-smooth "
        >
          <section
            id="about"
            className="flex flex-col gap-3 scroll-mt-24 min-h-125"
          >
            <p className=" font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section
            id="experience"
            className="scroll-mt-24 mt-45 flex flex-col gap-8 mb-32"
          >
            <Experience />
            <a
              href=""
              className="text-[16px] text-[#94a3b8] hover:text-[#A48E12] hover:scale-99"
            >
              View Full Resume{" "}
              <span className="inline-block ml-2">
                <ArrowUpRight />
              </span>
            </a>
          </section>

          {/* PROJECTS SECTION */}
          <section id="projects" className="scroll-mt-24 mb-32">
            Projects
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
