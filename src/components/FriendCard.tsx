import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FriendAvatar } from "./friend/FriendAvatar";
import { FriendHeader } from "./friend/FriendHeader";

interface FriendCardProps {
  friend: {
    id: string;
    name: string;
    nickname?: string;
    category: string;
    lastInteraction: string;
    email: string;
    phone: string;
    birthday: string;
    anniversary?: string;
    spouse?: string;
    children?: string;
    metDate?: string;
    city?: string;
    timezone?: string;
    avatar: string;
  };
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
        <FriendAvatar avatar={friend.avatar} name={friend.name} />
        <div className="flex-1">
          <FriendHeader
            name={friend.name}
            nickname={friend.nickname}
            category={friend.category}
            metDate={friend.metDate}
            onFavorite={handleFavorite}
          />
          <p className="text-sm text-gray-500 mt-4">
            Last interaction: {friend.lastInteraction}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FriendCard;