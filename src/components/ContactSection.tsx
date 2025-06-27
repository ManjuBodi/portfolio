
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail,Newspaper, Github, Linkedin, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData();
  formData.append("name", formState.name);
  formData.append("email", formState.email);
  formData.append("message", formState.message);

  try {
    const response = await fetch("https://formspree.io/f/movwyvlq", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    toast({
      title: "Message sent!",
      description: "Thanks! I'll be in touch soon.",
    });

    setFormState({ name: "", email: "", message: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: "Could not send message. Try again later.",
    });
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-gradient-to-b from-[#141820] to-navy py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-purple">&lt;</span> Let's Connect <span className="text-purple">/&gt;</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out to me.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-navy/50 border-white/10 text-white placeholder:text-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-navy/50 border-white/10 text-white placeholder:text-white/50"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-navy/50 border-white/10 text-white placeholder:text-white/50 min-h-[150px]"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-purple hover:bg-purple/90 text-white"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="bg-navy/50 border border-white/10 rounded-lg p-6">
              <div className="flex items-start space-x-4 mb-6">
                <Mail className="w-5 h-5 text-purple mt-1" />
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:manjubodi123@gmail.com" className="text-white/70 hover:text-purple transition-colors">
                    manjubodi123@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 mb-6">
                <User className="w-5 h-5 text-purple mt-1" />
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-white/70">
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>
              
              <div className="border-t border-white/10 my-6"></div>
              
              <h4 className="text-white font-medium mb-4">Follow Me</h4>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ManjuBodi" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy/70 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-purple hover:border-purple transition-colors border border-white/10"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/manju-bodi-12aba425b/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy/70 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-purple hover:border-purple transition-colors border border-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://medium.com/@mjb1.1work" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy/70 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-purple hover:border-purple transition-colors border border-white/10"
                >
                  <Newspaper className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-white font-medium mb-4">Currently Available For</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-purple/20 text-purple px-4 py-2 rounded-full text-sm">Internships</span>
                <span className="bg-purple/20 text-purple px-4 py-2 rounded-full text-sm">Freelance Projects</span>
                <span className="bg-purple/20 text-purple px-4 py-2 rounded-full text-sm">Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
