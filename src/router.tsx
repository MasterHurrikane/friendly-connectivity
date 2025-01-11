import { createBrowserRouter } from "react-router-dom";
import Contacts from "@/pages/Contacts";
import Profile from "@/pages/Profile";
import ContactProfile from "@/pages/ContactProfile";
import Dashboard from "@/pages/Dashboard";

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
]);