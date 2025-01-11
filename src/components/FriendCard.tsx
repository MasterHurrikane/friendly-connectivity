import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FriendAvatar } from "./friend/FriendAvatar";
import { Button } from "./ui/button";
import { Calendar, Mail, Star } from "lucide-react";
import { calculateFriendshipDuration } from "@/utils/friendUtils";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  category: string;
  lastInteraction?: string;
  metDate?: string;
  bio?: string;
}

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
      <div className="flex flex-col gap-4">
        <div className="flex items-start space-x-4">
          <div className="flex flex-col items-center gap-2">
            <FriendAvatar 
              avatar={friend.avatar} 
              name={friend.name} 
              className="w-16 h-16" 
            />
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-yellow-400"
              onClick={handleFavorite}
            >
              <Star className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{friend.name}</h3>
                <span className="text-sm text-gray-600">{friend.category}</span>
              </div>
            </div>
            
            {friend.bio && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{friend.bio}</p>
            )}
            
            <div className="mt-4 space-y-2">
              {friend.metDate && (
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Friends for {calculateFriendshipDuration(friend.metDate)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <p className="text-sm text-gray-500">
            Last interaction: {friend.lastInteraction || "No recent interaction"}
          </p>
          <Button
            variant="default"
            size="sm"
            className="bg-primary hover:bg-primary/90"
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