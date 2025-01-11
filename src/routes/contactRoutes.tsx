import Contacts from "@/pages/Contacts";
import ContactProfile from "@/pages/ContactProfile";
import AddContact from "@/pages/AddContact";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const contactRoutes = [
  {
    path: "/contacts",
    element: <Contacts />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/contact/:id",
    element: <ContactProfile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/add-contact",
    element: <AddContact />,
    errorElement: <ErrorBoundary />,
  },
];