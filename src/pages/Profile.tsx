import { UserCircle, Palette, Heart, Share2, FileText, Lock, CheckCircle, Users } from "lucide-react";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Profile = () => {
  const { toast } = useToast();
  const [customGroups, setCustomGroups] = useState<string[]>([]);
  const [newGroup, setNewGroup] = useState("");

  const handleShare = () => {
    const shareableLink = window.location.href;
    navigator.clipboard.writeText(shareableLink);
    toast({
      title: "Link copied!",
      description: "The profile link has been copied to your clipboard.",
      duration: 3000,
    });
  };

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      setCustomGroups([...customGroups, newGroup.trim()]);
      setNewGroup("");
      toast({
        title: "Group added!",
        description: `"${newGroup}" has been added to your custom groups.`,
        duration: 3000,
      });
    }
  };

  const handleRemoveGroup = (group: string) => {
    setCustomGroups(customGroups.filter(g => g !== group));
    toast({
      title: "Group removed",
      description: `"${group}" has been removed from your custom groups.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-background">
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
          <ProfileSection
            title="Basic Profile"
            description="Your fundamental information"
            icon={UserCircle}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" className="bg-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" className="bg-white/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" className="bg-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" className="bg-white/50" />
              </div>
            </div>
          </ProfileSection>

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

          <ProfileSection
            title="Relationship Details"
            description="Your connections and preferences"
            icon={Heart}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Default Groups</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline">Family</Button>
                  <Button variant="outline">Friends</Button>
                  <Button variant="outline">Colleagues</Button>
                  <Button variant="outline">Business</Button>
                </div>
              </div>

              <div className="space-y-4">
                <Label>Custom Groups</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a custom group (e.g., Book Club)"
                    value={newGroup}
                    onChange={(e) => setNewGroup(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleAddGroup}
                    variant="secondary"
                    className="flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Add Group
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {customGroups.map((group) => (
                    <Badge
                      key={group}
                      variant="secondary"
                      className="px-3 py-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                      onClick={() => handleRemoveGroup(group)}
                    >
                      {group} ×
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </ProfileSection>

          <ProfileSection
            title="Social Integration"
            description="Connect your social accounts"
            icon={Share2}
          >
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-white/50 hover:bg-white/80">
                <svg className="w-5 h-5 mr-2" fill="#1DA1F2" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Connect Twitter
              </Button>
              <Button variant="outline" className="w-full justify-start bg-white/50 hover:bg-white/80">
                <svg className="w-5 h-5 mr-2" fill="#4267B2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Connect Facebook
              </Button>
            </div>
          </ProfileSection>

          <ProfileSection
            title="Additional Information"
            description="Other relevant details"
            icon={FileText}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <textarea
                  id="bio"
                  className="w-full min-h-[100px] p-2 border rounded-md"
                  placeholder="Tell us about yourself..."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, Country" />
              </div>
            </div>
          </ProfileSection>

          <ProfileSection
            title="Privacy Settings"
            description="Control your data and visibility"
            icon={Lock}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Profile Visibility</Label>
                  <div className="text-sm text-gray-600">Make profile public</div>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Activity Status</Label>
                  <div className="text-sm text-gray-600">Show when you're active</div>
                </div>
                <Switch />
              </div>
            </div>
          </ProfileSection>

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
        </div>
      </main>
    </div>
  );
};

export default Profile;