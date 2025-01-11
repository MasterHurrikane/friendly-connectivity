import { supabase } from "@/integrations/supabase/client";

export const calculateFriendshipDuration = (date: string) => {
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

export const sendFriendRequest = async (userId: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("friends")
    .insert({
      user_id: user.id,
      friend_id: userId,
      status: "pending"
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const acceptFriendRequest = async (requestId: string) => {
  const { data, error } = await supabase
    .from("friends")
    .update({ status: "accepted" })
    .eq("id", requestId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const rejectFriendRequest = async (requestId: string) => {
  const { error } = await supabase
    .from("friends")
    .delete()
    .eq("id", requestId);

  if (error) throw error;
};

export const removeFriend = async (friendId: string) => {
  const { error } = await supabase
    .from("friends")
    .delete()
    .eq("friend_id", friendId);

  if (error) throw error;
};

export const blockUser = async (userId: string) => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not authenticated");

  const { data, error } = await supabase
    .from("blocked_users")
    .insert({
      user_id: user.id,
      blocked_user_id: userId
    })
    .select()
    .single();

  if (error) throw error;

  // Also remove from friends if they were friends
  await removeFriend(userId);
  
  return data;
};

export const logFriendInteraction = async (friendConnectionId: string, type: string, details?: any) => {
  const { data, error } = await supabase
    .from("friend_interactions")
    .insert({
      friend_connection_id: friendConnectionId,
      interaction_type: type,
      details
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getFriendInteractionStats = async (friendConnectionId: string) => {
  const { data, error } = await supabase
    .from("friend_interactions")
    .select("interaction_type, created_at")
    .eq("friend_connection_id", friendConnectionId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  // Calculate statistics
  const stats = {
    totalInteractions: data.length,
    lastInteraction: data[0]?.created_at || null,
    byType: data.reduce((acc: Record<string, number>, curr) => {
      acc[curr.interaction_type] = (acc[curr.interaction_type] || 0) + 1;
      return acc;
    }, {})
  };

  return stats;
};