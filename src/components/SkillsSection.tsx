
import React, { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "languages" | "frameworks" | "tools" | "domain";
  color: string;
}

const skills: Skill[] = [
  // Languages
  { name: "Python", level: 95, category: "languages", color: "#3776AB" },
  { name: "JavaScript", level: 85, category: "languages", color: "#F7DF1E" },
  { name: "TypeScript", level: 85, category: "languages", color: "#3178C6" },
  { name: "Java", level: 60, category: "languages", color: "#ED8B00" },
  { name: "C", level: 80, category: "languages", color: "#00599C" },
  { name: "Go", level: 50, category: "languages", color: "#00599C" },
  { name: "HTML", level: 90, category: "languages", color: "#E34F26" },
  { name: "CSS", level: 80, category: "languages", color: "#1572B6" },
  { name: "SQL", level: 90, category: "languages", color: "#E34F26" },
  //Domain
  {name: "Machine Learning", level: 60, category: "domain", color: "#FF6F20"},
  {name: "Deep Learning", level: 40, category: "domain", color: "#FF6F20"},
  {name: "Data Engineering", level: 20, category: "domain", color: "#F7931E"}, 
  {name: "Generative AI", level: 70, category: "domain", color: "#F7931E"},
  // Frameworks
  { name: "React", level: 90, category: "frameworks", color: "#61DAFB" },
  { name: "Node.js", level: 90, category: "frameworks", color: "#339933" },
  { name: "Next.js", level: 60, category: "frameworks", color: "#000000" },
  { name: "Express", level: 85, category: "frameworks", color: "#000000" },
  { name: "FastAPI", level: 60, category: "frameworks", color: "#092E20" },
  {name: "TensorFlow", level: 70, category: "frameworks", color: "#FF6F20"},
  {name: "Scikit-learn", level: 70, category: "frameworks", color: "#F7931E"},
  
  // Tools
  { name: "Git", level: 87, category: "tools", color: "#F05032" },
  { name: "Docker", level: 40, category: "tools", color: "#2496ED" },
  { name: "VS Code", level: 95, category: "tools", color: "#007ACC" }
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"Domain"| "languages" | "frameworks" | "tools" | "all">("all");
  
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

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="bg-[#141820] py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple">&lt;</span> Technical Skills <span className="text-purple">/&gt;</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my technical abilities and proficiency in various programming languages, frameworks, and tools.
          </p>
        </div>
        
        <div className="flex justify-center mb-10">
          <div className="flex space-x-2 bg-navy/50 p-1 rounded-lg">
            {["domain","all", "languages", "frameworks", "tools"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category as any)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category 
                    ? "bg-purple text-white" 
                    : "text-white/70 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`transition-all duration-700 delay-${index * 100} ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white">{skill.name}</span>
                <span className="text-white/70 text-sm">{skill.level}%</span>
              </div>
              <Progress 
                value={isVisible ? skill.level : 0} 
                className="h-2 bg-white/10" 
                indicatorClassName="transition-all duration-1000 ease-out" 
              />
            </div>
          ))}
        </div>
        
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
          
          <div className="bg-navy/30 border border-purple/20 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between mb-2">
              <span className="text-xl text-white font-medium">Bachelor of Engineering in CSE</span>
              <span className="text-purple">2022 - 2026</span>
            </div>
            <span className="text-white/80 block mb-4">Gokaraju Lailavathi Engineering College</span>
            <p className="text-white/70">
              Currently majoring in Computer Science with a focus on software development and artificial intelligence. 
              Maintaining a GPA of 9/10.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Data Structures & Algorithms</span>
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Object Oriented Programming</span>
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Computer Networks</span>
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Operating Systems</span>
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Database Management System</span>
              <span className="bg-purple/10 text-purple text-sm px-3 py-1 rounded-full">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
