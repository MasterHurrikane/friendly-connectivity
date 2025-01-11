import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface FriendAvatarProps {
  avatar: string;
  name: string;
  className?: string;
}

export const FriendAvatar = ({ avatar, name, className = "" }: FriendAvatarProps) => {
  const isAvatarUrl = avatar.includes('dicebear');
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <Avatar className={className}>
      {isAvatarUrl ? (
        <AvatarImage src={avatar} alt={name} />
      ) : (
        <AvatarFallback>
          {initials || <User className="w-4 h-4" />}
        </AvatarFallback>
      )}
    </Avatar>
  );
};