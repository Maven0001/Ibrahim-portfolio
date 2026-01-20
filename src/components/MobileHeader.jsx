import React from "react";

const MobileHeader = ({
  scrollContainerRef,
  activeSection,
  setActiveSection,
}) => {
  const handleScroll = (item) => {
    const element = document.getElementById(item);

    if (element) {
      // 1. Calculate offset for the sticky header (approx 80px)
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      // 2. Scroll the WINDOW on mobile, or the CONTAINER on desktop
      if (window.innerWidth < 1024) {
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const topPos = element.offsetTop - 96;
        container.scrollTo({ top: topPos, behavior: "smooth" });
      }

      setActiveSection(item);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-8 lg:hidden bg-[#0f172a]/90 backdrop-blur-md border-b border-white/10">
      <nav className="flex justify-between items-center">
        {["about", "experience", "projects"].map((item) => (
          <button // Changed to button for better accessibility
            key={item}
            onClick={() => handleScroll(item)}
            className={`text-[10px] font-bold uppercase tracking-widest transition-all duration-300
              ${activeSection === item ? "text-[#e6e6e6] scale-140" : "text-[#888888]"}`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default MobileHeader;
