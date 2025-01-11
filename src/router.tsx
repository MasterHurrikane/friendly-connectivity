import { createBrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import Welcome from "@/pages/auth/Welcome";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import Dashboard from "@/pages/Dashboard";
import Profile from "@/pages/Profile";
import Contacts from "@/pages/Contacts";
import ContactProfile from "@/pages/ContactProfile";
import ActivityFeed from "@/pages/activity/ActivityFeed";
import EngagementStats from "@/pages/activity/EngagementStats";
import FriendActivity from "@/pages/activity/FriendActivity";
import SharedMemories from "@/pages/activity/SharedMemories";
import NotificationsInbox from "@/pages/notifications/NotificationsInbox";
import EventReminders from "@/pages/notifications/EventReminders";
import GroupNotifications from "@/pages/notifications/GroupNotifications";
import PriorityNotifications from "@/pages/notifications/PriorityNotifications";
import NotificationSettings from "@/pages/notifications/NotificationSettings";
import CreateEvent from "@/pages/events/CreateEvent";
import InviteFriends from "@/pages/events/InviteFriends";
import EventDetails from "@/pages/events/EventDetails";
import EventTimeline from "@/pages/events/EventTimeline";
import EventPhotos from "@/pages/events/EventPhotos";
import PastEvents from "@/pages/events/PastEvents";
import AddContact from "@/pages/AddContact";
import CalendarPage from "@/pages/Calendar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/contacts/:id",
    element: <ContactProfile />,
  },
  {
    path: "/activity",
    element: <ActivityFeed />,
  },
  {
    path: "/activity/engagement",
    element: <EngagementStats />,
  },
  {
    path: "/activity/friends",
    element: <FriendActivity />,
  },
  {
    path: "/activity/memories",
    element: <SharedMemories />,
  },
  {
    path: "/notifications",
    element: <NotificationsInbox />,
  },
  {
    path: "/notifications/events",
    element: <EventReminders />,
  },
  {
    path: "/notifications/groups",
    element: <GroupNotifications />,
  },
  {
    path: "/notifications/priority",
    element: <PriorityNotifications />,
  },
  {
    path: "/notifications/settings",
    element: <NotificationSettings />,
  },
  {
    path: "/events/new",
    element: <CreateEvent />,
  },
  {
    path: "/events/new/invite",
    element: <InviteFriends />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
  },
  {
    path: "/events/:id/timeline",
    element: <EventTimeline />,
  },
  {
    path: "/events/:id/photos",
    element: <EventPhotos />,
  },
  {
    path: "/events/past",
    element: <PastEvents />,
  },
  {
    path: "/add",
    element: <AddContact />,
  },
  {
    path: "/calendar",
    element: <CalendarPage />,
  },
]);