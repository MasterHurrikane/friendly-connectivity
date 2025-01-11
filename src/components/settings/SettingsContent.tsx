import { AppPermissionsSection } from "./AppPermissionsSection";
import { DataExportSection } from "./DataExportSection";
import { PersonalizationSection } from "@/components/profile/PersonalizationSection";
import { PrivacySection } from "@/components/profile/PrivacySection";
import { AccountSection } from "./AccountSection";

export const SettingsContent = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <AccountSection />
      <PersonalizationSection />
      <PrivacySection />
      <AppPermissionsSection />
      <DataExportSection />
    </div>
  );
};