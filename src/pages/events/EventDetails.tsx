import { Calendar, MapPin, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  
  // This would typically come from an API
  const eventDetails = {
    title: "Summer BBQ Party",
    date: "2024-07-15",
    time: "4:00 PM",
    location: "Central Park",
    description: "Join us for a fun summer BBQ with friends and family!",
    attendees: 12,
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title={eventDetails.title}
          description="Event Details"
          icon={Calendar}
        />
        
        <div className="grid gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>{eventDetails.date} at {eventDetails.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{eventDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span>{eventDetails.attendees} attending</span>
              </div>
              <p className="mt-4 text-muted-foreground">
                {eventDetails.description}
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <Link to={`/events/${id}/rsvp`}>RSVP</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={`/events/${id}/timeline`}>View Timeline</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={`/events/${id}/photos`}>View Photos</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;