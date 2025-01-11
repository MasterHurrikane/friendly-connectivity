import { Activity, Image } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";

const SharedMemories = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Shared Memories"
          description="Cherish the moments you've shared with friends"
          icon={Activity}
        />
        <div className="mt-6 grid gap-4">
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">
              Your shared memories will appear here shortly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SharedMemories;