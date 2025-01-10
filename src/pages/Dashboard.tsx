import { motion } from "framer-motion"
import { Bell, Calendar, MessageSquare, Users } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { Card } from "@/components/ui/card"

const Dashboard = () => {
  const navigate = useNavigate()

  const cards = [
    {
      title: "Friend Activity",
      subtitle: "3 new updates",
      icon: Users,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      content: [
        "Sarah shared a new photo",
        "John's birthday is tomorrow",
        "New event invitation from Mike",
      ],
      route: "/friends",
    },
    {
      title: "Upcoming Events",
      subtitle: "Next 7 days",
      icon: Calendar,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      content: [
        { text: "Coffee Meetup", date: "Tomorrow" },
        { text: "Book Club", date: "In 3 days" },
      ],
      route: "/calendar",
    },
    {
      title: "Notifications",
      subtitle: "5 unread",
      icon: Bell,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
      content: [
        "2 new friend requests",
        "3 event reminders",
        "Birthday reminder: Emma (in 5 days)",
      ],
      route: "/notifications",
    },
    {
      title: "Recent Messages",
      subtitle: "2 unread",
      icon: MessageSquare,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      content: [
        { text: "Alex: Hey, are you free this weekend?", time: "2h ago" },
        { text: "Emma: Thanks for the birthday wish!", time: "5h ago" },
      ],
      route: "/messages",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      <main className="p-4 md:p-6 lg:p-8 md:ml-64">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {cards.map((card) => (
            <Card
              key={card.title}
              className="p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => navigate(card.route)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${card.iconBg}`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>
              <div className="space-y-3">
                {Array.isArray(card.content) &&
                  card.content.map((item, index) => {
                    if (typeof item === "string") {
                      return <p key={index} className="text-sm">{item}</p>
                    } else {
                      return (
                        <div
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <p className="text-sm">{item.text}</p>
                          <span className="text-xs text-gray-500">
                            {item.date || item.time}
                          </span>
                        </div>
                      )
                    }
                  })}
              </div>
            </Card>
          ))}
        </motion.div>
      </main>
    </div>
  )
}

export default Dashboard