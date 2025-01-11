import { UserPlus, Import, Users, Share2 } from "lucide-react"
import { Link } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const AddFriend = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Add Friends"
          description="Connect with friends in different ways"
          icon={UserPlus}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Link to="/add">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
              <UserPlus className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manual Entry</h3>
              <p className="text-sm text-gray-600">
                Add a friend manually by entering their details
              </p>
            </Card>
          </Link>

          <Link to="/friends/import">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
              <Import className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Import Contacts</h3>
              <p className="text-sm text-gray-600">
                Import friends from your contacts or social media
              </p>
            </Card>
          </Link>

          <Link to="/friends/groups">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white/90 backdrop-blur-sm">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Manage Groups</h3>
              <p className="text-sm text-gray-600">
                Create and manage friend groups
              </p>
            </Card>
          </Link>
        </div>

        <div className="mt-8">
          <Link to="/friends/requests">
            <Button variant="outline" className="w-full md:w-auto">
              <Share2 className="w-4 h-4 mr-2" />
              View Friend Requests
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default AddFriend