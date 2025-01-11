import { RouteObject } from "react-router-dom";
import Friends from "@/pages/Friends";
import FriendProfile from "@/pages/FriendProfile";
import AddFriend from "@/pages/friends/AddFriend";
import { SearchFriends } from "@/pages/friends/SearchFriends";
import DiscoverFriends from "@/pages/friends/DiscoverFriends";

export const friendRoutes: RouteObject[] = [
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/friends/:id",
    element: <FriendProfile />,
  },
  {
    path: "/add-friend",
    element: <AddFriend />,
  },
  {
    path: "/search",
    element: <SearchFriends />,
  },
  {
    path: "/discover",
    element: <DiscoverFriends />,
  },
];