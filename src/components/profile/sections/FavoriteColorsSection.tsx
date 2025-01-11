import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface FavoriteColorsSectionProps {
  profile: Profile | null;
  onUpdate: (field: keyof Profile, value: any) => Promise<void>;
}

export const FavoriteColorsSection = ({ profile, onUpdate }: FavoriteColorsSectionProps) => {
  const [newColor, setNewColor] = useState("");

  const addFavoriteColor = async () => {
    if (!newColor.trim()) return;
    const updatedColors = [...(profile?.favorite_colors || []), newColor.trim()];
    await onUpdate("favorite_colors", updatedColors);
    setNewColor("");
  };

  const removeFavoriteColor = async (color: string) => {
    if (!profile?.favorite_colors) return;
    const updatedColors = profile.favorite_colors.filter(c => c !== color);
    await onUpdate("favorite_colors", updatedColors);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="favoriteColor" className="text-left block text-lg font-bold">Favorite Colors</Label>
      <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
        {profile?.favorite_colors?.map((color: string) => (
          <Badge 
            key={color}
            variant="secondary"
            className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
            onClick={() => removeFavoriteColor(color)}
          >
            {color} ×
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Input 
          id="favoriteColor"
          value={newColor}
          onChange={(e) => setNewColor(e.target.value)}
          placeholder="Enter a color"
          className="bg-white flex-1"
        />
        <Button 
          onClick={addFavoriteColor}
          variant="secondary"
          className="w-[120px]"
        >
          Add Color
        </Button>
      </div>
    </div>
  );
};