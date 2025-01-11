import Friends from "@/pages/Friends";
import FriendProfile from "@/pages/FriendProfile";
import AddFriend from "@/pages/friends/AddFriend";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const friendRoutes = [
  {
    path: "/friends",
    element: <Friends />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/friends/:id",
    element: <FriendProfile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/add-friend",
    element: <AddFriend />,
    errorElement: <ErrorBoundary />,
  },
];