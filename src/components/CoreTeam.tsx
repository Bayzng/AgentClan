
import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Hexagon, Sparkles } from "lucide-react";
import RevealAnimation from "@/components/ui/RevealAnimation";
import { MemberCard } from "./ui/MemberCard";
import { useTheme } from "@/contexts/ThemeContext";
import gsap from "gsap";

// Team member data
const teamMembers = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Founder & CEO",
    bio: "Former ML researcher with a passion for AI agents. Built 3 AI startups.",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&h=300&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/alexmorgan",
      github: "https://github.com/alexmorgan",
      linkedin: "https://linkedin.com/in/alexmorgan",
      email: "alex@agentclan.com"
    }
  },
  {
    id: 2,
    name: "Sarah Lee",
    role: "CTO",
    bio: "10 years at OpenAI. Specialized in multi-agent systems and reinforcement learning.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/sarahleecto",
      github: "https://github.com/sarahlee",
      linkedin: "https://linkedin.com/in/sarahleecto",
      email: "sarah@agentclan.com"
    }
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Product",
    bio: "Previously PM at Meta AI. Built products used by millions of developers.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&h=300&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/davidchenproduct",
      github: "https://github.com/davidchen",
      linkedin: "https://linkedin.com/in/davidchen",
      email: "david@agentclan.com"
    }
  },
  {
    id: 4,
    name: "Ella Johnson",
    role: "Head of Research",
    bio: "PhD in ML. Published 20+ papers on multi-agent systems and emergent behavior.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop",
    socials: {
      twitter: "https://twitter.com/ellajresearch",
      github: "https://github.com/ellaj",
      linkedin: "https://linkedin.com/in/ellajohnson",
      email: "ella@agentclan.com"
    }
  },

];

const CoreTeam = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    // Create floating particles
    const createFloatingElements = () => {
      const container = sectionRef.current;
      if (!container) return;
      
      // Clean up existing particles first
      const existingParticles = container.querySelectorAll('.floating-particle');
      existingParticles.forEach(el => el.remove());
      
      // Create new particles
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 4;
        const isSquare = Math.random() > 0.7;
        
        particle.className = `floating-particle absolute pointer-events-none ${isSquare ? 'rounded-sm' : 'rounded-full'} bg-brand-500/10 dark:bg-brand-400/10`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        container.appendChild(particle);
        
        gsap.to(particle, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          rotation: `random(-180, 180)`,
          opacity: Math.random() * 0.5 + 0.3,
          duration: Math.random() * 10 + 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 2
        });
      }
    };
    
    // Create glow orbs
    const createGlowOrbs = () => {
      const container = sectionRef.current;
      if (!container) return;
      
      // Clean up existing orbs first
      const existingOrbs = container.querySelectorAll('.glow-orb');
      existingOrbs.forEach(el => el.remove());
      
      // Create orbs
      for (let i = 0; i < 3; i++) {
        const orb = document.createElement('div');
        const size = Math.random() * 300 + 200;
        
        orb.className = 'glow-orb absolute rounded-full opacity-30 blur-3xl pointer-events-none';
        orb.style.width = `${size}px`;
        orb.style.height = `${size}px`;
        orb.style.left = `${Math.random() * 100}%`;
        orb.style.top = `${Math.random() * 100}%`;
        orb.style.background = `radial-gradient(circle, rgba(var(--brand-500-rgb), 0.2) 0%, rgba(var(--brand-500-rgb), 0) 70%)`;
        orb.style.transform = 'translate(-50%, -50%)';
        
        container.appendChild(orb);
        
        gsap.to(orb, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          scale: 'random(0.8, 1.3)',
          opacity: 'random(0.15, 0.35)',
          duration: Math.random() * 20 + 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 5
        });
      }
    };
    
    // Staggered team animation
    const animateTeam = () => {
      if (!gridRef.current) return;
      
      const cards = gridRef.current.children;
      
      gsap.fromTo(cards, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.9,
          rotateX: -5
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          rotateX: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none none"
          }
        }
      );
    };
    
    // Title animation
    const animateTitle = () => {
      if (!titleRef.current || !subtitleRef.current) return;
      
      const chars = new SplitText(titleRef.current, { type: "chars" });
      
      gsap.fromTo(chars.chars, 
        { 
          y: 100, 
          opacity: 0,
          rotateX: -90
        },
        { 
          y: 0, 
          opacity: 1,
          rotateX: 0,
          stagger: 0.03,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
      
      gsap.fromTo(subtitleRef.current, 
        { 
          y: 50, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    };
    
    // Execute animations based on browser capabilities
    const runAnimations = () => {
      createFloatingElements();
      createGlowOrbs();
      
      // Check if SplitText is available before using it
      if (typeof SplitText !== 'undefined') {
        animateTitle();
      } else {
        // Fallback if SplitText is not available
        if (titleRef.current) {
          gsap.fromTo(titleRef.current, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
          );
        }
        if (subtitleRef.current) {
          gsap.fromTo(subtitleRef.current, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power2.out" }
          );
        }
      }
      
      animateTeam();
    };
    
    // Run animations
    const initTimeout = setTimeout(runAnimations, 100);
    
    // Cleanup
    return () => {
      clearTimeout(initTimeout);
    };
  }, []);
  
  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 overflow-hidden relative"
    >
      {/* Creative background elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient
                  id="heroglow"
                  cx="50%"
                  cy="50%"
                  r="50%"
                  fx="50%"
                  fy="50%"
                >
                  <stop
                    offset="0%"
                    stopColor="hsl(var(--brand-500))"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="hsl(var(--brand-500))"
                    stopOpacity="0"
                  />
                </radialGradient>
              </defs>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#heroglow)"
              />
            </svg>
          </div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

        {/* Accent lines with animation */}
        <div className="absolute left-1/4 bottom-0 w-px h-1/2 bg-gradient-to-b from-transparent via-brand-500/20 to-transparent" />
        <div className="absolute right-1/4 top-0 w-px h-1/2 bg-gradient-to-b from-transparent via-brand-500/20 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center mb-4 relative">
            {/* Decorative elements behind the title */}
            <div className="absolute -inset-x-8 -inset-y-4">
              <div className="w-full h-full opacity-30 blur-xl absolute bg-gradient-to-r from-brand-300/0 via-brand-500/80 to-brand-300/0" />
              <div className="w-full h-full opacity-20 absolute top-0 left-0 bg-[radial-gradient(circle_at_50%_120%,var(--brand-600),transparent_70%)]" />
            </div>

            <Hexagon className="text-brand-500 w-6 h-6 mr-2 opacity-80" />
            <span className="uppercase tracking-widest text-sm font-medium text-brand-500">
              Our Talent
            </span>
            <Hexagon className="text-brand-500 w-6 h-6 ml-2 opacity-80" />
          </div>

          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold mb-4  dark:text-white/90 relative inline-block perspective-1000"
          >
            The Minds Behind{" "}
            <span className="relative items-center text-main-primary ">
              Agent Clan
              <Sparkles className="w-6 h-6 text-brand-400 absolute -right-7 top-0 animate-pulse" />
            </span>
          </h2>

          <p
            ref={subtitleRef}
            className="text-xl max-w-2xl mx-auto text-muted-foreground"
          >
            Passionate pioneers building the future of autonomous AI agents.
          </p>

          {/* Animated underline */}
          <div className="h-0.5 w-24 mx-auto mt-6 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-70" />
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative perspective-1000"
        >
          {/* 3D Staggered grid */}
          {teamMembers.map((member, idx) => (
            <div
              key={member.id}
              className="transform transition-all duration-500"
            >
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
