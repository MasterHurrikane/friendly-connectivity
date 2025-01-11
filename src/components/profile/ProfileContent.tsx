import { BasicProfileSection } from "./BasicProfileSection";
import { PersonalizationSection } from "./PersonalizationSection";
import { RelationshipSection } from "./RelationshipSection";
import { SocialSection } from "./SocialSection";
import { AdditionalInfoSection } from "./AdditionalInfoSection";
import { PrivacySection } from "./PrivacySection";
import { ReviewSection } from "./ReviewSection";

export const ProfileContent = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <BasicProfileSection />
      <PersonalizationSection />
      <RelationshipSection />
      <SocialSection />
      <AdditionalInfoSection />
      <PrivacySection />
      <ReviewSection />
    </div>
  );
};