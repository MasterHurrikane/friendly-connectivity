import { Button } from "@/components/ui/button";
import { Activity, MessageCircle, UserX, UserCheck, UserMinus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UseMutationResult } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface FriendProfileActionsProps {
  id: string;
  status: string;
  removeFriendMutation: UseMutationResult<void, Error, void, unknown>;
  acceptFriendMutation?: UseMutationResult<void, Error, void, unknown>;
  rejectFriendMutation?: UseMutationResult<void, Error, void, unknown>;
}

export const FriendProfileActions = ({ 
  id, 
  status,
  removeFriendMutation,
  acceptFriendMutation,
  rejectFriendMutation
}: FriendProfileActionsProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  if (status === "pending") {
    return (
      <div className="flex gap-2">
        <Button
          variant="default"
          size="sm"
          onClick={() => {
            acceptFriendMutation?.mutate();
            toast({
              title: "Friend request accepted",
              description: "You are now friends!",
            });
          }}
        >
          <UserCheck className="w-4 h-4 mr-2" />
          Accept
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            rejectFriendMutation?.mutate();
            toast({
              title: "Friend request rejected",
              description: "The friend request has been rejected.",
            });
          }}
        >
          <UserMinus className="w-4 h-4 mr-2" />
          Reject
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate(`/friends/${id}/activity`)}
      >
        <Activity className="w-4 h-4 mr-2" />
        Activity
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigate(`/friends/${id}/message`)}
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Message
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => {
          if (window.confirm("Are you sure you want to remove this friend?")) {
            removeFriendMutation.mutate();
            toast({
              title: "Friend removed",
              description: "The friend has been removed from your list.",
            });
          }
        }}
      >
        <UserX className="w-4 h-4 mr-2" />
        Remove
      </Button>
    </div>
  );
};