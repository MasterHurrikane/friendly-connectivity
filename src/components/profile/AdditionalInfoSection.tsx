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
        <div>
          <Label htmlFor="bio" className="block mb-1.5 text-left">Bio</Label>
          <textarea
            id="bio"
            className="w-full min-h-[100px] p-2 border rounded-md bg-white"
            placeholder="Tell us about yourself..."
          />
        </div>
        <div>
          <Label htmlFor="location" className="block mb-1.5 text-left">Location</Label>
          <Input id="location" placeholder="City, Country" className="bg-white" />
        </div>
      </div>
    </ProfileSection>
  );
};