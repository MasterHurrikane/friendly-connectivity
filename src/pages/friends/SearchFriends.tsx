import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FriendAvatar } from "@/components/friend/FriendAvatar";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

interface SearchResult {
  id: string;
  first_name: string | null;
  last_name: string | null;
  profile_picture_url: string | null;
  interests: string[] | null;
  hobbies: string[] | null;
}

export const SearchFriends = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const { data: searchResults, isLoading } = useQuery({
    queryKey: ["searchFriends", searchQuery],
    queryFn: async () => {
      if (!searchQuery.trim()) return [];

      const { data: currentUser } = await supabase.auth.getUser();
      if (!currentUser.user) throw new Error("Not authenticated");

      const { data, error } = await supabase
        .from("profiles")
        .select("id, first_name, last_name, profile_picture_url, interests, hobbies")
        .neq("id", currentUser.user.id)
        .or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%`)
        .limit(10);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to search for friends. Please try again.",
          variant: "destructive",
        });
        throw error;
      }

      return data as SearchResult[];
    },
    enabled: searchQuery.trim().length > 0,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is handled automatically by the query
  };

  const handleConnect = async (friendId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to send friend requests",
        variant: "destructive",
      });
      return;
    }

    const { error } = await supabase
      .from("friends")
      .insert([
        {
          user_id: user.id,
          friend_id: friendId,
          status: "pending",
        },
      ]);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "Already Connected",
          description: "You have already sent a friend request to this user",
          variant: "default",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send friend request. Please try again.",
          variant: "destructive",
        });
      }
      return;
    }

    toast({
      title: "Success",
      description: "Friend request sent successfully!",
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Search Friends"
          description="Find friends by name or interests"
          icon={Search}
        />
        
        <Card className="p-6 mb-6">
          <form onSubmit={handleSearch} className="flex gap-4">
            <Input
              placeholder="Search by name..."
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

        <div className="space-y-4">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-start space-x-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-6 w-1/4" />
                    <Skeleton className="h-4 w-1/3" />
                    <div className="flex gap-2">
                      <Skeleton className="h-6 w-20" />
                      <Skeleton className="h-6 w-20" />
                    </div>
                  </div>
                </div>
              </Card>
            ))
          ) : searchResults?.length === 0 && searchQuery ? (
            <Card className="p-6 text-center text-gray-500">
              No results found for "{searchQuery}"
            </Card>
          ) : (
            searchResults?.map((profile) => (
              <Card key={profile.id} className="p-6">
                <div className="flex items-start space-x-4">
                  <FriendAvatar
                    avatar={profile.profile_picture_url || ""}
                    name={`${profile.first_name} ${profile.last_name}`}
                    className="w-16 h-16"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">
                      {profile.first_name} {profile.last_name}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {profile.interests?.slice(0, 3).map((interest) => (
                        <Badge key={interest} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleConnect(profile.id)}
                      className="mt-4"
                      size="sm"
                    >
                      Connect
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  );
};