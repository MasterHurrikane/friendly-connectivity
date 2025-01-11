import Friends from "@/pages/Friends";
import FriendProfile from "@/pages/FriendProfile";
import AddFriend from "@/pages/friends/AddFriend";
import ManageGroups from "@/pages/friends/ManageGroups";
import GroupDetails from "@/pages/friends/GroupDetails";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import AddFriendManual from "@/pages/AddFriend";

export const friendRoutes = [
  {
    path: "friends",
    element: <Friends />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "friends/:id",
    element: <FriendProfile />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "add-friend",
    element: <AddFriend />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "add",
    element: <AddFriendManual />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "friends/groups",
    element: <ManageGroups />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "friends/groups/:id",
    element: <GroupDetails />,
    errorElement: <ErrorBoundary />,
  },
];