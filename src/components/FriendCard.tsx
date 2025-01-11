import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FriendAvatar } from "./friend/FriendAvatar";
import { FriendHeader } from "./friend/FriendHeader";
import { Button } from "./ui/button";
import { Calendar, Mail, Phone } from "lucide-react";
import { Friend } from "@/data/dummyFriends";

interface FriendCardProps {
  friend: Friend;
}

const FriendCard = ({ friend }: FriendCardProps) => {
  const navigate = useNavigate();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle favorite action
  };

  const handleCardClick = () => {
    navigate(`/friends/${friend.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-start space-x-4">
        <FriendAvatar avatar={friend.avatar} name={friend.name} className="w-16 h-16" />
        <div className="flex-1">
          <FriendHeader
            name={friend.name}
            nickname={friend.nickname}
            category={friend.category}
            metDate={friend.metDate}
            onFavorite={handleFavorite}
          />
          
          <div className="mt-4 space-y-2">
            {friend.birthday && (
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Birthday: {friend.birthday}</span>
              </div>
            )}
            {friend.email && (
              <div className="flex items-center text-sm text-gray-600">
                <Mail className="w-4 h-4 mr-2" />
                <span>{friend.email}</span>
              </div>
            )}
            {friend.phone && (
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="w-4 h-4 mr-2" />
                <span>{friend.phone}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Last interaction: {friend.lastInteraction || "No recent interaction"}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/friends/${friend.id}/activity`);
              }}
            >
              View Activity
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendCard;