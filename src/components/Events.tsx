import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";
import RevealAnimation from "./ui/RevealAnimation";

type EventType = "Free" | "Paid";

interface EventInfo {
  EventName: string;
  EventDate: string;
  EventTime: string;
  EventLocation: string;
  EventDescription: string;
  type: EventType;
  ImageUrl: string;
}

const EventsInfo: EventInfo[] = [
  {
    EventName: "Tech Conference 2023",
    EventDate: "15 Oct 2023",
    EventTime: "9:00 AM",
    EventLocation: "Silicon Valley",
    EventDescription:
      "Join us for an exciting day of tech talks and networking.",
    type: "Free",
    ImageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    EventName: "Startup Pitch Night",
    EventDate: "20 Oct 2023",
    EventTime: "6:00 PM",
    EventLocation: "Downtown Hub",
    EventDescription: "Watch startups pitch their ideas to top investors.",
    type: "Paid",
    ImageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    EventName: "AI Workshop",
    EventDate: "25 Oct 2023",
    EventTime: "10:00 AM",
    EventLocation: "Tech Park",
    EventDescription: "Hands-on workshop on building AI models from scratch.",
    type: "Free",
    ImageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    EventName: "Design Sprint 2023",
    EventDate: "30 Oct 2023",
    EventTime: "8:00 AM",
    EventLocation: "Innovation Center",
    EventDescription:
      "Collaborate with designers to solve real-world problems.",
    type: "Paid",
    ImageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function Events({ className, ...props }: CardProps) {
  return (
    <div className="py-20 container bg-white dark:bg-gray-950 relative overflow-hidden flex flex-col items-center">
      <RevealAnimation>
        <h2 className="text-3xl md:text-5xl text-center font-bold w-fit block tracking-wide uppercase mb-3 text-main-primary">
          Our Upcoming Events
        </h2>
      </RevealAnimation>

      <RevealAnimation delay={0.1}>
        <h3 className="text-xl md:text-4xl font-display  text-gray-900 dark:text-white mb-4">
          supercharge your workflow
        </h3>
      </RevealAnimation>
      <div className="flex justify-evenly flex-wrap gap-8 mt-10">
        {EventsInfo.map((event, index) => (
          <Card
            className={cn("w-[380px] flex flex-col justify-between", className)}
            {...props}
            key={index}
          >
            <div key={index}>
              <CardHeader>
                <CardTitle className="text-main-primary">
                  {event.EventName}
                </CardTitle>
                <CardDescription>{event.EventDescription}</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className=" flex items-center space-x-4 rounded-md border p-4">
                  <BellRing />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {event.EventLocation}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {event.EventDate} - {event.EventTime}
                    </p>
                  </div>
                  <Button
                    className={`w-20 ${
                      event.type === "Paid" ? "bg-yellow-600" : ""
                    }`}
                  >
                    {event.type}
                  </Button>
                </div>
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={event.ImageUrl}
                    className="w-full h-auto object-cover"
                    alt=""
                  />
                </div>
              </CardContent>
            </div>
            <CardFooter>
              <Link
                to={"https://lu.ma/1vinith"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full ">
                  <Check /> Register
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
