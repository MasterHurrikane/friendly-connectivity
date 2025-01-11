import { useParams, useNavigate } from "react-router-dom";
import { Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/card";
import { FriendAvatar } from "@/components/friend/FriendAvatar";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const GroupDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: groupData, isLoading: isLoadingGroup } = useQuery({
    queryKey: ["group", id],
    queryFn: async () => {
      const { data: group, error } = await supabase
        .from("friend_groups")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        toast({
          title: "Error",
          description: "Failed to load group details",
          variant: "destructive",
        });
        throw error;
      }

      return group;
    },
  });

  const { data: members, isLoading: isLoadingMembers } = useQuery({
    queryKey: ["group-members", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("friend_group_members")
        .select(`
          friend_id,
          profiles:friend_id (
            id,
            first_name,
            last_name,
            profile_picture_url
          )
        `)
        .eq("group_id", id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to load group members",
          variant: "destructive",
        });
        throw error;
      }

      return data;
    },
  });

  if (isLoadingGroup || isLoadingMembers) {
    return <div>Loading...</div>;
  }

  const handleFriendClick = (friendId: string) => {
    navigate(`/friends/${friendId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title={groupData?.name || "Group Details"}
          description="View friends in this group"
          icon={Users}
        />
        
        <div className="grid grid-cols-1 gap-4 mt-6">
          {members?.map((member) => (
            <Card
              key={member.friend_id}
              className="p-4 bg-white hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => handleFriendClick(member.friend_id)}
            >
              <div className="flex items-center space-x-4">
                <FriendAvatar
                  avatar={member.profiles.profile_picture_url || ""}
                  name={`${member.profiles.first_name} ${member.profiles.last_name}`}
                />
                <div>
                  <h3 className="font-semibold">
                    {member.profiles.first_name} {member.profiles.last_name}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GroupDetails;