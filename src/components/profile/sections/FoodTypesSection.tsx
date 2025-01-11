import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface FoodTypesSectionProps {
  profile: Profile | null;
  onUpdate: (field: keyof Profile, value: any) => Promise<void>;
}

export const FoodTypesSection = ({ profile, onUpdate }: FoodTypesSectionProps) => {
  const [newFoodType, setNewFoodType] = useState("");

  const addFoodType = async () => {
    if (!newFoodType.trim()) return;
    const updatedFoodTypes = [...(profile?.favorite_food_types || []), newFoodType.trim()];
    await onUpdate("favorite_food_types", updatedFoodTypes);
    setNewFoodType("");
  };

  const removeFoodType = async (foodType: string) => {
    if (!profile?.favorite_food_types) return;
    const updatedFoodTypes = profile.favorite_food_types.filter(f => f !== foodType);
    await onUpdate("favorite_food_types", updatedFoodTypes);
  };

  return (
    <div className="space-y-3">
      <Label htmlFor="foodTypes" className="text-left block">Favorite Food Types</Label>
      <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
        {profile?.favorite_food_types?.map((foodType: string) => (
          <Badge 
            key={foodType}
            variant="secondary"
            className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
            onClick={() => removeFoodType(foodType)}
          >
            {foodType} ×
          </Badge>
        ))}
      </div>
      <div className="flex gap-3">
        <Input
          id="foodTypes"
          value={newFoodType}
          onChange={(e) => setNewFoodType(e.target.value)}
          placeholder="Enter a food type"
          className="bg-white flex-1"
        />
        <Button 
          onClick={addFoodType}
          variant="secondary"
          className="w-[120px]"
        >
          Add Food Type
        </Button>
      </div>
    </div>
  );
};