import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { ProfileSection } from "./ProfileSection";

export const ReviewSection = () => {
  return (
    <ProfileSection
      title="Review & Complete"
      description="Verify your profile information"
      icon={CheckCircle}
    >
      <div className="space-y-4">
        <p className="text-sm text-gray-600">
          Please review your profile information before saving changes.
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" className="bg-white/50 hover:bg-white/80">Cancel</Button>
          <Button variant="secondary">Save Changes</Button>
        </div>
      </div>
    </ProfileSection>
  );
};