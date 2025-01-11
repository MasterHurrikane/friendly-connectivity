import { Calendar, Clock } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

const EventTimeline = () => {
  const { id } = useParams();

  const timelineEvents = [
    {
      time: "4:00 PM",
      title: "Event Start",
      description: "Welcome and check-in",
    },
    {
      time: "4:30 PM",
      title: "Main Activity",
      description: "BBQ and socializing",
    },
    {
      time: "6:00 PM",
      title: "Entertainment",
      description: "Live music performance",
    },
    {
      time: "8:00 PM",
      title: "Event End",
      description: "Thank you for coming!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Event Timeline"
          description="Schedule of activities"
          icon={Calendar}
        />
        
        <div className="mt-6 space-y-4">
          {timelineEvents.map((event, index) => (
            <Card key={index}>
              <CardContent className="flex items-start gap-4 p-4">
                <div className="flex items-center gap-2 min-w-[100px]">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{event.time}</span>
                </div>
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventTimeline;