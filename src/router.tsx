import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Welcome from "./pages/auth/Welcome";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import Profile from "./pages/Profile";
import ContactProfile from "./pages/ContactProfile";
import AddContact from "./pages/AddContact";
import ActivityFeed from "./pages/activity/ActivityFeed";
import EngagementStats from "./pages/activity/EngagementStats";
import FriendActivity from "./pages/activity/FriendActivity";
import SharedMemories from "./pages/activity/SharedMemories";
import NotificationsInbox from "./pages/notifications/NotificationsInbox";
import EventReminders from "./pages/notifications/EventReminders";
import GroupNotifications from "./pages/notifications/GroupNotifications";
import PriorityNotifications from "./pages/notifications/PriorityNotifications";
import NotificationSettings from "./pages/notifications/NotificationSettings";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth/welcome",
    element: <Welcome />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/contact/:id",
    element: <ContactProfile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/add-contact",
    element: <AddContact />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity",
    element: <ActivityFeed />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/engagement",
    element: <EngagementStats />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/friends",
    element: <FriendActivity />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/memories",
    element: <SharedMemories />,
    errorElement: <ErrorBoundary />,
  },
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
]);