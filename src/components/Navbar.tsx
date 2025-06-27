
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/90 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <div className="text-white font-mono font-bold text-xl">
          <span className="text-purple">{"<"}</span>
          CS.Portfolio
          <span className="text-purple">{" />"}</span>
        </div>
        
        <nav className="hidden md:flex space-x-10">
          {["Home", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/80 hover:text-purple transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <div>
  <a href="/Resume-ManjuBodi4.pdf" download>
    <Button className="bg-purple hover:bg-purple/90 text-white">
      Resume
    </Button>
  </a>
</div>

      </div>
    </header>
  );
};

export default Navbar;
