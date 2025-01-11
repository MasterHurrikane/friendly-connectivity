import { Compass, Users, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { dummyFriends } from "@/data/dummyFriends";

const DiscoverFriends = () => {
  const { toast } = useToast();

  const handleConnect = (name: string) => {
    toast({
      title: "Connection Request Sent",
      description: `A friend request has been sent to ${name}`,
      duration: 3000,
    });
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
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
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
              {dummyFriends.map((friend) => (
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
                          <Badge key={interest} variant="outline">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        onClick={() => handleConnect(friend.name)}
                        className="mt-4 w-full"
                        size="sm"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Connect
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
              {/* Add more trending groups/events */}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default DiscoverFriends;