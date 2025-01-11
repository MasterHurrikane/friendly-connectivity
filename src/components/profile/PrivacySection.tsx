import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Lock } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const PrivacySection = () => {
  return (
    <ProfileSection
      title="Privacy Settings"
      description="Manage your privacy preferences"
      icon={Lock}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Profile Visibility</Label>
            <p className="text-sm text-gray-600">Make your profile visible to others</p>
          </div>
          <Switch defaultChecked />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Activity Status</Label>
            <p className="text-sm text-gray-600">Show when you're online</p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Search Visibility</Label>
            <p className="text-sm text-gray-600">Allow others to find you in search</p>
          </div>
          <Switch defaultChecked />
        </div>
      </div>
    </ProfileSection>
  );
};