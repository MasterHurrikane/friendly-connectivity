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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/auth/welcome",
    element: <Welcome />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
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
    path: "/contact/:id",
    element: <ContactProfile />,
  },
  {
    path: "/add-contact",
    element: <AddContact />,
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
]);