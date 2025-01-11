import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Mail, MessageSquare, Search } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

interface Friend {
  id: string;
  name: string;
  avatar: string;
  selected?: boolean;
}

const InviteFriends = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: "1",
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      id: "2",
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    // Add more dummy friends as needed
  ]);

  const [inviteMethod, setInviteMethod] = useState<"app" | "email" | "text">("app");

  const toggleFriendSelection = (friendId: string) => {
    setFriends(friends.map(friend => 
      friend.id === friendId 
        ? { ...friend, selected: !friend.selected }
        : friend
    ));
  };

  const handleSendInvites = () => {
    const selectedFriends = friends.filter(f => f.selected);
    console.log("Sending invites to:", selectedFriends);
    // Here you would typically send the invites through your chosen method
    navigate("/events/new"); // Navigate to event details
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Invite Friends"
          description="Choose friends to invite to your event"
          icon={Users}
        />
        
        <div className="max-w-2xl mx-auto mt-6 space-y-6">
          <div className="flex items-center gap-4">
            <Button
              variant={inviteMethod === "app" ? "default" : "outline"}
              onClick={() => setInviteMethod("app")}
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              App Notification
            </Button>
            <Button
              variant={inviteMethod === "email" ? "default" : "outline"}
              onClick={() => setInviteMethod("email")}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email
            </Button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Search friends..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {friends
              .filter(friend => 
                friend.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(friend => (
                <Card key={friend.id} className="p-4">
                  <div className="flex items-center gap-4">
                    <Checkbox
                      checked={friend.selected}
                      onCheckedChange={() => toggleFriendSelection(friend.id)}
                    />
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{friend.name}</h3>
                    </div>
                  </div>
                </Card>
              ))}
          </div>

          <div className="flex justify-between items-center">
            <Button variant="outline" onClick={() => navigate(-1)}>
              Back
            </Button>
            <div className="flex items-center gap-4">
              <Badge variant="secondary">
                {friends.filter(f => f.selected).length} selected
              </Badge>
              <Button onClick={handleSendInvites}>
                Send Invites
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InviteFriends;