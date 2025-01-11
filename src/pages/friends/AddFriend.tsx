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
        
        <div className="max-w-4xl mx-auto mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/add">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/95 backdrop-blur-sm border border-primary/10">
                <UserPlus className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Manual Entry</h3>
                <p className="text-sm text-foreground/70">
                  Add a friend manually by entering their details
                </p>
              </Card>
            </Link>

            <Link to="/friends/import">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/95 backdrop-blur-sm border border-primary/10">
                <Import className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Import Contacts</h3>
                <p className="text-sm text-foreground/70">
                  Import friends from your contacts or social media
                </p>
              </Card>
            </Link>

            <Link to="/friends/groups">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-white/95 backdrop-blur-sm border border-primary/10">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Manage Groups</h3>
                <p className="text-sm text-foreground/70">
                  Create and manage friend groups
                </p>
              </Card>
            </Link>
          </div>

          <div className="mt-8 flex justify-center">
            <Link to="/friends/requests">
              <Button variant="outline" className="bg-white/95 backdrop-blur-sm">
                <Share2 className="w-4 h-4 mr-2" />
                View Friend Requests
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddFriend