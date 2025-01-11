import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FriendBasicInfo } from "@/components/friend/FriendBasicInfo";
import { FriendDetails } from "@/components/friend/FriendDetails";
import { dummyFriends } from "@/data/dummyFriends";

const FriendProfile = () => {
  const { id } = useParams();
  const friend = dummyFriends.find(c => c.id === id);

  if (!friend) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navigation />
        <main className="p-6 md:ml-64">
          <h1>Friend not found</h1>
        </main>
      </div>
    );
  }

  const calculateFriendshipDuration = (date: string) => {
    const start = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    }
    return `${months} month${months > 1 ? 's' : ''}`;
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title={friend.name}
          description={`View and manage ${friend.name}'s profile`}
          icon={Heart}
        />
        
        <div className="max-w-4xl mx-auto space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <FriendBasicInfo 
                friend={friend} 
                friendshipDuration={calculateFriendshipDuration(friend.metDate)} 
              />
              <Separator className="my-6" />
              <FriendDetails friend={friend} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FriendProfile;