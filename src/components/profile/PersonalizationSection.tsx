import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Paintbrush } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const PersonalizationSection = () => {
  return (
    <ProfileSection
      title="Personalization"
      description="Customize your experience"
      icon={Paintbrush}
    >
      <div className="space-y-6">
        <div>
          <Label className="block mb-1.5">Theme Preference</Label>
          <RadioGroup defaultValue="light" className="grid grid-cols-2 gap-4 bg-white/50 p-2 rounded-md">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light" id="light" />
              <Label htmlFor="light">Light Mode</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dark" id="dark" />
              <Label htmlFor="dark">Dark Mode</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label className="block mb-1.5">Language</Label>
          <RadioGroup defaultValue="en" className="grid grid-cols-2 gap-4 bg-white/50 p-2 rounded-md">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="en" id="en" />
              <Label htmlFor="en">English</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="es" id="es" />
              <Label htmlFor="es">Spanish</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </ProfileSection>
  );
};