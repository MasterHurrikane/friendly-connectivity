import { useParams, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { useQuery, useMutation } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { Friend } from "@/data/dummyFriends";
import { FriendProfileContent } from "@/components/friend/FriendProfileContent";
import { calculateFriendshipDuration } from "@/utils/friendUtils";

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

  const friendData: Friend = {
    id: friend.friend.id,
    name: friendName,
    avatar: "",
    category: friend.relationship_type || "Friend",
    lastInteraction: friend.last_interaction || undefined,
    metDate: friend.friendship_date,
    email: "",
    phone: "",
    birthday: "",
    city: "",
    timezone: "",
    first_name: friend.friend.first_name,
    last_name: friend.friend.last_name,
    bio: friend.friend.bio,
    interests: friend.friend.interests,
    hobbies: friend.friend.hobbies,
  };

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
            <FriendProfileContent
              friend={friendData}
              friendshipDuration={friendshipDuration}
              removeFriendMutation={removeFriendMutation}
              blockFriendMutation={blockFriendMutation}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default FriendProfile;