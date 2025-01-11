import { useQuery } from "@tanstack/react-query";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const DataExportSection = () => {
  const { toast } = useToast();

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  const { data: exportRequests, refetch } = useQuery({
    queryKey: ["data-export-requests", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from("data_export_requests")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();
      
      if (error && error.code !== "PGRST116") throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const requestExport = async (type: string) => {
    if (!session?.user?.id) return;

    const { error } = await supabase
      .from("data_export_requests")
      .insert({
        user_id: session.user.id,
        request_type: type,
      });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to request data export",
        variant: "destructive",
      });
    } else {
      refetch();
      toast({
        title: "Success",
        description: "Data export request submitted successfully",
      });
    }
  };

  const isPending = exportRequests?.status === "pending";

  return (
    <ProfileSection
      title="Data Export"
      description="Download your data"
      icon={Download}
    >
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Export Options</h3>
          <div className="space-y-4">
            <Button
              variant="outline"
              className="w-full justify-start"
              disabled={isPending}
              onClick={() => requestExport("profile")}
            >
              Export Profile Data
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              disabled={isPending}
              onClick={() => requestExport("activities")}
            >
              Export Activity History
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start"
              disabled={isPending}
              onClick={() => requestExport("all")}
            >
              Export All Data
            </Button>
          </div>
          {isPending && (
            <p className="text-sm text-gray-600 mt-4">
              Your last export request is being processed. You'll be notified when it's ready.
            </p>
          )}
        </div>
      </div>
    </ProfileSection>
  );
};