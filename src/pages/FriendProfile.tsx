import { useParams, useNavigate } from "react-router-dom";
import { Heart, UserX, MessageCircle, Calendar, Activity } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FriendBasicInfo } from "@/components/friend/FriendBasicInfo";
import { FriendDetails } from "@/components/friend/FriendDetails";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const FriendProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: session } = useQuery({
    queryKey: ["session"],
    queryFn: async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    },
  });

  const { data: friend, isLoading } = useQuery({
    queryKey: ["friend", id],
    queryFn: async () => {
      if (!id || !session?.user?.id) return null;
      
      const { data, error } = await supabase
        .from("friends")
        .select(`
          *,
          friend:profiles!friend_id (
            id,
            first_name,
            last_name,
            bio,
            interests,
            hobbies
          )
        `)
        .eq("user_id", session.user.id)
        .eq("friend_id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id && !!session?.user?.id,
  });

  const removeFriendMutation = useMutation({
    mutationFn: async () => {
      if (!id || !session?.user?.id) return;
      
      const { error } = await supabase
        .from("friends")
        .delete()
        .eq("user_id", session.user.id)
        .eq("friend_id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      toast({
        title: "Friend removed",
        description: "The friend has been removed from your list.",
      });
      navigate("/friends");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to remove friend. Please try again.",
        variant: "destructive",
      });
    },
  });

  const blockFriendMutation = useMutation({
    mutationFn: async () => {
      if (!id || !session?.user?.id) return;
      
      const { error } = await supabase
        .from("blocked_users")
        .insert([
          { user_id: session.user.id, blocked_user_id: id }
        ]);

      if (error) throw error;

      // Also remove from friends list
      await removeFriendMutation.mutateAsync();
    },
    onSuccess: () => {
      toast({
        title: "User blocked",
        description: "The user has been blocked and removed from your friends.",
      });
      navigate("/friends");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to block user. Please try again.",
        variant: "destructive",
      });
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navigation />
        <main className="p-6 md:ml-64">
          <div>Loading...</div>
        </main>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navigation />
        <main className="p-6 md:ml-64">
          <div className="text-left">
            <h1>Friend not found</h1>
          </div>
        </main>
      </div>
    );
  }

  const friendName = `${friend.friend.first_name} ${friend.friend.last_name}`;
  const friendshipDuration = friend.friendship_date 
    ? calculateFriendshipDuration(friend.friendship_date)
    : "Recently added";

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <div className="text-left">
          <PageHeader
            title={friendName}
            description={`View and manage ${friendName}'s profile`}
            icon={Heart}
          />
          
          <div className="max-w-4xl mx-auto space-y-6 mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <FriendBasicInfo 
                    friend={{
                      ...friend.friend,
                      name: friendName,
                      avatar: "", // TODO: Add avatar support
                      category: friend.relationship_type || "Friend",
                      metDate: friend.friendship_date,
                    }}
                    friendshipDuration={friendshipDuration}
                  />
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/friends/${id}/activity`)}
                    >
                      <Activity className="w-4 h-4 mr-2" />
                      Activity
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/friends/${id}/message`)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (window.confirm("Are you sure you want to remove this friend?")) {
                          removeFriendMutation.mutate();
                        }
                      }}
                    >
                      <UserX className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                </div>

                <Separator className="my-6" />

                <FriendDetails friend={{
                  ...friend.friend,
                  name: friendName,
                  avatar: "", // TODO: Add avatar support
                  category: friend.relationship_type || "Friend",
                  lastInteraction: friend.last_interaction,
                  email: "", // TODO: Add email support
                  phone: "", // TODO: Add phone support
                  birthday: "", // TODO: Add birthday support
                  metDate: friend.friendship_date,
                }} />

                <Separator className="my-6" />

                <div className="mt-6">
                  <Button
                    variant="destructive"
                    onClick={() => {
                      if (window.confirm("Are you sure you want to block this user? This action cannot be undone.")) {
                        blockFriendMutation.mutate();
                      }
                    }}
                  >
                    Block User
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

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

export default FriendProfile;