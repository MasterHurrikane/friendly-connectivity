import { useState } from "react";
import { Bell } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { NotificationItem, NotificationType } from "@/components/notifications/NotificationItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  priority: boolean;
}

const NotificationsInbox = () => {
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      type: "friend_request",
      title: "New Friend Request",
      message: "Sarah Johnson sent you a friend request",
      time: "2 minutes ago",
      read: false,
      priority: true,
    },
    {
      id: "2",
      type: "event",
      title: "Event Reminder",
      message: "Book Club meeting tomorrow at 6 PM",
      time: "1 hour ago",
      read: false,
      priority: false,
    },
    {
      id: "3",
      type: "activity",
      title: "New Like",
      message: "John liked your recent photo",
      time: "2 hours ago",
      read: true,
      priority: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Notifications"
          description="Stay updated with your latest activities"
          icon={Bell}
        />

        <div className="max-w-2xl mx-auto mt-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="all" 
                className="transition-colors duration-200 hover:bg-primary/20 data-[state=active]:hover:bg-primary"
              >
                All
              </TabsTrigger>
              <TabsTrigger 
                value="unread"
                className="transition-colors duration-200 hover:bg-primary/20 data-[state=active]:hover:bg-primary"
              >
                Unread
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                />
              ))}
            </TabsContent>
            <TabsContent value="unread" className="mt-4">
              {notifications
                .filter((notification) => !notification.read)
                .map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    {...notification}
                  />
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default NotificationsInbox;