import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RevealAnimation from "./ui/RevealAnimation";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "AI Product Manager",
    company: "TechGiant Inc.",
    avatar: "/testimonials/avatar1.jpg",
    content:
      "Agent Clan has completely transformed how we approach AI automation. Their platform is intuitive yet powerful, allowing us to deploy complex agent workflows with minimal coding. The ROI has been incredible.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "FutureTech Solutions",
    avatar: "/testimonials/avatar2.jpg",
    content:
      "We evaluated several agent platforms before choosing Agent Clan. The difference was clear - their focus on reliability and performance is unmatched. Our agents have maintained 99.9% uptime since deployment.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Head of Operations",
    company: "Streamline Enterprises",
    avatar: "/testimonials/avatar3.jpg",
    content:
      "The customer support at Agent Clan deserves special mention. Whenever we've had questions, their team has been responsive and incredibly helpful. It's rare to find this level of service in the AI space.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Lead Developer",
    company: "InnovateAI",
    avatar: "/testimonials/avatar4.jpg",
    content:
      "As developers, we appreciate the clean API and extensive documentation. Agent Clan strikes the perfect balance between abstraction and control, letting us customize exactly what we need.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emma Thompson",
    role: "Digital Transformation Director",
    company: "Global Retail Group",
    avatar: "/testimonials/avatar5.jpg",
    content:
      "Agent Clan has helped us automate customer service processes that we thought would require human intervention forever. Our CSAT scores have actually improved since implementing their solution.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSlideChange = useCallback(() => {
    if (emblaApi) {
      const selectedIndex = emblaApi.selectedScrollSnap();
      setActiveIndex(selectedIndex);
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
    }
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
    }

    autoScrollIntervalRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 5000);
  }, [emblaApi]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", handleSlideChange);
    handleSlideChange();

    return () => {
      emblaApi.off("select", handleSlideChange);
    };
  }, [emblaApi, handleSlideChange]);

  useEffect(() => {
    if (isAutoScrolling) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return () => {
      stopAutoScroll();
    };
  }, [isAutoScrolling, startAutoScroll, stopAutoScroll]);

  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="container ">
        <RevealAnimation>
          <div className="text-center mb-16 flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 w-fit text-main-primary">
              What Our Clients Say
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              Discover how Agent Clan is transforming businesses with
              intelligent AI agents.
            </p>
          </div>
        </RevealAnimation>
        <div className="absolute  -translate-x-1/2 right-0 w-64 h-64 rounded-full bg-green-600/10 blur-3xl"></div>
        <div className="absolute  translate-x-1/2 translate-y-1/2 w-64 h-64 rounded-full bg-green-600/10 blur-3xl"></div>
        <div className="relative  gradientOne bg-transparent">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div
                    className={`h-full p-6 rounded-xl border border-brand-100/20 dark:border-brand-800/20 ${
                      theme === "dark"
                        ? "bg-gray-900/50 backdrop-blur-sm"
                        : "bg-white/80 backdrop-blur-sm shadow-lg"
                    } transition-all duration-300 hover:border-brand-500/30`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-12 w-12 border-2 border-brand-200 dark:border-brand-800">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback className="bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      <div className="flex mt-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={`${
                              i < testimonial.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="rounded-full"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "bg-brand-500 w-6"
                      : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                  onMouseEnter={() => setIsAutoScrolling(false)}
                  onMouseLeave={() => setIsAutoScrolling(true)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="rounded-full"
              onMouseEnter={() => setIsAutoScrolling(false)}
              onMouseLeave={() => setIsAutoScrolling(true)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
