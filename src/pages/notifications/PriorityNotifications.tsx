import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { NotificationItem, NotificationType } from "@/components/notifications/NotificationItem";

interface PriorityNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

const PriorityNotifications = () => {
  const [notifications] = useState<PriorityNotification[]>([
    {
      id: "1",
      type: "priority",
      title: "Upcoming Birthday",
      message: "Your friend Sarah's birthday is tomorrow!",
      time: "12 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "priority",
      title: "Event Tomorrow",
      message: "Family Reunion - Don't forget to RSVP!",
      time: "1 day ago",
      read: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Priority Notifications"
          description="Important updates and time-sensitive alerts"
          icon={AlertTriangle}
        />

        <div className="max-w-2xl mx-auto mt-6">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              {...notification}
              priority={true}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PriorityNotifications;