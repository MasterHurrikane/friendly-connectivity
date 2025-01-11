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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
  ...authRoutes,
  ...eventRoutes,
  ...friendRoutes,
  ...helpRoutes,
  ...notificationRoutes,
  ...activityRoutes,
]);