import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UserCircle } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const BasicProfileSection = () => {
  return (
    <ProfileSection
      title="Basic Profile"
      description="Your fundamental information"
      icon={UserCircle}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="block mb-1.5 text-left">First Name</Label>
            <Input id="firstName" placeholder="Enter your first name" className="bg-white/50" />
          </div>
          <div>
            <Label htmlFor="lastName" className="block mb-1.5 text-left">Last Name</Label>
            <Input id="lastName" placeholder="Enter your last name" className="bg-white/50" />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="block mb-1.5 text-left">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" className="bg-white/50" />
        </div>
        <div>
          <Label htmlFor="phone" className="block mb-1.5 text-left">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-white/50" />
        </div>
      </div>
    </ProfileSection>
  );
};