import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FriendBasicInfo } from "./FriendBasicInfo";
import { FriendDetails } from "./FriendDetails";
import { FriendProfileActions } from "./FriendProfileActions";
import { Friend } from "@/data/dummyFriends";
import { UseMutationResult, useQuery } from "@tanstack/react-query";
import { getFriendInteractionStats } from "@/utils/friendUtils";

interface FriendProfileContentProps {
  friend: Friend;
  friendshipDuration: string;
  friendConnectionId: string;
  status: string;
  removeFriendMutation: UseMutationResult<void, Error, void, unknown>;
  blockFriendMutation: UseMutationResult<void, Error, void, unknown>;
  acceptFriendMutation?: UseMutationResult<void, Error, void, unknown>;
  rejectFriendMutation?: UseMutationResult<void, Error, void, unknown>;
}

export const FriendProfileContent = ({
  friend,
  friendshipDuration,
  friendConnectionId,
  status,
  removeFriendMutation,
  blockFriendMutation,
  acceptFriendMutation,
  rejectFriendMutation,
}: FriendProfileContentProps) => {
  const { data: stats } = useQuery({
    queryKey: ["friend-stats", friendConnectionId],
    queryFn: () => getFriendInteractionStats(friendConnectionId),
    enabled: status === "accepted",
  });

  return (
    <Card>
      <CardContent className="p-10">
        <div className="flex justify-between items-start mb-6">
          <FriendBasicInfo 
            friend={friend}
            friendshipDuration={friendshipDuration}
          />
          <FriendProfileActions
            id={friend.id}
            status={status}
            removeFriendMutation={removeFriendMutation}
            acceptFriendMutation={acceptFriendMutation}
            rejectFriendMutation={rejectFriendMutation}
          />
        </div>

        <Separator className="my-6" />

        <FriendDetails friend={friend} />

        {status === "accepted" && stats && (
          <>
            <Separator className="my-6" />
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Interaction Statistics</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Interactions</p>
                  <p className="text-2xl font-bold">{stats.totalInteractions}</p>
                </div>
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Last Interaction</p>
                  <p className="text-md">
                    {stats.lastInteraction 
                      ? new Date(stats.lastInteraction).toLocaleDateString()
                      : "No interactions yet"}
                  </p>
                </div>
              </div>
              
              {Object.entries(stats.byType).length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Interactions by Type</h4>
                  <div className="space-y-2">
                    {Object.entries(stats.byType).map(([type, count]) => (
                      <div key={type} className="flex justify-between items-center">
                        <span className="text-sm capitalize">{type}</span>
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

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