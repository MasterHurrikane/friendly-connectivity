import { FileText } from "lucide-react";
import { ProfileSection } from "./ProfileSection";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { InterestsSection } from "./sections/InterestsSection";
import { HobbiesSection } from "./sections/HobbiesSection";
import { FoodTypesSection } from "./sections/FoodTypesSection";
import { MusicGenresSection } from "./sections/MusicGenresSection";
import { FavoriteColorsSection } from "./sections/FavoriteColorsSection";
import { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export const AdditionalInfoSection = () => {
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

  const handleUpdate = async (field: keyof Profile, value: any) => {
    if (!session?.user?.id) return;
    
    const { error } = await supabase
      .from("profiles")
      .update({ [field]: value })
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
      title="Additional Information"
      description="Other relevant details"
      icon={FileText}
    >
      <div className="space-y-8">
        <InterestsSection profile={profile} onUpdate={handleUpdate} />
        <HobbiesSection profile={profile} onUpdate={handleUpdate} />
        <FoodTypesSection profile={profile} onUpdate={handleUpdate} />
        <MusicGenresSection profile={profile} onUpdate={handleUpdate} />
        <FavoriteColorsSection profile={profile} onUpdate={handleUpdate} />
      </div>
    </ProfileSection>
  );
};