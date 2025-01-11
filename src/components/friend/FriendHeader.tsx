import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FriendHeaderProps {
  name: string;
  nickname?: string;
  category: string;
  metDate?: string;
  onFavorite: (e: React.MouseEvent) => void;
}

export const FriendHeader = ({ name, nickname, category, metDate, onFavorite }: FriendHeaderProps) => {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        {nickname && <p className="text-sm text-gray-500">"{nickname}"</p>}
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="secondary">{category}</Badge>
          {metDate && (
            <Badge variant="outline">
              Met on {new Date(metDate).toLocaleDateString()}
            </Badge>
          )}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:text-yellow-400 hidden md:flex"
        onClick={onFavorite}
      >
        <Star className="h-5 w-5" />
      </Button>
    </div>
  );
};