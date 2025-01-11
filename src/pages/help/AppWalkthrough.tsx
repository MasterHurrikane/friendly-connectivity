import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AppWalkthrough = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Friendly",
      content: "Learn how to make the most of your social connections with our app.",
    },
    {
      title: "Adding Friends",
      content: "Discover and connect with friends easily through our search and discover features.",
    },
    {
      title: "Creating Events",
      content: "Plan and organize events with your friends using our intuitive event creation tools.",
    },
    {
      title: "Managing Groups",
      content: "Create and manage friend groups to organize your connections better.",
    },
    {
      title: "Staying Connected",
      content: "Keep track of your friends' activities and maintain meaningful connections.",
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">App Walkthrough</h1>
      <Card className="max-w-2xl mx-auto p-6">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h2>
            <p className="text-muted-foreground">{steps[currentStep].content}</p>
          </div>
          <div className="flex justify-between items-center pt-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2" />
              Previous
            </Button>
            <span className="text-sm text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <Button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
            >
              Next
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AppWalkthrough;