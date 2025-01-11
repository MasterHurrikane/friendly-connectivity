import { Activity, User } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { dummyContacts } from "@/data/dummyContacts";

const FriendActivity = () => {
  const { id } = useParams();
  const friend = dummyContacts.find(contact => contact.id === id);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title={`${friend?.name || 'Friend'}'s Activity`}
          description="View detailed activity history"
          icon={Activity}
        />
        <div className="mt-6 grid gap-4">
          <div className="bg-card p-4 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Coming Soon</h3>
            <p className="text-muted-foreground">
              Detailed activity history will be available here shortly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendActivity;