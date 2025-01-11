import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
          <Label className="block mb-1.5 text-left">Theme Preference</Label>
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
          <Label className="block mb-1.5 text-left">Language</Label>
          <Select defaultValue="en">
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Select your language" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español (Spanish)</SelectItem>
              <SelectItem value="pt">Português (Portuguese)</SelectItem>
              <SelectItem value="id">Bahasa Indonesia (Indonesian)</SelectItem>
              <SelectItem value="hi">हिन्दी (Hindi)</SelectItem>
              <SelectItem value="ar">العربية (Arabic)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </ProfileSection>
  );
};