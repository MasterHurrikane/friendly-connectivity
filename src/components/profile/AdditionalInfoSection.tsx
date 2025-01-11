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