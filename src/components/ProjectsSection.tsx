
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Carbon Compass",
    description: "AI-driven sustainability platform for businesses to track and reduce their carbon footprint. Awarded an Honorable Mention at IITH.",
    image: "/carboncompass.png",
    technologies: ["React", "TypeScript", "Firebase", "Gemini"],
    github: "https://github.com/ManjuBodi/carbon_compass",
    liveLink: "https://carboncompass.netlify.app/"
  },
  {
    id: 2,
    title: "Smart Civic Management & Safety System",
    description: `Two interconnected apps and enabled issue tracking and upvoting with  Groq-backed LLaMA chatbot for legal rights Q&A, and engineered officer safety workflows using inactivity-triggered SOS`,
    image: "https://bloombergcities.jhu.edu/sites/default/files/styles/optimized_no_size_change/public/2023-06/civic%20engagement%20lead.webp",
    technologies: ["React Native", "Groq (LLaMA)", "Node.js", "ML"],
    github: "https://github.com/ManjuBodi/civic_watch_official/"
  },
  {
    id: 3,
    title: "RSS Aggregator",
    description: "End-to-end Go-based backend system to automate periodic RSS feed updates.",
    image: "https://www.wprssaggregator.com/wp-content/uploads/2024/09/Featured-Image-8-Reasons-to-Use-An-RSS-Feed-Aggregator.png",
    technologies: [" Go", "PostgreSQL", "Git"],
    github: "https://github.com/ManjuBodi/RSSAgg"
  }
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="bg-gradient-to-b from-navy to-[#141820] py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple">&lt;</span> Projects <span className="text-purple">/&gt;</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`bg-navy/50 border border-white/10 overflow-hidden transition-all duration-700 delay-${index * 200} 
                       ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} className="bg-purple/20 text-purple hover:bg-purple/30">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple flex items-center gap-1 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                )}
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-purple flex items-center gap-1 transition-colors"
                  >
                    <LinkIcon className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <a 
            href="https://github.com/ManjuBodi" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-purple transition-colors"
          >
            <span>View More Projects on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
