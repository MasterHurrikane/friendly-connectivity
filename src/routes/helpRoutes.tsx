import HelpCenter from "@/pages/help/HelpCenter";
import ContactSupport from "@/pages/help/ContactSupport";
import LiveChat from "@/pages/help/LiveChat";
import ReportProblem from "@/pages/help/ReportProblem";
import AppWalkthrough from "@/pages/help/AppWalkthrough";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const helpRoutes = [
  {
    path: "help",
    element: <HelpCenter />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "help/contact",
    element: <ContactSupport />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "help/chat",
    element: <LiveChat />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "help/report",
    element: <ReportProblem />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "help/walkthrough",
    element: <AppWalkthrough />,
    errorElement: <ErrorBoundary />,
  },
];