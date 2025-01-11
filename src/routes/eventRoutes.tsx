import { RouteObject } from "react-router-dom";
import CreateEvent from "@/pages/events/CreateEvent";
import EventDetails from "@/pages/events/EventDetails";
import EventRSVP from "@/pages/events/EventRSVP";
import EventTimeline from "@/pages/events/EventTimeline";
import EventPhotos from "@/pages/events/EventPhotos";
import InviteFriends from "@/pages/events/InviteFriends";
import PastEvents from "@/pages/events/PastEvents";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const eventRoutes: RouteObject[] = [
  {
    path: "events",
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "create",
        element: <CreateEvent />,
      },
      {
        path: ":id",
        element: <EventDetails />,
      },
      {
        path: ":id/rsvp",
        element: <EventRSVP />,
      },
      {
        path: ":id/timeline",
        element: <EventTimeline />,
      },
      {
        path: ":id/photos",
        element: <EventPhotos />,
      },
      {
        path: "new/invite",
        element: <InviteFriends />,
      },
      {
        path: "past",
        element: <PastEvents />,
      },
    ],
  },
];