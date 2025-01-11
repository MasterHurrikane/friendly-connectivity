import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Messages = () => {
  const [newMessage, setNewMessage] = useState("");
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);

  const { data: conversations, isLoading: conversationsLoading } = useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("conversations")
        .select(`
          *,
          participant:profiles!participant_id (
            id,
            first_name,
            last_name,
            profile_picture_url
          )
        `)
        .order("last_message_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const { data: messages, isLoading: messagesLoading } = useQuery({
    queryKey: ["messages", currentConversationId],
    queryFn: async () => {
      if (!currentConversationId) return null;
      
      const { data, error } = await supabase
        .from("messages")
        .select(`
          *,
          sender:profiles!sender_id (
            id,
            first_name,
            last_name
          )
        `)
        .eq("conversation_id", currentConversationId)
        .order("created_at", { ascending: true });

      if (error) throw error;
      return data;
    },
    enabled: !!currentConversationId,
  });

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !currentConversationId) return;

    const { error } = await supabase.from("messages").insert({
      conversation_id: currentConversationId,
      content: newMessage,
      sender_id: (await supabase.auth.getUser()).data.user?.id,
    });

    if (!error) {
      setNewMessage("");
    }
  };

  useEffect(() => {
    const channel = supabase
      .channel("messages_channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          console.log("New message:", payload);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Messages"
          description="Chat with your friends"
          icon={MessageSquare}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Conversations List */}
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-4">Conversations</h2>
            <ScrollArea className="h-[600px]">
              {conversationsLoading ? (
                <div>Loading conversations...</div>
              ) : (
                <div className="space-y-2">
                  {conversations?.map((conversation) => (
                    <Button
                      key={conversation.id}
                      variant={currentConversationId === conversation.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setCurrentConversationId(conversation.id)}
                    >
                      <Avatar className="h-8 w-8 mr-2" />
                      <div className="text-left">
                        <p className="font-medium">
                          {conversation.participant.first_name} {conversation.participant.last_name}
                        </p>
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </ScrollArea>
          </div>

          {/* Messages Area */}
          <div className="md:col-span-2 bg-white rounded-lg shadow p-4">
            {currentConversationId ? (
              <>
                <ScrollArea className="h-[500px] mb-4">
                  {messagesLoading ? (
                    <div>Loading messages...</div>
                  ) : (
                    <div className="space-y-4">
                      {messages?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${
                            message.sender.id === (supabase.auth.getUser()).data?.user?.id
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[70%] p-3 rounded-lg ${
                              message.sender.id === (supabase.auth.getUser()).data?.user?.id
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100"
                            }`}
                          >
                            <p>{message.content}</p>
                            <p className="text-xs mt-1 opacity-70">
                              {new Date(message.created_at).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
                <form onSubmit={sendMessage} className="flex gap-2">
                  <Input
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1"
                  />
                  <Button type="submit">Send</Button>
                </form>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;