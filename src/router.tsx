import { createBrowserRouter } from "react-router-dom";
import { authRoutes } from "@/routes/authRoutes";
import { activityRoutes } from "@/routes/activityRoutes";
import { notificationRoutes } from "@/routes/notificationRoutes";
import { contactRoutes } from "@/routes/contactRoutes";
import { eventRoutes } from "@/routes/eventRoutes";
import Calendar from "@/pages/Calendar";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";
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
  ...authRoutes,
  ...activityRoutes,
  ...notificationRoutes,
  ...contactRoutes,
  ...eventRoutes,
]);

export default router;