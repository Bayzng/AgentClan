
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import RevealAnimation from "./ui/RevealAnimation";
import { useTheme } from "@/contexts/ThemeContext";

const Faq = () => {
  const { theme } = useTheme();
  
  const faqs = [
    {
      question: "What is Agent Clan?",
      answer: "Agent Clan is a platform that provides AI-powered agents to automate tasks, gain insights, and scale your business operations with unprecedented efficiency. Our agents can help with customer service, data analysis, content creation, and more."
    },
    {
      question: "How does the pricing work?",
      answer: "We offer tiered pricing plans to accommodate businesses of all sizes. You can start with our free trial to explore the platform's capabilities. Our pricing is based on the number of agents you need, storage capacity, and additional features. Check our pricing section for detailed information."
    },
    {
      question: "Can I customize agents for my specific business needs?",
      answer: "Yes! Our Professional and Enterprise plans allow for agent customization. You can train agents on your specific data and workflows to make them more effective for your unique business requirements. Additionally, our upcoming Custom Agent Builder will make this process even easier."
    },
    {
      question: "What integrations are supported?",
      answer: "Agent Clan integrates with popular business tools including Slack, Microsoft Teams, Google Workspace, Salesforce, Zapier, HubSpot, Asana, Trello, and many more. We're constantly adding new integrations to our ecosystem."
    },
    {
      question: "How secure is my data on Agent Clan?",
      answer: "Security is our top priority. We use enterprise-grade encryption for all data, both in transit and at rest. Our platform is GDPR compliant and follows industry best practices for data security. We never use your data to train our models without explicit permission."
    },
    {
      question: "What support options are available?",
      answer: "All plans include email support. Our Professional plan adds priority email support with faster response times, while our Enterprise plan includes 24/7 phone and email support. We also provide extensive documentation, tutorials, and a knowledge base for self-service support."
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-50 to-transparent dark:from-gray-950/50 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <RevealAnimation>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-gray-900 dark:text-white">
              Frequently Asked <span className="text-brand-600 dark:text-brand-400">Questions</span>
            </h2>
          </RevealAnimation>
          
          <RevealAnimation delay={0.1}>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about Agent Clan and how it can transform your business
            </p>
          </RevealAnimation>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <RevealAnimation key={index} delay={0.1 * index}>
                <AccordionItem value={`faq-${index}`} className={`
                  ${theme === 'light' 
                    ? 'bg-white/80 shadow-md border border-gray-200/50'
                    : 'bg-gray-900/60 shadow-md shadow-black/5 border border-gray-700/30'
                  } rounded-xl overflow-hidden
                `}>
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline text-gray-900 dark:text-white font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </RevealAnimation>
            ))}
          </Accordion>
          
          <RevealAnimation delay={0.6}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">Still have questions?</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-900/30 dark:text-brand-300 dark:border-brand-800/50">
                <span className="mr-2">💬</span>
                <span>Contact our support team for more information</span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
