import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

interface InterestsSectionProps {
  profile: Profile | null;
  onUpdate: (field: keyof Profile, value: any) => Promise<void>;
}

export const InterestsSection = ({ profile, onUpdate }: InterestsSectionProps) => {
  const [newInterest, setNewInterest] = useState("");

  const addInterest = async () => {
    if (!newInterest.trim() || !profile?.interests) return;
    const updatedInterests = [...(profile.interests || []), newInterest.trim()];
    await onUpdate("interests", updatedInterests);
    setNewInterest("");
  };

  const removeInterest = async (interest: string) => {
    if (!profile?.interests) return;
    const updatedInterests = profile.interests.filter(i => i !== interest);
    await onUpdate("interests", updatedInterests);
  };

  return (
    <div className="space-y-2">
      <Label htmlFor="interests" className="text-left block text-lg font-bold">Interests</Label>
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
  );
};