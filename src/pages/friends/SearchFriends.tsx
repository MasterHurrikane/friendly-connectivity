import { useState } from "react";
import { Search, Filter, Users, Calendar, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
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

  const dummyGroups = [
    {
      id: 1,
      name: "Photography Enthusiasts",
      members: 24,
      description: "A group for sharing photography tips and organizing photo walks",
      category: "Hobbies",
    },
    {
      id: 2,
      name: "Book Club",
      members: 15,
      description: "Monthly book discussions and literary events",
      category: "Reading",
    },
    {
      id: 3,
      name: "Hiking Adventures",
      members: 42,
      description: "Weekend hiking trips and outdoor activities",
      category: "Outdoor",
    },
  ];

  const dummyEvents = [
    {
      id: 1,
      title: "Summer BBQ Meetup",
      date: "July 15, 2024",
      time: "4:00 PM",
      location: "Central Park",
      attendees: 18,
      category: "Social",
    },
    {
      id: 2,
      title: "Photography Workshop",
      date: "July 22, 2024",
      time: "2:00 PM",
      location: "Art Gallery",
      attendees: 12,
      category: "Workshop",
    },
    {
      id: 3,
      title: "Book Discussion: The Midnight Library",
      date: "July 25, 2024",
      time: "7:00 PM",
      location: "City Library",
      attendees: 8,
      category: "Book Club",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Search Friends"
          description="Find friends and groups by name, interests, or location"
          icon={Search}
        />
        
        <Card className="p-10 mb-6">
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
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dummyGroups.map((group) => (
                <Card key={group.id} className="p-10">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <p className="text-sm text-gray-500">{group.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{group.members} members</span>
                    </div>
                    <Badge variant="secondary">{group.category}</Badge>
                    <Button 
                      className="w-full bg-[#30adc4] hover:bg-[#2b9cb1]"
                    >
                      Join Group
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dummyEvents.map((event) => (
                <Card key={event.id} className="p-10">
                  <div className="flex flex-col space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{event.title}</h3>
                      <Badge variant="secondary" className="mt-2">{event.category}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">{event.attendees} attending</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-[#30adc4] hover:bg-[#2b9cb1]"
                    >
                      View Details
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default SearchFriends;