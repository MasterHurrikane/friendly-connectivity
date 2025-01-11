import { Share2, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/PageHeader";
import { useToast } from "@/hooks/use-toast";

export const ProfileHeader = () => {
  const { toast } = useToast();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "The profile link has been copied to your clipboard.",
      duration: 3000,
    });
  };

  return (
    <div className="flex justify-between items-center mb-6">
      <PageHeader
        title="My Profile"
        description="Manage your personal information and preferences"
        icon={UserCircle}
      />
      <Button 
        onClick={handleShare}
        variant="secondary"
        className="flex items-center gap-2"
      >
        <Share2 className="w-4 h-4" />
        Share Profile
      </Button>
    </div>
  );
};