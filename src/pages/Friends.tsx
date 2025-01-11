import { Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import FriendCard from "@/components/FriendCard"
import { dummyFriends } from "@/data/dummyFriends"

const Friends = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <div className="text-left">
          <PageHeader
            title="Friends"
            description="Manage your network of connections"
            icon={Users}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {dummyFriends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Friends;