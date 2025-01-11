import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

interface ContactAvatarProps {
  avatar: string;
  name: string;
  className?: string;
}

export const ContactAvatar = ({ avatar, name, className = "" }: ContactAvatarProps) => {
  const isAvatarUrl = avatar.includes('dicebear');
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="relative">
      <Avatar className={`w-16 h-16 ${className}`}>
        <AvatarImage
          src={avatar}
          alt={name}
          className="object-cover"
          onError={(e) => {
            console.log("Avatar failed to load:", e);
            e.currentTarget.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;
          }}
        />
        <AvatarFallback>
          {isAvatarUrl ? <User className="w-6 h-6" /> : initials}
        </AvatarFallback>
      </Avatar>
      <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-white" />
    </div>
  );
};