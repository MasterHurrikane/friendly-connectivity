import { useQuery } from "@tanstack/react-query";
import { CreditCard } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ProfileSection } from "@/components/profile/ProfileSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Database } from "@/integrations/supabase/types";
import { useToast } from "@/hooks/use-toast";

type Subscription = Database["public"]["Tables"]["subscriptions"]["Row"];

export const AccountSection = () => {
  const { toast } = useToast();
  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  const { data: subscription, isLoading } = useQuery({
    queryKey: ["subscription", session?.user?.id],
    queryFn: async () => {
      if (!session?.user?.id) return null;
      const { data, error } = await supabase
        .from("subscriptions")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!session?.user?.id,
  });

  const handleManageSubscription = async () => {
    try {
      const response = await fetch('/api/stripe/create-portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to create portal session');

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to load subscription management portal",
        variant: "destructive",
      });
    }
  };

  const handleUpgrade = async () => {
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      if (!response.ok) throw new Error('Failed to create checkout session');

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to start checkout process",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileSection
      title="Account & Billing"
      description="Manage your subscription and billing details"
      icon={CreditCard}
    >
      <div className="space-y-6">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">
                  {subscription?.plan_type || "Free Plan"}
                </p>
                <p className="text-sm text-gray-500">
                  {subscription?.status === "active"
                    ? "Active until " +
                      new Date(
                        subscription.current_period_end || ""
                      ).toLocaleDateString()
                    : "No active subscription"}
                </p>
              </div>
              {subscription?.status === "active" ? (
                <Button onClick={handleManageSubscription}>
                  Manage Subscription
                </Button>
              ) : (
                <Button onClick={handleUpgrade}>Upgrade</Button>
              )}
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Account Details</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-500">
                  {session?.user?.email || "No email set"}
                </p>
              </div>
              <Button variant="outline" onClick={() => {}}>
                Update Email
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Password</p>
                <p className="text-sm text-gray-500">••••••••</p>
              </div>
              <Button variant="outline" onClick={() => {}}>
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-destructive">
            Danger Zone
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Delete Account</p>
                <p className="text-sm text-gray-500">
                  This action cannot be undone
                </p>
              </div>
              <Button variant="destructive" onClick={() => {}}>
                Delete Account
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </ProfileSection>
  );
};