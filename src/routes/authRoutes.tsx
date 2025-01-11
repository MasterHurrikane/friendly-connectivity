import Welcome from "@/pages/auth/Welcome";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const authRoutes = [
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
];