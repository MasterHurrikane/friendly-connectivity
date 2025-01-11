import { useQuery } from "@tanstack/react-query";
import { Lock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const AppPermissionsSection = () => {
  const { toast } = useToast();

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  const { data: permissions, refetch } = useQuery({
    queryKey: ["app-permissions", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from("app_permissions")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle();
      
      if (error && error.code !== "PGRST116") throw error;
      return data || { camera_access: false, location_access: false, contacts_access: false };
    },
    enabled: !!session?.user?.id,
  });

  const handlePermissionChange = async (permission: string, value: boolean) => {
    if (!session?.user?.id) return;

    const { error } = await supabase
      .from("app_permissions")
      .upsert({ 
        user_id: session.user.id,
        [permission]: value,
        updated_at: new Date().toISOString(),
      })
      .eq("user_id", session.user.id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update permission",
        variant: "destructive",
      });
    } else {
      refetch();
      toast({
        title: "Success",
        description: "Permission updated successfully",
      });
    }
  };

  return (
    <ProfileSection
      title="App Permissions"
      description="Manage app access permissions"
      icon={Lock}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between bg-white p-3 rounded-md">
          <div>
            <Label className="block text-left">Camera Access</Label>
            <p className="text-sm text-gray-600">Allow app to use your camera</p>
          </div>
          <Switch
            checked={permissions?.camera_access || false}
            onCheckedChange={(checked) => handlePermissionChange("camera_access", checked)}
          />
        </div>
        
        <div className="flex items-center justify-between bg-white p-3 rounded-md">
          <div>
            <Label className="block text-left">Location Access</Label>
            <p className="text-sm text-gray-600">Allow app to access your location</p>
          </div>
          <Switch
            checked={permissions?.location_access || false}
            onCheckedChange={(checked) => handlePermissionChange("location_access", checked)}
          />
        </div>

        <div className="flex items-center justify-between bg-white p-3 rounded-md">
          <div>
            <Label className="block text-left">Contacts Access</Label>
            <p className="text-sm text-gray-600">Allow app to access your contacts</p>
          </div>
          <Switch
            checked={permissions?.contacts_access || false}
            onCheckedChange={(checked) => handlePermissionChange("contacts_access", checked)}
          />
        </div>
      </div>
    </ProfileSection>
  );
};