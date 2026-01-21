import React from "react";
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./components/Experience";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import MobileHeader from "./components/MobileHeader";
import Project from "./components/Projects";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [activeSection, setActiveSection] = useState("about");

  const scrollContainerRef = useRef(null);

  // NAV LINK SCROLLS
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 1024;
    const observerOptions = {
      root: isMobile ? null : container,
      rootMargin: isMobile ? "-10% 0px -70px 0px" : "-20% 0px -70% 0px",
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

  // MOUSE CURSOR HIGHLIGHT

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // SKILL ARRAYS

  const words = ["Frontend Engineer", "UI/UX Designer"];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <MobileHeader
        scrollContainerRef={scrollContainerRef}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/* HERO */}
      <div
        onMouseMove={handleMouseMove}
        className="lg:h-screen overflow-hidden grid  grid-cols-1 lg:grid-cols-[1fr_1.3fr] px-5 lg:px-20 "
      >
        <div
          className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
          }}
        />
        {/* FIRST GRID */}
        <header
          className="relative z-40 flex flex-col mt-20 mb:12
         gap-4 lg:gap-6 lg:py-24"
        >
          <div className="flex flex-col gap-2 items-start ">
            <h1 className="text-4xl lg:text-[48px] tracking-tight lg:font-semibold text-[#e6e6e6] ">
              Ibrahim Ayinde
            </h1>
            <p
              className={`transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"} lg:text-[20px] lg:font-medium text-[#e6e6e6]  `}
            >
              {words[index]}
            </p>
          </div>
          <p className="text-sm lg:text-[16px] lg:font-normal leading-normal text-[#94a3b8]">
            I build seamless interactive digital experiences, one <br />
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

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 mt-8 lg:mt-24">
            <a
              href="https://github.com/Maven0001"
              target="_blank"
              rel="noreferrer"
              className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.instagram.com/vetofield?igsh=cmIyajgxNDdqZ29z"
              target="_blank"
              rel="noreferrer"
              className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-ayinde-531015245/"
              target="_blank"
              rel="noreferrer"
              className="text-[#888888] hover:text-[#e6e6e6] transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </header>

        {/* SECOND GRID */}

        <div
          ref={scrollContainerRef}
          className="relative z-40 overflow-y-auto no-scrollbar py-4 lg:py-24 scroll-smooth mt-20 "
        >
          {/* ABOUT SECTION */}
          <section id="about" className="flex flex-col gap-3 scroll-mt-24 ">
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              I’ve always been fascinated by how a few lines of code can
              transform a blank screen into a meaningful tool. What started as a
              curiosity for making things "look pretty" evolved into a career of
              engineering{" "}
              <span className="text-[#e6e6e6] font-medium">
                seamless digital experiences.
              </span>{" "}
              I discovered early on that the most successful products aren't
              just visually stunning; they are built on a foundation of
              performance, accessibility, and logical structure.
            </p>

            {/* The Philosophy: Design meets Engineering */}
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              My approach is simple:{" "}
              <span className="text-[#A48E12]">
                Empathy-driven design meets clean-code engineering.
              </span>{" "}
              I believe that a developer with a designer's eye is a powerful
              asset. I don't just bridge the gap between Figma and React,I erase
              it. I enjoy taking complex, abstract problems and turning them
              into simple, elegant interface solutions that feel natural to the
              user. Whether I'm wireframing a new user flow or refactoring a
              complex component library, my focus is always on the human on the
              other side of the screen.
            </p>

            {/* The Present: What you do day-to-day */}
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              Fast-forward to today, and I’ve had the opportunity to work on
              projects ranging from building intuitive User Interfaces to
              collaborating with developers to bring the design to life. My main
              focus these days is building{" "}
              <span className="text-[#e6e6e6] font-medium">
                highly interactive and accessible products
              </span>{" "}
              that don't compromise on speed or aesthetics. I thrive in
              environments where I can own the entire lifecycle of a feature,
              from the initial sketch to the final deployment.
            </p>

            {/* The Future: Continuous learning */}
            <p className="font-normal text-sm leading-relaxed lg:text-[16px] text-[#94a3b8]">
              When I’m not at my desk, I’m constantly sharpening my skills in{" "}
              <span className="text-[#e6e6e6] font-medium">
                Frontend Engineering
              </span>{" "}
              to bring more life and inclusivity to the web. I’m a firm believer
              in the "forever student" mindset, constantly exploring new ways to
              push the boundaries of what’s possible in the browser.
            </p>
          </section>

          {/* EXPERIENCE SECTION */}
          <section
            id="experience"
            className="scroll-mt-24 mt-35 flex flex-col  gap-8 mb-35 min-h-screen"
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
          <section id="projects" className="scroll-mt-24 mb-32 min-h-screen">
            <Project />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
