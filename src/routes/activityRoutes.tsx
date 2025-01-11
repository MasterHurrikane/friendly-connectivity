import ActivityFeed from "@/pages/activity/ActivityFeed";
import EngagementStats from "@/pages/activity/EngagementStats";
import FriendActivity from "@/pages/activity/FriendActivity";
import SharedMemories from "@/pages/activity/SharedMemories";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const activityRoutes = [
  {
    path: "/activity",
    element: <ActivityFeed />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/engagement",
    element: <EngagementStats />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/friends",
    element: <FriendActivity />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/activity/memories",
    element: <SharedMemories />,
    errorElement: <ErrorBoundary />,
  },
];