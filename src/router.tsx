import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "@/routes/authRoutes";
import { activityRoutes } from "@/routes/activityRoutes";
import { notificationRoutes } from "@/routes/notificationRoutes";
import { friendRoutes } from "@/routes/friendRoutes";
import { eventRoutes } from "@/routes/eventRoutes";
import Calendar from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
import Profile from "@/pages/Profile";
import AddFriend from "@/pages/AddFriend";
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
  ...authRoutes,
  ...activityRoutes,
  ...notificationRoutes,
  ...friendRoutes,
  ...eventRoutes,
]);

export default router;