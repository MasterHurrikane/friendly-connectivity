import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { authRoutes } from "./routes/authRoutes";
import { activityRoutes } from "./routes/activityRoutes";
import { notificationRoutes } from "./routes/notificationRoutes";
import { contactRoutes } from "./routes/contactRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
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
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorBoundary />,
  },
  ...authRoutes,
  ...activityRoutes,
  ...notificationRoutes,
  ...contactRoutes,
]);