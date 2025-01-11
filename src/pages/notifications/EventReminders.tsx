import { Calendar } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { NotificationItem } from "@/components/notifications/NotificationItem";

const EventReminders = () => {
  const events = [
    {
      id: "1",
      type: "event" as const,
      title: "Birthday Party",
      message: "Sarah's birthday party tomorrow at 3 PM",
      time: "1 day ago",
      priority: true,
      read: false,
    },
    {
      id: "2",
      type: "event" as const,
      title: "Team Meeting",
      message: "Weekly sync at 10 AM",
      time: "3 hours ago",
      priority: false,
      read: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Event Reminders"
          description="Stay updated with your upcoming events"
          icon={Calendar}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          {events.map((event) => (
            <NotificationItem
              key={event.id}
              {...event}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventReminders;