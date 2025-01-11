import { Compass, Users, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { suggestedFriends } from "@/data/dummyFriends";
import { useMutation } from "@tanstack/react-query";
import { sendFriendRequest } from "@/utils/friendUtils";
import { supabase } from "@/integrations/supabase/client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const DiscoverFriends = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedFriend, setSelectedFriend] = useState<typeof suggestedFriends[0] | null>(null);

  const sendRequestMutation = useMutation({
    mutationFn: async (friendId: string) => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");
      
      await sendFriendRequest(friendId);
      return friendId;
    },
    onSuccess: (_, friendId) => {
      const friend = suggestedFriends.find(f => f.id === friendId);
      toast({
        title: "Friend Request Sent",
        description: `A friend request has been sent to ${friend?.name}`,
        duration: 3000,
      });
      navigate("/friends");
    },
    onError: (error) => {
      console.error("Error sending friend request:", error);
      toast({
        title: "Error",
        description: "Failed to send friend request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleConnect = (friend: typeof suggestedFriends[0]) => {
    setSelectedFriend(friend);
  };

  const handleConfirmConnect = () => {
    if (selectedFriend) {
      sendRequestMutation.mutate(selectedFriend.id);
      setSelectedFriend(null);
    }
  };

  const categories = [
    "Photography",
    "Hiking",
    "Book Clubs",
    "Cooking",
    "Sports",
    "Music",
    "Art",
    "Technology",
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Discover"
          description="Find new friends and groups based on your interests"
          icon={Compass}
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="cursor-pointer hover:bg-[#8e3a9f] transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        <Tabs defaultValue="suggested" className="space-y-4">
          <TabsList>
            <TabsTrigger value="suggested">Suggested</TabsTrigger>
            <TabsTrigger value="nearby">Nearby</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>

          <TabsContent value="suggested">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedFriends.map((friend) => (
                <Card key={friend.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{friend.name}</h3>
                      <p className="text-sm text-gray-500">{friend.city}</p>
                      <div className="mt-2 space-x-2">
                        {friend.interests?.slice(0, 2).map((interest) => (
                          <Badge key={interest} variant="secondary">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        onClick={() => handleConnect(friend)}
                        className="mt-4 w-full"
                        size="sm"
                        disabled={sendRequestMutation.isPending}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        {sendRequestMutation.isPending ? "Sending..." : "Connect"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nearby">
            <div className="text-center text-gray-500 py-8">
              Nearby friends feature coming soon
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <h3 className="font-semibold flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Photography Meetup
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Join our weekly photography walks
                </p>
                <Button className="mt-4 w-full" size="sm">
                  Join Group
                </Button>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={!!selectedFriend} onOpenChange={() => setSelectedFriend(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect with {selectedFriend?.name}</DialogTitle>
              <DialogDescription>
                Would you like to send a friend request to {selectedFriend?.name}? They will be notified of your request.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex space-x-2 justify-end">
              <Button variant="outline" onClick={() => setSelectedFriend(null)}>
                Cancel
              </Button>
              <Button onClick={handleConfirmConnect} disabled={sendRequestMutation.isPending}>
                {sendRequestMutation.isPending ? "Sending..." : "Send Request"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default DiscoverFriends;