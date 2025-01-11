import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface HobbiesSectionProps {
  profile: Profile | null;
  onUpdate: (field: keyof Profile, value: any) => Promise<void>;
}

export const HobbiesSection = ({ profile, onUpdate }: HobbiesSectionProps) => {
  const [newHobby, setNewHobby] = useState("");

  const addHobby = async () => {
    if (!newHobby.trim() || !profile?.hobbies) return;
    const updatedHobbies = [...(profile.hobbies || []), newHobby.trim()];
    await onUpdate("hobbies", updatedHobbies);
    setNewHobby("");
  };

  const removeHobby = async (hobby: string) => {
    if (!profile?.hobbies) return;
    const updatedHobbies = profile.hobbies.filter(h => h !== hobby);
    await onUpdate("hobbies", updatedHobbies);
  };

  return (
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
  );
};