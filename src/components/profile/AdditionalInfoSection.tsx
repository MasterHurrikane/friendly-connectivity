import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileText } from "lucide-react";
import { ProfileSection } from "./ProfileSection";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const AdditionalInfoSection = () => {
  const [newInterest, setNewInterest] = useState("");
  const [newHobby, setNewHobby] = useState("");
  const [newFoodType, setNewFoodType] = useState("");
  const [newMusicGenre, setNewMusicGenre] = useState("");
  const [newColor, setNewColor] = useState("");

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const handleUpdate = async (field: string, value: any) => {
    if (!session?.user?.id) return;
    
    const { error } = await supabase
      .from("profiles")
      .update({ [field]: value })
      .eq("id", session.user.id);

    if (error) {
      console.error("Error updating profile:", error);
    }
  };

  const addInterest = async () => {
    if (!newInterest.trim() || !profile?.interests) return;
    const updatedInterests = [...(profile.interests || []), newInterest.trim()];
    await handleUpdate("interests", updatedInterests);
    setNewInterest("");
  };

  const removeInterest = async (interest: string) => {
    if (!profile?.interests) return;
    const updatedInterests = profile.interests.filter(i => i !== interest);
    await handleUpdate("interests", updatedInterests);
  };

  const addHobby = async () => {
    if (!newHobby.trim() || !profile?.hobbies) return;
    const updatedHobbies = [...(profile.hobbies || []), newHobby.trim()];
    await handleUpdate("hobbies", updatedHobbies);
    setNewHobby("");
  };

  const removeHobby = async (hobby: string) => {
    if (!profile?.hobbies) return;
    const updatedHobbies = profile.hobbies.filter(h => h !== hobby);
    await handleUpdate("hobbies", updatedHobbies);
  };

  const addFoodType = async () => {
    if (!newFoodType.trim()) return;
    const updatedFoodTypes = [...(profile?.favorite_food_types || []), newFoodType.trim()];
    await handleUpdate("favorite_food_types", updatedFoodTypes);
    setNewFoodType("");
  };

  const removeFoodType = async (foodType: string) => {
    if (!profile?.favorite_food_types) return;
    const updatedFoodTypes = profile.favorite_food_types.filter(f => f !== foodType);
    await handleUpdate("favorite_food_types", updatedFoodTypes);
  };

  const addMusicGenre = async () => {
    if (!newMusicGenre.trim()) return;
    const updatedMusicGenres = [...(profile?.favorite_music_genres || []), newMusicGenre.trim()];
    await handleUpdate("favorite_music_genres", updatedMusicGenres);
    setNewMusicGenre("");
  };

  const removeMusicGenre = async (genre: string) => {
    if (!profile?.favorite_music_genres) return;
    const updatedMusicGenres = profile.favorite_music_genres.filter(g => g !== genre);
    await handleUpdate("favorite_music_genres", updatedMusicGenres);
  };

  const addFavoriteColor = async () => {
    if (!newColor.trim()) return;
    const updatedColors = [...(profile?.favorite_colors || []), newColor.trim()];
    await handleUpdate("favorite_colors", updatedColors);
    setNewColor("");
  };

  const removeFavoriteColor = async (color: string) => {
    if (!profile?.favorite_colors) return;
    const updatedColors = profile.favorite_colors.filter(c => c !== color);
    await handleUpdate("favorite_colors", updatedColors);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileSection
      title="Additional Information"
      description="Other relevant details"
      icon={FileText}
    >
      <div className="space-y-8">
        {/* Interests Section */}
        <div className="space-y-3">
          <Label htmlFor="interests" className="text-left block">Interests</Label>
          <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
            {profile?.interests?.map((interest: string) => (
              <Badge 
                key={interest}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
                onClick={() => removeInterest(interest)}
              >
                {interest} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Input
              id="interests"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Enter an interest"
              className="bg-white flex-1"
            />
            <Button 
              onClick={addInterest}
              variant="secondary"
              className="w-[120px]"
            >
              Add Interest
            </Button>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="space-y-3">
          <Label htmlFor="hobbies" className="text-left block">Hobbies</Label>
          <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
            {profile?.hobbies?.map((hobby: string) => (
              <Badge 
                key={hobby}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
                onClick={() => removeHobby(hobby)}
              >
                {hobby} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Input
              id="hobbies"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              placeholder="Enter a hobby"
              className="bg-white flex-1"
            />
            <Button 
              onClick={addHobby}
              variant="secondary"
              className="w-[120px]"
            >
              Add Hobby
            </Button>
          </div>
        </div>

        {/* Food Types Section */}
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

        {/* Music Genres Section */}
        <div className="space-y-3">
          <Label htmlFor="musicGenres" className="text-left block">Favorite Music Genres</Label>
          <div className="flex flex-wrap gap-2 min-h-[2.5rem]">
            {profile?.favorite_music_genres?.map((genre: string) => (
              <Badge 
                key={genre}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20 px-3 py-1.5"
                onClick={() => removeMusicGenre(genre)}
              >
                {genre} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Input
              id="musicGenres"
              value={newMusicGenre}
              onChange={(e) => setNewMusicGenre(e.target.value)}
              placeholder="Enter a music genre"
              className="bg-white flex-1"
            />
            <Button 
              onClick={addMusicGenre}
              variant="secondary"
              className="w-[120px]"
            >
              Add Genre
            </Button>
          </div>
        </div>

        {/* Favorite Colors Section */}
        <div className="space-y-3">
          <Label htmlFor="favoriteColor" className="text-left block">Favorite Colors</Label>
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
      </div>
    </ProfileSection>
  );
};
