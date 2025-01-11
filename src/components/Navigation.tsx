import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Home, UserPlus, Calendar, UserCircle, Activity, Bell } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navItems = [
    { path: "/", icon: Home, label: "Dashboard" },
    { path: "/profile", icon: UserCircle, label: "My Profile" },
    { path: "/friends", icon: Users, label: "Friends" },
    { path: "/activity", icon: Activity, label: "Activity" },
    { path: "/notifications", icon: Bell, label: "Notifications" },
    { path: "/events/create", icon: Calendar, label: "Create Event" },
    { path: "/add-friend", icon: UserPlus, label: "Add Friend" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 px-4 py-2 md:top-0 md:left-0 md:h-screen md:w-64 md:border-r md:border-t-0">
      <div className="flex justify-around md:flex-col md:items-start md:space-y-6 md:mt-8">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="relative group"
            onMouseEnter={() => setIsHovered(item.path)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors hover:bg-gray-100">
              <item.icon
                className={`w-6 h-6 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-gray-600"
                }`}
              />
              <span className="hidden md:block text-sm font-medium">
                {item.label}
              </span>
            </div>
            {isHovered === item.path && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap md:hidden"
              >
                {item.label}
              </motion.div>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;