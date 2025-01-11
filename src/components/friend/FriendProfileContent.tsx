import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FriendBasicInfo } from "./FriendBasicInfo";
import { FriendDetails } from "./FriendDetails";
import { FriendProfileActions } from "./FriendProfileActions";
import { Friend } from "@/data/dummyFriends";
import { UseMutationResult } from "@tanstack/react-query";

interface FriendProfileContentProps {
  friend: Friend;
  friendshipDuration: string;
  removeFriendMutation: UseMutationResult<void, Error, void, unknown>;
  blockFriendMutation: UseMutationResult<void, Error, void, unknown>;
}

export const FriendProfileContent = ({
  friend,
  friendshipDuration,
  removeFriendMutation,
  blockFriendMutation,
}: FriendProfileContentProps) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-6">
          <FriendBasicInfo 
            friend={friend}
            friendshipDuration={friendshipDuration}
          />
          <FriendProfileActions
            id={friend.id}
            removeFriendMutation={removeFriendMutation}
          />
        </div>

        <Separator className="my-6" />

        <FriendDetails friend={friend} />

        <Separator className="my-6" />

        <div className="mt-6">
          <Button
            variant="destructive"
            onClick={() => {
              if (window.confirm("Are you sure you want to block this user? This action cannot be undone.")) {
                blockFriendMutation.mutate();
              }
            }}
          >
            Block User
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};