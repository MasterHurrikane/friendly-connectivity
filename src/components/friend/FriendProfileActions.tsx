import { Button } from "@/components/ui/button";
import { Activity, MessageCircle, UserX } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UseMutationResult } from "@tanstack/react-query";

interface FriendProfileActionsProps {
  id: string;
  removeFriendMutation: UseMutationResult<void, Error, void, unknown>;
}

export const FriendProfileActions = ({ id, removeFriendMutation }: FriendProfileActionsProps) => {
  const navigate = useNavigate();

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
          }
        }}
      >
        <UserX className="w-4 h-4 mr-2" />
        Remove
      </Button>
    </div>
  );
};