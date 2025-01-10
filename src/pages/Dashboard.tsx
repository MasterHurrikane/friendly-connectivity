import { motion } from "framer-motion"
import { 
  Bell, 
  Calendar, 
  MessageSquare, 
  Users,
  Settings,
  HelpCircle,
  BarChart,
  Search,
  UserPlus
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navigation from "@/components/Navigation"
import { Card } from "@/components/ui/card"

const Dashboard = () => {
  const navigate = useNavigate()

  const sections = [
    {
      title: "Main Dashboard",
      cards: [
        {
          title: "Activity Overview",
          subtitle: "Recent updates and notifications",
          icon: Users,
          iconBg: "bg-primary/10",
          iconColor: "text-primary",
          content: [
            "3 new friend requests",
            "5 upcoming events",
            "2 unread messages"
          ],
          route: "/overview"
        },
        {
          title: "Profile Management",
          subtitle: "Update your profile",
          icon: UserPlus,
          iconBg: "bg-pink-100",
          iconColor: "text-pink-500",
          content: [
            "Complete your profile",
            "Add a profile picture",
            "Update your interests"
          ],
          route: "/profile"
        }
      ]
    },
    {
      title: "Activity Feeds",
      cards: [
        {
          title: "Friend Activity",
          subtitle: "Recent updates from friends",
          icon: Users,
          iconBg: "bg-blue-100",
          iconColor: "text-blue-500",
          content: [
            "Sarah shared a photo",
            "John's birthday tomorrow",
            "New event from Mike"
          ],
          route: "/friend-activity"
        },
        {
          title: "Notifications",
          subtitle: "Your personal notifications",
          icon: Bell,
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-500",
          content: [
            "2 new friend requests",
            "Upcoming event reminder",
            "Profile update suggestion"
          ],
          route: "/notifications"
        }
      ]
    },
    {
      title: "Engagement",
      cards: [
        {
          title: "Upcoming Events",
          subtitle: "Your scheduled events",
          icon: Calendar,
          iconBg: "bg-purple-100",
          iconColor: "text-purple-500",
          content: [
            { text: "Team Meetup", date: "Tomorrow" },
            { text: "Birthday Party", date: "Next Week" }
          ],
          route: "/events"
        },
        {
          title: "Friend Highlights",
          subtitle: "Recent milestones",
          icon: MessageSquare,
          iconBg: "bg-green-100",
          iconColor: "text-green-500",
          content: [
            "Alex's work anniversary",
            "Emma's new job celebration",
            "Group milestone achieved"
          ],
          route: "/highlights"
        }
      ]
    },
    {
      title: "Tools",
      cards: [
        {
          title: "Quick Search",
          subtitle: "Find friends and events",
          icon: Search,
          iconBg: "bg-indigo-100",
          iconColor: "text-indigo-500",
          content: [
            "Search for friends",
            "Find upcoming events",
            "Discover groups"
          ],
          route: "/search"
        },
        {
          title: "Insights",
          subtitle: "Your activity statistics",
          icon: BarChart,
          iconBg: "bg-red-100",
          iconColor: "text-red-500",
          content: [
            "Monthly activity summary",
            "Friendship growth",
            "Event participation"
          ],
          route: "/insights"
        }
      ]
    },
    {
      title: "Support",
      cards: [
        {
          title: "Settings",
          subtitle: "Customize your dashboard",
          icon: Settings,
          iconBg: "bg-gray-100",
          iconColor: "text-gray-500",
          content: [
            "Rearrange widgets",
            "Notification preferences",
            "Privacy settings"
          ],
          route: "/settings"
        },
        {
          title: "Help & Support",
          subtitle: "Get assistance",
          icon: HelpCircle,
          iconBg: "bg-teal-100",
          iconColor: "text-teal-500",
          content: [
            "FAQs",
            "Contact support",
            "View tutorials"
          ],
          route: "/help"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      <main className="p-4 md:p-6 lg:p-8 md:ml-64">
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">{section.title}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.cards.map((card) => (
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
                                {item.date}
                              </span>
                            </div>
                          )
                        }
                      })}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  )
}

export default Dashboard