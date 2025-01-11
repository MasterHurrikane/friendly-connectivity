import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "./routes/authRoutes";
import { eventRoutes } from "./routes/eventRoutes";
import { friendRoutes } from "./routes/friendRoutes";
import { helpRoutes } from "./routes/helpRoutes";
import { notificationRoutes } from "./routes/notificationRoutes";
import { activityRoutes } from "./routes/activityRoutes";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Calendar from "./pages/Calendar";
import { ErrorBoundary } from "./components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/messages",
    element: <Messages />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/settings",
    element: <Settings />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
    errorElement: <ErrorBoundary />,
  },
  ...authRoutes,
  ...eventRoutes,
  ...friendRoutes,
  ...helpRoutes,
  ...notificationRoutes,
  ...activityRoutes,
]);