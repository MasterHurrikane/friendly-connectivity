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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileSection
      title="Additional Information"
      description="Other relevant details"
      icon={FileText}
    >
      <div className="space-y-6">
        <div>
          <Label htmlFor="interests" className="block mb-1.5 text-left">Interests</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile?.interests?.map((interest: string) => (
              <Badge 
                key={interest}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20"
                onClick={() => removeInterest(interest)}
              >
                {interest} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              id="interests"
              value={newInterest}
              onChange={(e) => setNewInterest(e.target.value)}
              placeholder="Enter an interest"
              className="bg-white"
            />
            <Button 
              onClick={addInterest}
              variant="secondary"
              className="whitespace-nowrap"
            >
              Add Interest
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="hobbies" className="block mb-1.5 text-left">Hobbies</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile?.hobbies?.map((hobby: string) => (
              <Badge 
                key={hobby}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20"
                onClick={() => removeHobby(hobby)}
              >
                {hobby} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              id="hobbies"
              value={newHobby}
              onChange={(e) => setNewHobby(e.target.value)}
              placeholder="Enter a hobby"
              className="bg-white"
            />
            <Button 
              onClick={addHobby}
              variant="secondary"
              className="whitespace-nowrap"
            >
              Add Hobby
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="foodTypes" className="block mb-1.5 text-left">Favorite Food Types</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile?.favorite_food_types?.map((foodType: string) => (
              <Badge 
                key={foodType}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20"
                onClick={() => removeFoodType(foodType)}
              >
                {foodType} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              id="foodTypes"
              value={newFoodType}
              onChange={(e) => setNewFoodType(e.target.value)}
              placeholder="Enter a food type"
              className="bg-white"
            />
            <Button 
              onClick={addFoodType}
              variant="secondary"
              className="whitespace-nowrap"
            >
              Add Food Type
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="musicGenres" className="block mb-1.5 text-left">Favorite Music Genres</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {profile?.favorite_music_genres?.map((genre: string) => (
              <Badge 
                key={genre}
                variant="secondary"
                className="cursor-pointer hover:bg-destructive/20"
                onClick={() => removeMusicGenre(genre)}
              >
                {genre} ×
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              id="musicGenres"
              value={newMusicGenre}
              onChange={(e) => setNewMusicGenre(e.target.value)}
              placeholder="Enter a music genre"
              className="bg-white"
            />
            <Button 
              onClick={addMusicGenre}
              variant="secondary"
              className="whitespace-nowrap"
            >
              Add Music Genre
            </Button>
          </div>
        </div>

        <div>
          <Label htmlFor="favoriteColor" className="block mb-1.5 text-left">Favorite Color</Label>
          <Input 
            id="favoriteColor" 
            type="text"
            placeholder="Your favorite color" 
            className="bg-white"
            defaultValue={profile?.favorite_color || ""}
            onChange={(e) => handleUpdate("favorite_color", e.target.value)}
          />
        </div>
      </div>
    </ProfileSection>
  );
};