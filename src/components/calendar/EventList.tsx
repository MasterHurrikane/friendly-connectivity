import { CalendarEvent } from "@/pages/Calendar"
import { Card } from "@/components/ui/card"
import { Calendar, Clock, MapPin, BellRing, Coffee, Cake } from "lucide-react"
import { format } from "date-fns"
import { Badge } from "@/components/ui/badge"

interface EventListProps {
  events: CalendarEvent[]
}

export const EventList = ({ events }: EventListProps) => {
  const getEventIcon = (type: string) => {
    switch (type) {
      case "birthday":
        return <Cake className="w-4 h-4 mr-1" />;
      case "event":
        return <Coffee className="w-4 h-4 mr-1" />;
      default:
        return <Calendar className="w-4 h-4 mr-1" />;
    }
  };

  // Sort events by time
  const sortedEvents = [...events].sort((a, b) => {
    const timeA = a.time.split(':').map(Number);
    const timeB = b.time.split(':').map(Number);
    return (timeA[0] * 60 + timeA[1]) - (timeB[0] * 60 + timeB[1]);
  });

  if (events.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-8">
        No events scheduled for this day
      </div>
    )
  }

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  return (
    <div className="space-y-4">
      {sortedEvents.map((event) => (
        <Card key={event.id} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center">
                {getEventIcon(event.type)}
                <h3 className="font-medium">{event.title}</h3>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {formatTime(event.time)}
              </div>
              {event.location && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {event.location}
                </div>
              )}
              {event.description && (
                <p className="text-sm text-muted-foreground mt-2">
                  {event.description}
                </p>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={
                  event.type === "birthday" 
                    ? "destructive" 
                    : event.type === "reminder" 
                      ? "secondary" 
                      : "default"
                }
                className="capitalize"
              >
                {event.type}
              </Badge>
              {event.notification && (
                <BellRing className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}