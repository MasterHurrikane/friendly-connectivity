import { Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const PastEvents = () => {
  const pastEvents = [
    {
      id: "1",
      title: "Summer Beach Party",
      date: "2023-08-15",
      location: "Sunny Beach",
      attendees: 45,
    },
    {
      id: "2",
      title: "New Year Celebration",
      date: "2023-12-31",
      location: "City Center",
      attendees: 120,
    },
    {
      id: "3",
      title: "Tech Meetup",
      date: "2024-01-20",
      location: "Innovation Hub",
      attendees: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Past Events"
          description="Browse through previous events"
          icon={Calendar}
        />
        
        <div className="grid gap-6 mt-6">
          {pastEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle>
                  <Link 
                    to={`/events/${event.id}`}
                    className="hover:underline"
                  >
                    {event.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                  <p>{event.attendees} people attended</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PastEvents;