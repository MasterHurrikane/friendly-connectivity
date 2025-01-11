import { Users } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { NotificationItem } from "@/components/notifications/NotificationItem";

const GroupNotifications = () => {
  const notifications = [
    {
      id: "1",
      type: "group" as const,
      title: "Book Club Updates",
      message: "New book selection for next month",
      time: "2 hours ago",
      priority: false,
      read: false,
    },
    {
      id: "2",
      type: "group" as const,
      title: "Photography Group",
      message: "Weekend photowalk planned",
      time: "1 day ago",
      priority: false,
      read: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Group Notifications"
          description="Updates from your groups"
          icon={Users}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              {...notification}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GroupNotifications;