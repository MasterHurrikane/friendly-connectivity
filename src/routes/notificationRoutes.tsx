import NotificationsInbox from "@/pages/notifications/NotificationsInbox";
import EventReminders from "@/pages/notifications/EventReminders";
import GroupNotifications from "@/pages/notifications/GroupNotifications";
import PriorityNotifications from "@/pages/notifications/PriorityNotifications";
import NotificationSettings from "@/pages/notifications/NotificationSettings";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const notificationRoutes = [
  {
    path: "/notifications",
    element: <NotificationsInbox />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notifications/events",
    element: <EventReminders />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notifications/groups",
    element: <GroupNotifications />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notifications/priority",
    element: <PriorityNotifications />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/notifications/settings",
    element: <NotificationSettings />,
    errorElement: <ErrorBoundary />,
  },
];