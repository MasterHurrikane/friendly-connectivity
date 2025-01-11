import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FileText } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const AdditionalInfoSection = () => {
  return (
    <ProfileSection
      title="Additional Information"
      description="Other relevant details"
      icon={FileText}
    >
      <div className="space-y-4">
        <div className="space-y-2 text-left">
          <Label htmlFor="bio" className="text-sm font-normal">Bio</Label>
          <textarea
            id="bio"
            className="w-full min-h-[100px] p-2 border rounded-md bg-white/50 text-foreground/70"
            placeholder="Tell us about yourself..."
          />
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="location" className="text-sm font-normal">Location</Label>
          <Input 
            id="location" 
            placeholder="City, Country" 
            className="bg-white/50 text-foreground/70"
          />
        </div>
      </div>
    </ProfileSection>
  );
};