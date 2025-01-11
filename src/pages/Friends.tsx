import { Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import FriendCard from "@/components/FriendCard"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/integrations/supabase/client"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Skeleton } from "@/components/ui/skeleton"

const Friends = () => {
  const navigate = useNavigate();

  const { data: friends, isLoading } = useQuery({
    queryKey: ['friends'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      const { data: friendConnections, error } = await supabase
        .from('friends')
        .select(`
          id,
          status,
          relationship_type,
          friendship_date,
          last_interaction,
          friend:profiles!friends_friend_id_fkey (
            id,
            first_name,
            last_name,
            profile_picture_url,
            bio
          )
        `)
        .eq('user_id', user.id)
        .eq('status', 'accepted');

      if (error) throw error;
      return friendConnections;
    }
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-white/90 rounded-xl">
              <div className="flex items-start space-x-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (!friends?.length) {
      return (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No friends yet</h3>
          <p className="text-gray-600 mb-4">Start building your network by adding some friends</p>
          <Button onClick={() => navigate('/add')} className="bg-primary hover:bg-primary/90">
            Add Friends
          </Button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {friends.map((connection) => {
          if (!connection.friend) return null;
          
          const friend = {
            id: connection.friend.id,
            name: `${connection.friend.first_name || ''} ${connection.friend.last_name || ''}`.trim(),
            avatar: connection.friend.profile_picture_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${connection.friend.id}`,
            category: connection.relationship_type || 'Friend',
            lastInteraction: connection.last_interaction ? new Date(connection.last_interaction).toLocaleDateString() : undefined,
            metDate: connection.friendship_date,
            bio: connection.friend.bio
          };

          return <FriendCard key={connection.id} friend={friend} />;
        })}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <PageHeader
              title="Friends"
              description="Manage your network of connections"
              icon={Users}
            />
            <Button 
              onClick={() => navigate('/add')}
              className="bg-primary hover:bg-primary/90"
            >
              Add Friend
            </Button>
          </div>
          
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Friends;