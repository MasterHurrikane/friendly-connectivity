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
          <div className="space-y-2 text-left">
            <Label htmlFor="firstName" className="text-sm font-normal">First Name</Label>
            <Input 
              id="firstName" 
              placeholder="Enter your first name" 
              className="bg-white/50 text-foreground/70"
            />
          </div>
          <div className="space-y-2 text-left">
            <Label htmlFor="lastName" className="text-sm font-normal">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Enter your last name" 
              className="bg-white/50 text-foreground/70"
            />
          </div>
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="email" className="text-sm font-normal">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            className="bg-white/50 text-foreground/70"
          />
        </div>
        <div className="space-y-2 text-left">
          <Label htmlFor="phone" className="text-sm font-normal">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+1 (555) 000-0000" 
            className="bg-white/50 text-foreground/70"
          />
        </div>
      </div>
    </ProfileSection>
  );
};