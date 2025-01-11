import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UserCircle } from "lucide-react";
import { ProfileSection } from "./ProfileSection";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export const BasicProfileSection = () => {
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

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

  const handleUpdate = async (field: keyof Profile, value: string) => {
    if (!session?.user?.id) return;
    
    const { error } = await supabase
      .from("profiles")
      .update({ id: session.user.id, [field]: value })
      .eq("id", session.user.id);

    if (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
            <Input 
              id="firstName" 
              placeholder="Enter your first name" 
              className="bg-white"
              defaultValue={profile?.first_name || ""}
              onChange={(e) => handleUpdate("first_name", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="block mb-1.5 text-left">Last Name</Label>
            <Input 
              id="lastName" 
              placeholder="Enter your last name" 
              className="bg-white"
              defaultValue={profile?.last_name || ""}
              onChange={(e) => handleUpdate("last_name", e.target.value)}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="bio" className="block mb-1.5 text-left">Bio</Label>
          <Textarea
            id="bio"
            placeholder="Tell us about yourself..."
            className="min-h-[100px] bg-white"
            defaultValue={profile?.bio || ""}
            onChange={(e) => handleUpdate("bio", e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="email" className="block mb-1.5 text-left">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="your@email.com" 
            className="bg-white"
            value={session?.user?.email || ""}
            disabled
          />
        </div>
        <div>
          <Label htmlFor="phone" className="block mb-1.5 text-left">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+1 (555) 000-0000" 
            className="bg-white"
            defaultValue={profile?.phone_number || ""}
            onChange={(e) => handleUpdate("phone_number", e.target.value)}
          />
        </div>
      </div>
    </ProfileSection>
  );
};