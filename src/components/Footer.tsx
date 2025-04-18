
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/contexts/ThemeContext";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import RevealAnimation from "./ui/RevealAnimation";

const Footer = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn(
      "pt-20 pb-8 relative overflow-hidden",
      theme === "dark" ? "bg-black" : "bg-gray-50"
    )}>
      {/* Decorative elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 mb-16">
          {/* Company info and newsletter */}
          <div className="lg:col-span-5">
            <RevealAnimation direction="up" delay={0.1}>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className={cn(
                  "ml-3 text-2xl font-display font-bold",
                  theme === "dark" 
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400" 
                    : "bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
                )}>
                  AgentClan
                </span>
              </div>
              
              <p className={cn(
                "mb-8 max-w-md text-base leading-relaxed",
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              )}>
                Bringing you the future of AI with intelligent, autonomous agents that revolutionize the way businesses operate, automate workflows, and accelerate growth.
              </p>
              
              {/* Contact information */}
              <div className="space-y-4 mb-8">
                <ContactItem icon={<Mail className="w-5 h-5" />} text="hello@agentclan.com" />
                <ContactItem icon={<Phone className="w-5 h-5" />} text="+1 (555) 123-4567" />
                <ContactItem icon={<MapPin className="w-5 h-5" />} text="123 Innovation St, San Francisco, CA" />
              </div>
            </RevealAnimation>
            
            {/* Newsletter signup */}
            <RevealAnimation direction="up" delay={0.2}>
              <div className={cn(
                "p-6 rounded-2xl",
                theme === "dark" 
                  ? "dark-glass" 
                  : "glass-card"
              )}>
                <h4 className={cn(
                  "text-lg font-semibold mb-4",
                  theme === "dark" ? "text-white" : "text-gray-900"
                )}>
                  Join our newsletter
                </h4>
                <p className={cn(
                  "text-sm mb-4",
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                )}>
                  Get the latest updates on AI advancements and exclusive offers.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className={cn(
                      "flex-grow rounded-xl",
                      theme === "dark" 
                        ? "bg-gray-800/70 border-gray-700" 
                        : "bg-white border-gray-200"
                    )}
                  />
                  <Button className="rounded-xl bg-brand-500 hover:bg-brand-600 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20">
                    Subscribe
                  </Button>
                </div>
              </div>
            </RevealAnimation>
          </div>
          
          {/* Navigation links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <RevealAnimation direction="up" delay={0.3}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Product
                  </h4>
                  <ul className="space-y-4">
                    <FooterLink href="#features">AI Features</FooterLink>
                    <FooterLink href="#roadmap">Product Roadmap</FooterLink>
                    <FooterLink href="#">Integrations</FooterLink>
                    <FooterLink href="#">Changelog</FooterLink>
                    <FooterLink href="#">Documentation</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>
              
              <RevealAnimation direction="up" delay={0.4}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Resources
                  </h4>
                  <ul className="space-y-4">
                    <FooterLink href="#">Getting Started</FooterLink>
                    <FooterLink href="#">API Reference</FooterLink>
                    <FooterLink href="#">Tutorials</FooterLink>
                    <FooterLink href="#">Community Forum</FooterLink>
                    <FooterLink href="#">Case Studies</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>
              
              <RevealAnimation direction="up" delay={0.5}>
                <div>
                  <h4 className={cn(
                    "text-base font-semibold mb-6",
                    theme === "dark" ? "text-white" : "text-gray-900"
                  )}>
                    Company
                  </h4>
                  <ul className="space-y-4">
                    <FooterLink href="#">About Us</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                    <FooterLink href="#">Press Kit</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
        
        {/* Social links and copyright */}
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-center pt-8 border-t",
          theme === "dark" ? "border-gray-800" : "border-gray-200"
        )}>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.7759 4.95376C12.2634 5.71308 12 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
            
            <SocialIcon>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.12838C15.4785 9.73529 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SocialIcon>
          </div>
          
          <p className={cn(
            "text-sm",
            theme === "dark" ? "text-gray-500" : "text-gray-500"
          )}>
            © {currentYear} Agent Clan. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Privacy
            </a>
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Terms
            </a>
            <a href="#" className={cn(
              "text-sm hover:underline",
              theme === "dark" ? "text-gray-500 hover:text-gray-400" : "text-gray-500 hover:text-gray-700"
            )}>
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
}

const ContactItem = ({ icon, text }: ContactItemProps) => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center">
      <div className={cn(
        "h-8 w-8 mr-3 rounded-lg flex items-center justify-center",
        theme === "dark" 
          ? "bg-gray-800 text-brand-400" 
          : "bg-brand-50 text-brand-600"
      )}>
        {icon}
      </div>
      <span className={cn(
        "text-sm",
        theme === "dark" ? "text-gray-300" : "text-gray-700"
      )}>
        {text}
      </span>
    </div>
  );
};

interface SocialIconProps {
  children: React.ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  const { theme } = useTheme();
  
  return (
    <a 
      href="#" 
      className={cn(
        "h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300",
        theme === "dark" 
          ? "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700" 
          : "bg-gray-100 text-gray-600 hover:text-brand-500 hover:bg-brand-50"
      )}
    >
      {children}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  const { theme } = useTheme();
  
  return (
    <li>
      <a 
        href={href} 
        className={cn(
          "group flex items-center transition-all duration-300",
          theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-brand-500"
        )}
      >
        <ChevronRight className="h-3 w-0 opacity-0 mr-0 transition-all duration-300 group-hover:opacity-100 group-hover:w-3 group-hover:mr-1" />
        {children}
      </a>
    </li>
  );
};

export default Footer;
