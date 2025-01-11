import { useState } from "react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Calendar as CalendarIcon } from "lucide-react";
import { CreateEventDialog } from "@/components/calendar/CreateEventDialog";
import { EventList } from "@/components/calendar/EventList";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";

export interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  time: string;
  type: "event" | "reminder" | "birthday";
  description?: string;
  location?: string;
  notification?: boolean;
}

const Calendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "Team Meeting",
      date: new Date(),
      time: "10:00",
      type: "event",
      description: "Weekly sync with the team",
      location: "Conference Room A",
      notification: true,
    },
  ]);

  const handleAddEvent = (newEvent: Omit<CalendarEvent, "id">) => {
    const event = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9),
    };
    setEvents([...events, event]);
  };

  const selectedDateEvents = events.filter(
    (event) =>
      date &&
      event.date.getFullYear() === date.getFullYear() &&
      event.date.getMonth() === date.getMonth() &&
      event.date.getDate() === date.getDate()
  );

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Calendar"
          description="Manage your events and reminders"
          icon={CalendarIcon}
        />

        <div className="grid gap-6 md:grid-cols-[300px_1fr] mt-6">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <CreateEventDialog onAddEvent={handleAddEvent} />
          </div>

          <div>
            <Card>
              <CardContent className="p-4">
                <EventList events={selectedDateEvents} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Calendar;