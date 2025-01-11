import { MessageCircle, CheckCircle, XCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { FriendAvatar } from "@/components/friend/FriendAvatar"

const FriendRequests = () => {
  const { toast } = useToast()

  const handleAccept = (name: string) => {
    toast({
      title: "Friend request accepted",
      description: `You are now friends with ${name}`,
      duration: 3000,
    })
  }

  const handleReject = (name: string) => {
    toast({
      title: "Friend request rejected",
      description: `You have rejected the friend request from ${name}`,
      duration: 3000,
    })
  }

  const requests = [
    {
      id: 1,
      name: "Olivia Martinez",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
      mutualFriends: 3,
    },
    {
      id: 2,
      name: "Lucas Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas",
      mutualFriends: 5,
    },
    {
      id: 3,
      name: "Isabella Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabella",
      mutualFriends: 2,
    },
  ]

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
          {requests.map((request) => (
            <Card key={request.id} className="p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <FriendAvatar
                    avatar={request.avatar}
                    name={request.name}
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="font-semibold">{request.name}</h3>
                    <p className="text-sm text-gray-600">
                      {request.mutualFriends} mutual friends
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAccept(request.name)}
                    className="text-green-600 hover:text-green-700 hover:bg-green-50"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleReject(request.name)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <XCircle className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default FriendRequests