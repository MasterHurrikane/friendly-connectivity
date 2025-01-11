import { Activity, Calendar, MessageCircle, Image, Heart } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { dummyFriends } from "@/data/dummyFriends";

interface ActivityItem {
  id: string;
  type: "milestone" | "event" | "memory";
  content: string;
  date: string;
  friendId: string;
}

const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "milestone",
    content: "Birthday coming up",
    date: "2024-03-15",
    friendId: "1"
  },
  {
    id: "2",
    type: "event",
    content: "Added to Family group",
    date: "2024-03-10",
    friendId: "2"
  },
  {
    id: "3",
    type: "memory",
    content: "Shared new photos",
    date: "2024-03-08",
    friendId: "3"
  }
];

const ActivityFeed = () => {
  const getIconForType = (type: ActivityItem["type"]) => {
    switch (type) {
      case "milestone":
        return Calendar;
      case "event":
        return MessageCircle;
      case "memory":
        return Image;
      default:
        return Activity;
    }
  };

  const getFriendName = (friendId: string) => {
    return dummyFriends.find(friend => friend.id === friendId)?.name || "Unknown";
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Activity Feed"
          description="Stay updated with your friends' activities and milestones"
          icon={Activity}
        />

        <div className="mt-6 space-y-4">
          {recentActivity.map((activity, index) => {
            const IconComponent = getIconForType(activity.type);
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {getFriendName(activity.friendId)}
                    </p>
                    <p className="text-sm text-gray-600">{activity.content}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.date).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-accent rounded-full transition-colors">
                    <Heart className="w-5 h-5 text-gray-400 hover:text-secondary" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default ActivityFeed;