import { createBrowserRouter } from "react-router-dom";
import Contacts from "@/pages/Contacts";
import Profile from "@/pages/Profile";
import ContactProfile from "@/pages/ContactProfile";
import Dashboard from "@/pages/Dashboard";
import ActivityFeed from "@/pages/activity/ActivityFeed";
import EngagementStats from "@/pages/activity/EngagementStats";
import SharedMemories from "@/pages/activity/SharedMemories";
import FriendActivity from "@/pages/activity/FriendActivity";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
    path: "/activity/stats",
    element: <EngagementStats />,
  },
  {
    path: "/activity/memories",
    element: <SharedMemories />,
  },
  {
    path: "/activity/:id",
    element: <FriendActivity />,
  },
]);