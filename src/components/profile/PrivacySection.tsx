import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Lock } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const PrivacySection = () => {
  return (
    <ProfileSection
      title="Privacy Settings"
      description="Control your data and visibility"
      icon={Lock}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Profile Visibility</Label>
            <div className="text-sm text-gray-600">Make profile public</div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Activity Status</Label>
            <div className="text-sm text-gray-600">Show when you're active</div>
          </div>
          <Switch />
        </div>
      </div>
    </ProfileSection>
  );
};