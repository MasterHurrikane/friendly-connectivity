import { UserCircle, Share2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { BasicProfileSection } from "@/components/profile/BasicProfileSection";
import { PersonalizationSection } from "@/components/profile/PersonalizationSection";
import { RelationshipSection } from "@/components/profile/RelationshipSection";
import { SocialSection } from "@/components/profile/SocialSection";
import { AdditionalInfoSection } from "@/components/profile/AdditionalInfoSection";
import { PrivacySection } from "@/components/profile/PrivacySection";
import { ReviewSection } from "@/components/profile/ReviewSection";

const Profile = () => {
  const { toast } = useToast();

  const handleShare = () => {
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink);
    toast({
      title: "Link copied!",
      description: "The profile link has been copied to your clipboard.",
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <div className="flex justify-between items-center mb-6">
          <PageHeader
            title="My Profile"
            description="Manage your personal information and preferences"
            icon={UserCircle}
          />
          <Button 
            onClick={handleShare}
            variant="secondary"
            className="flex items-center gap-2 hover:bg-secondary/90"
          >
            <Share2 className="w-4 h-4" />
            Share Profile
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <BasicProfileSection />
          <PersonalizationSection />
          <RelationshipSection />
          <SocialSection />
          <AdditionalInfoSection />
          <PrivacySection />
          <ReviewSection />
        </div>
      </main>
    </div>
  );
};

export default Profile;