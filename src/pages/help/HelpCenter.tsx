import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  MessageSquare, 
  AlertTriangle, 
  Info,
  MessageCircle,
} from "lucide-react";
import Navigation from "@/components/Navigation";

const HelpCenter = () => {
  const helpItems = [
    {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions about adding friends, creating events, and more",
      icon: HelpCircle,
      link: "/help/faq",
    },
    {
      title: "Contact Support",
      description: "Get in touch with our support team for personalized assistance",
      icon: MessageSquare,
      link: "/help/contact",
    },
    {
      title: "Live Chat Support",
      description: "Chat with our support team in real-time",
      icon: MessageCircle,
      link: "/help/chat",
    },
    {
      title: "Report a Problem",
      description: "Let us know about any issues you're experiencing",
      icon: AlertTriangle,
      link: "/help/report",
    },
    {
      title: "App Walkthrough",
      description: "Take a guided tour of the app's features",
      icon: Info,
      link: "/help/walkthrough",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-page">
      <Navigation />
      <div className="flex-1 p-6 md:ml-64">
        <h1 className="text-2xl font-bold mb-6">Help Center</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpItems.map((item) => (
            <Card key={item.title} className="p-6 flex flex-col h-full">
              <div className="flex flex-col items-center text-center flex-1">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
                <p className="text-muted-foreground mb-6">{item.description}</p>
              </div>
              <Button asChild className="w-full mt-auto">
                <Link to={item.link}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;