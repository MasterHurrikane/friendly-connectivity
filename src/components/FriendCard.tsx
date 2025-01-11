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
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8">
        <div className="flex items-start space-x-4">
          <FriendAvatar avatar={friend.avatar} name={friend.name} className="w-12 h-12 md:w-16 md:h-16" />
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
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center justify-between md:justify-center space-x-4 md:space-x-0 md:space-y-3 min-w-[200px] mt-4 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0">
          <p className="text-sm text-gray-500 text-center">
            Last interaction: {friend.lastInteraction || "No recent interaction"}
          </p>
          <Button
            variant="default"
            size="sm"
            className="bg-[#30adc4] hover:bg-[#2b9cb1]"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/friends/${friend.id}/activity`);
            }}
          >
            View Activity
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendCard;