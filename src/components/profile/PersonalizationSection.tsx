import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Palette } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const PersonalizationSection = () => {
  return (
    <ProfileSection
      title="Personalization"
      description="Customize your experience"
      icon={Palette}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Dark Mode</Label>
            <div className="text-sm text-gray-600">Enable dark theme</div>
          </div>
          <Switch />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label>Notifications</Label>
            <div className="text-sm text-gray-600">Enable push notifications</div>
          </div>
          <Switch />
        </div>
      </div>
    </ProfileSection>
  );
};