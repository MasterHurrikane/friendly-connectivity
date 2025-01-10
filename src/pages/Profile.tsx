import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import {
  User,
  Phone,
  Heart,
  FileText,
  Star,
  Users,
  Share2,
  Medal,
  Calendar,
  Shield,
  CheckCircle,
} from "lucide-react";

const Profile = () => {
  const sections = [
    {
      title: "Basic Profile Setup",
      cards: [
        {
          title: "Basic Information",
          subtitle: "Name, Email, Profile Picture",
          icon: User,
          iconBg: "bg-blue-100",
          iconColor: "text-blue-500",
          route: "/profile/basic-info"
        },
        {
          title: "Contact Details",
          subtitle: "Phone Number, Address, etc.",
          icon: Phone,
          iconBg: "bg-green-100",
          iconColor: "text-green-500",
          route: "/profile/contact"
        }
      ]
    },
    {
      title: "Personalization",
      cards: [
        {
          title: "Interests and Hobbies",
          subtitle: "What you love to do",
          icon: Heart,
          iconBg: "bg-pink-100",
          iconColor: "text-pink-500",
          route: "/profile/interests"
        },
        {
          title: "Bio/Introduction",
          subtitle: "Tell others about yourself",
          icon: FileText,
          iconBg: "bg-purple-100",
          iconColor: "text-purple-500",
          route: "/profile/bio"
        },
        {
          title: "Favorite Things",
          subtitle: "Colors, Food, Activities",
          icon: Star,
          iconBg: "bg-yellow-100",
          iconColor: "text-yellow-500",
          route: "/profile/favorites"
        }
      ]
    },
    {
      title: "Relationship Details",
      cards: [
        {
          title: "Family and Relationships",
          subtitle: "Partner, Children, Marital Status",
          icon: Users,
          iconBg: "bg-red-100",
          iconColor: "text-red-500",
          route: "/profile/relationships"
        }
      ]
    },
    {
      title: "Social Integration",
      cards: [
        {
          title: "Social Media Links",
          subtitle: "Connect your social accounts",
          icon: Share2,
          iconBg: "bg-indigo-100",
          iconColor: "text-indigo-500",
          route: "/profile/social"
        }
      ]
    },
    {
      title: "Additional Information",
      cards: [
        {
          title: "Milestones",
          subtitle: "Birthdays, Anniversaries, Friendversaries",
          icon: Medal,
          iconBg: "bg-orange-100",
          iconColor: "text-orange-500",
          route: "/profile/milestones"
        },
        {
          title: "Future Plans and Goals",
          subtitle: "What you're working towards",
          icon: Calendar,
          iconBg: "bg-teal-100",
          iconColor: "text-teal-500",
          route: "/profile/goals"
        }
      ]
    },
    {
      title: "Privacy and Sharing",
      cards: [
        {
          title: "Profile Visibility Settings",
          subtitle: "Public, Private, or Custom",
          icon: Shield,
          iconBg: "bg-slate-100",
          iconColor: "text-slate-500",
          route: "/profile/privacy"
        }
      ]
    },
    {
      title: "Review and Completion",
      cards: [
        {
          title: "Profile Review",
          subtitle: "Review your profile details",
          icon: CheckCircle,
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-500",
          route: "/profile/review"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      <main className="p-4 md:p-6 lg:p-8 md:ml-64">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">My Profile</h1>
        {sections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              {section.title}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {section.cards.map((card) => (
                <Card
                  key={card.title}
                  className="p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-105"
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
                </Card>
              ))}
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Profile;