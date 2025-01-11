import { UserCircle, Share2 } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const Profile = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  // Fetch the current user's session
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  // Fetch the user's profile data
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", session.user.id)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  // Redirect to login if no session
  useEffect(() => {
    if (!session && !isLoading) {
      navigate("/login");
    }
  }, [session, isLoading, navigate]);

  const handleShare = () => {
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink);
    toast({
      title: "Link copied!",
      description: "The profile link has been copied to your clipboard.",
      duration: 3000,
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navigation />
        <main className="p-6 md:ml-64">
          <div className="flex justify-center items-center h-[calc(100vh-6rem)]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </main>
      </div>
    );
  }

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