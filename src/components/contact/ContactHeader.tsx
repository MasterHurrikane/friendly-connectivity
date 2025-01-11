import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ContactHeaderProps {
  name: string;
  nickname?: string;
  category: string;
  metDate?: string;
  onFavorite: (e: React.MouseEvent) => void;
}

export const ContactHeader = ({ name, nickname, category, metDate, onFavorite }: ContactHeaderProps) => {
  const calculateFriendshipDuration = (date: string) => {
    if (!date) return "";
    const start = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `Friends for ${diffDays} days`;
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          {nickname && (
            <p className="text-sm text-gray-500">"{nickname}"</p>
          )}
        </div>
        <button 
          className="text-gray-400 hover:text-secondary transition-colors"
          onClick={onFavorite}
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <Badge variant="secondary" className="mt-1">
        {category}
      </Badge>
      {metDate && (
        <p className="text-xs text-gray-500 mt-1">
          {calculateFriendshipDuration(metDate)}
        </p>
      )}
    </div>
  );
};