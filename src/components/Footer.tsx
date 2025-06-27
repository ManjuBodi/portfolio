
import React from "react";
import { ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="bg-navy py-8">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 mb-4 md:mb-0">
              <p>© {new Date().getFullYear()}  Manju Bodi. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm">Made with</span>
              <span className="text-purple">♥</span>
              <span className="text-white/70 text-sm">using React & TypeScript</span>
            </div>
            
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="mt-4 md:mt-0 bg-navy/70 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-purple hover:border-purple transition-colors border border-white/10"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
