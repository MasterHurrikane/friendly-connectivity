import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "@/routes/authRoutes";
import { activityRoutes } from "@/routes/activityRoutes";
import { notificationRoutes } from "@/routes/notificationRoutes";
import { friendRoutes } from "@/routes/friendRoutes";
import { eventRoutes } from "@/routes/eventRoutes";
import { helpRoutes } from "@/routes/helpRoutes";
import Calendar from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
import Profile from "@/pages/Profile";
import AddFriend from "@/pages/AddFriend";
import SearchFriends from "@/pages/friends/SearchFriends";
import DiscoverFriends from "@/pages/friends/DiscoverFriends";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "calendar",
    element: <Calendar />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "add",
    element: <AddFriend />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "search",
    element: <SearchFriends />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "discover",
    element: <DiscoverFriends />,
    errorElement: <ErrorBoundary />,
  },
  ...authRoutes,
  ...activityRoutes,
  ...notificationRoutes,
  ...friendRoutes,
  ...eventRoutes,
  ...helpRoutes,
]);

export default router;