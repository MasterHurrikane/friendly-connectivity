import { MessageCircle, CheckCircle, XCircle } from "lucide-react"
import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { FriendAvatar } from "@/components/friend/FriendAvatar"
import { supabase } from "@/integrations/supabase/client"

interface FriendRequest {
  id: string
  friend: {
    id: string
    first_name: string | null
    last_name: string | null
    profile_picture_url: string | null
  }
}

const FriendRequests = () => {
  const { toast } = useToast()
  const [requests, setRequests] = useState<FriendRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFriendRequests()
  }, [])

  const fetchFriendRequests = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return

      const { data, error } = await supabase
        .from('friends')
        .select(`
          id,
          friend:profiles!friend_id (
            id,
            first_name,
            last_name,
            profile_picture_url
          )
        `)
        .eq('user_id', user.id)
        .eq('status', 'pending')

      if (error) throw error
      setRequests(data || [])
    } catch (error) {
      console.error('Error fetching friend requests:', error)
      toast({
        title: "Error",
        description: "Failed to load friend requests",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleAccept = async (requestId: string, friendName: string) => {
    try {
      const { error } = await supabase
        .from('friends')
        .update({ status: 'accepted' })
        .eq('id', requestId)

      if (error) throw error

      setRequests(prev => prev.filter(req => req.id !== requestId))
      toast({
        title: "Friend request accepted",
        description: `You are now friends with ${friendName}`,
        duration: 3000,
      })
    } catch (error) {
      console.error('Error accepting friend request:', error)
      toast({
        title: "Error",
        description: "Failed to accept friend request",
        variant: "destructive",
      })
    }
  }

  const handleReject = async (requestId: string, friendName: string) => {
    try {
      const { error } = await supabase
        .from('friends')
        .delete()
        .eq('id', requestId)

      if (error) throw error

      setRequests(prev => prev.filter(req => req.id !== requestId))
      toast({
        title: "Friend request rejected",
        description: `You have rejected the friend request from ${friendName}`,
        duration: 3000,
      })
    } catch (error) {
      console.error('Error rejecting friend request:', error)
      toast({
        title: "Error",
        description: "Failed to reject friend request",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Friend Requests"
          description="Manage your incoming friend requests"
          icon={MessageCircle}
        />
        
        <div className="space-y-4 mt-6">
          {loading ? (
            <Card className="p-4">
              <p className="text-center text-muted-foreground">Loading requests...</p>
            </Card>
          ) : requests.length === 0 ? (
            <Card className="p-4">
              <p className="text-center text-muted-foreground">No pending friend requests</p>
            </Card>
          ) : (
            requests.map((request) => (
              <Card key={request.id} className="p-4 bg-white/90 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <FriendAvatar
                      avatar={request.friend.profile_picture_url || `https://api.dicebear.com/7.x/avataaars/svg?seed=${request.friend.first_name}`}
                      name={`${request.friend.first_name} ${request.friend.last_name}`}
                      className="w-12 h-12"
                    />
                    <div>
                      <h3 className="font-semibold">
                        {request.friend.first_name} {request.friend.last_name}
                      </h3>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAccept(request.id, `${request.friend.first_name} ${request.friend.last_name}`)}
                      className="text-green-600 hover:text-green-700 hover:bg-green-50"
                    >
                      <CheckCircle className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleReject(request.id, `${request.friend.first_name} ${request.friend.last_name}`)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </main>
    </div>
  )
}

export default FriendRequests