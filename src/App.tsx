import { createBrowserRouter } from "react-router-dom";
import Contacts from "@/pages/Contacts";
import Profile from "@/pages/Profile";
import ContactProfile from "@/pages/ContactProfile";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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

export default router;
