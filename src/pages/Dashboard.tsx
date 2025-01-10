import { motion } from "framer-motion"
import { Bell, Calendar, MessageSquare, Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import { Card } from "@/components/ui/card"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      <main className="p-4 md:p-6 lg:p-8 md:ml-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Activity Summary Card */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Friend Activity</h3>
                <p className="text-sm text-gray-500">3 new updates</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">Sarah shared a new photo</p>
              <p className="text-sm">John's birthday is tomorrow</p>
              <p className="text-sm">New event invitation from Mike</p>
            </div>
          </Card>

          {/* Upcoming Events Card */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-secondary/10 rounded-full">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold">Upcoming Events</h3>
                <p className="text-sm text-gray-500">Next 7 days</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm">Coffee Meetup</p>
                <span className="text-xs text-gray-500">Tomorrow</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Book Club</p>
                <span className="text-xs text-gray-500">In 3 days</span>
              </div>
            </div>
          </Card>

          {/* Notifications Card */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-pink-100 rounded-full">
                <Bell className="w-6 h-6 text-pink-500" />
              </div>
              <div>
                <h3 className="font-semibold">Notifications</h3>
                <p className="text-sm text-gray-500">5 unread</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm">2 new friend requests</p>
              <p className="text-sm">3 event reminders</p>
              <p className="text-sm">Birthday reminder: Emma (in 5 days)</p>
            </div>
          </Card>

          {/* Messages Card */}
          <Card className="p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MessageSquare className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold">Recent Messages</h3>
                <p className="text-sm text-gray-500">2 unread</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-sm">Alex: Hey, are you free this weekend?</p>
                <span className="text-xs text-gray-500">2h ago</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm">Emma: Thanks for the birthday wish!</p>
                <span className="text-xs text-gray-500">5h ago</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </main>
    </div>
  )
}

export default Dashboard