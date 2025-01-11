import { Friend } from "@/data/dummyFriends";
import { Badge } from "@/components/ui/badge";
import { FriendAvatar } from "./FriendAvatar";

interface FriendBasicInfoProps {
  friend: Friend;
  friendshipDuration: string;
}

export const FriendBasicInfo = ({ friend, friendshipDuration }: FriendBasicInfoProps) => {
  return (
    <div className="flex items-start space-x-6">
      <FriendAvatar 
        avatar={friend.avatar} 
        name={friend.name} 
        className="w-24 h-24"
      />
      <div className="space-y-4 flex-1">
        <div>
          <h2 className="text-2xl font-semibold">{friend.name}</h2>
          {friend.nickname && (
            <p className="text-gray-500">"{friend.nickname}"</p>
          )}
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{friend.category}</Badge>
            {friend.metDate && (
              <Badge variant="outline">
                Friends for {friendshipDuration}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};