
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      
      const scrollValue = window.scrollY;
      const circles = heroRef.current.querySelectorAll('.parallax-circle');
      const title = heroRef.current.querySelector('.hero-title');
      
      if (title) {
        (title as HTMLElement).style.transform = `translateY(${scrollValue * 0.3}px)`;
      }
      
      circles.forEach((circle, index) => {
        const speed = index * 0.1 + 0.1;
        (circle as HTMLElement).style.transform = `translateY(${scrollValue * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-navy"
    >
      {/* Animated Background Circles */}
      <div className="absolute w-96 h-96 rounded-full bg-purple/10 parallax-circle -left-20 -top-20"></div>
      <div className="absolute w-64 h-64 rounded-full bg-blue/10 parallax-circle right-40 top-40"></div>
      <div className="absolute w-80 h-80 rounded-full bg-purple/5 parallax-circle left-60 bottom-20"></div>
      <div className="absolute w-72 h-72 rounded-full bg-blue/5 parallax-circle -right-20 -bottom-20"></div>
      
      <div className="relative z-10 text-center px-4 hero-title">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span className="block">Hello, I'm</span>
          <span className="text-purple block mt-2 text-5xl md:text-7xl lg:text-8xl">Manju Bodi</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8">
          Computer Science Student | Web & AI Developer | Sustainability & Climate Enthusiast | Problem Solver
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="#projects"
            className="px-8 py-3 bg-purple text-white rounded-lg hover:bg-purple/90 transition-colors font-medium"
          >
            View My Work
          </a>
          <a 
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#projects" className="flex flex-col items-center text-white/70 hover:text-purple transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
