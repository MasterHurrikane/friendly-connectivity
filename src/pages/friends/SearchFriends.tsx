import { useState } from "react";
import { Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FriendCard from "@/components/FriendCard";
import { useToast } from "@/hooks/use-toast";
import { dummyFriends } from "@/data/dummyFriends";

const SearchFriends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: `Searching for "${searchQuery}"...`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Search Friends"
          description="Find friends and groups by name, interests, or location"
          icon={Search}
        />
        
        <Card className="p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              placeholder="Search by name, interests, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </form>
        </Card>

        <Tabs defaultValue="friends" className="space-y-4">
          <TabsList>
            <TabsTrigger value="friends">Friends</TabsTrigger>
            <TabsTrigger value="groups">Groups</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="friends" className="space-y-4">
            {dummyFriends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </TabsContent>

          <TabsContent value="groups">
            <div className="text-center text-gray-500 py-8">
              Group search coming soon
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="text-center text-gray-500 py-8">
              Event search coming soon
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SearchFriends;