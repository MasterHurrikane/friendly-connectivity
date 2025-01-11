import { Settings } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NotificationSettings = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Notification Settings"
          description="Customize your notification preferences"
          icon={Settings}
        />

        <div className="max-w-2xl mx-auto mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Notification Types</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="friend-requests">Friend Requests</Label>
                <Switch id="friend-requests" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="event-updates">Event Updates</Label>
                <Switch id="event-updates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="activity-updates">Activity Updates</Label>
                <Switch id="activity-updates" defaultChecked />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Delivery Preferences</h3>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="frequency">Update Frequency</Label>
                <Select defaultValue="realtime">
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="daily">Daily Summary</SelectItem>
                    <SelectItem value="weekly">Weekly Digest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NotificationSettings;