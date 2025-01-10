import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  path: string;
}

export const DashboardCard = ({ title, description, icon: Icon, path }: DashboardCardProps) => {
  return (
    <Link to={path}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="p-6 bg-card rounded-lg shadow-md hover:shadow-lg transition-all"
      >
        <div className="flex items-center space-x-4">
          <Icon className="w-8 h-8 text-primary" />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};