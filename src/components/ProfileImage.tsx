import { useEffect, useState } from "react";
import ProfileImage from "/Profile.webp"; // Adjust the path as necessary

export default function ProfileImageComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Trigger animation when about section is 30% visible
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100">
      {/* Geometric Background Elements */}
      <div
        className={`absolute w-96 h-96 opacity-10 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-10" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Static geometric shapes */}
        <div className="absolute top-0 left-0 w-20 h-20 border border-foreground/20 rotate-45"></div>
        <div className="absolute top-20 right-0 w-16 h-16 bg-foreground/10 rotate-12"></div>
        <div className="absolute bottom-0 left-20 w-12 h-12 border-2 border-foreground/30"></div>
        <div className="absolute bottom-20 right-20 w-8 h-8 bg-foreground/20 rounded-full"></div>
      </div>

      {/* Main Profile Container */}
      <div
        className={`relative group transition-all duration-1000 delay-200 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        {/* Outer geometric frame with hover animation */}
        <div className="absolute inset-0 w-80 h-80 border border-foreground/30 rotate-45 transition-transform duration-700 group-hover:rotate-90 group-hover:scale-110"></div>
        <div className="absolute inset-4 w-72 h-72 border border-foreground/20 rotate-12 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-105"></div>

        {/* Profile Image Container */}
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-border transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-foreground/10 z-10"></div>

          <img
            src={ProfileImage}
            alt="Josiah - Front End Developer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Floating geometric accents */}
        <div
          className={`absolute -top-4 -right-4 w-6 h-6 bg-foreground rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute -bottom-2 -left-2 w-4 h-4 border-2 border-foreground rotate-45 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 -right-8 w-2 h-8 bg-foreground/60 transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        ></div>
        <div
          className={`absolute top-1/4 -left-6 w-8 h-2 bg-foreground/40 transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        ></div>
      </div>
    </div>
  );
}
