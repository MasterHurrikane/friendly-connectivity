import { Settings as SettingsIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { SettingsContent } from "@/components/settings/SettingsContent";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Settings"
          description="Manage your app settings and preferences"
          icon={SettingsIcon}
        />
        <SettingsContent />
      </main>
    </div>
  );
};

export default Settings;