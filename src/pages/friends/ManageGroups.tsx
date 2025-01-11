import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Plus, X, Check } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { FriendAvatar } from "@/components/friend/FriendAvatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ManageGroups = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [newGroup, setNewGroup] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState<string[]>([]);

  // Get current user
  const { data: user } = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    },
  });

  const { data: groups } = useQuery({
    queryKey: ["friend-groups"],
    enabled: !!user?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("friend_groups")
        .select(`
          id,
          name,
          friend_group_members (
            count
          )
        `)
        .eq('user_id', user?.id);

      if (error) throw error;
      return data.map(group => ({
        ...group,
        memberCount: group.friend_group_members[0]?.count || 0
      }));
    },
  });

  const { data: friends } = useQuery({
    queryKey: ["friends"],
    enabled: !!user?.id,
    queryFn: async () => {
      const { data, error } = await supabase
        .from("profiles")
        .select("id, first_name, last_name, profile_picture_url");

      if (error) throw error;
      return data;
    },
  });

  const createGroupMutation = useMutation({
    mutationFn: async () => {
      if (!newGroup.trim() || !user?.id) throw new Error("Group name is required and user must be logged in");

      // Create the group
      const { data: group, error: groupError } = await supabase
        .from("friend_groups")
        .insert({ 
          name: newGroup.trim(),
          user_id: user.id  // Add the user_id here
        })
        .select()
        .single();

      if (groupError) throw groupError;

      // Add selected friends to the group
      if (selectedFriends.length > 0) {
        const members = selectedFriends.map(friendId => ({
          group_id: group.id,
          friend_id: friendId,
        }));

        const { error: membersError } = await supabase
          .from("friend_group_members")
          .insert(members);

        if (membersError) throw membersError;
      }

      return group;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friend-groups"] });
      setNewGroup("");
      setSelectedFriends([]);
      setIsDialogOpen(false);
      toast({
        title: "Success",
        description: "Group created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const deleteGroupMutation = useMutation({
    mutationFn: async (groupId: string) => {
      const { error } = await supabase
        .from("friend_groups")
        .delete()
        .eq("id", groupId);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friend-groups"] });
      toast({
        title: "Success",
        description: "Group deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleAddGroup = () => {
    createGroupMutation.mutate();
  };

  const handleDeleteGroup = (groupId: string) => {
    deleteGroupMutation.mutate(groupId);
  };

  const toggleFriendSelection = (friendId: string) => {
    setSelectedFriends(prev =>
      prev.includes(friendId)
        ? prev.filter(id => id !== friendId)
        : [...prev, friendId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Manage Groups"
          description="Create and manage your friend groups"
          icon={Users}
        />
        
        <Card className="p-6 bg-white/90 backdrop-blur-sm mt-6">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create New Group
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create New Group</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Enter group name"
                  value={newGroup}
                  onChange={(e) => setNewGroup(e.target.value)}
                />
                <div className="space-y-2">
                  <h4 className="font-medium">Select Friends</h4>
                  <div className="max-h-60 overflow-y-auto space-y-2">
                    {friends?.map((friend) => (
                      <div
                        key={friend.id}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <Checkbox
                          checked={selectedFriends.includes(friend.id)}
                          onCheckedChange={() => toggleFriendSelection(friend.id)}
                        />
                        <FriendAvatar
                          avatar={friend.profile_picture_url || ""}
                          name={`${friend.first_name} ${friend.last_name}`}
                        />
                        <span>
                          {friend.first_name} {friend.last_name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <Button
                  onClick={() => createGroupMutation.mutate()}
                  disabled={!newGroup.trim() || !user?.id}
                  className="w-full"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </Card>

        <div className="space-y-4 mt-6">
          {groups?.map((group) => (
            <Card
              key={group.id}
              className="p-4 bg-white/90 backdrop-blur-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/friends/groups/${group.id}`)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary">
                      {group.memberCount} members
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteGroup(group.id);
                    }}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ManageGroups;