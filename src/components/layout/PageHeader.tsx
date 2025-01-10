import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const PageHeader = ({ title, description, icon: Icon }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center space-x-4">
        <Icon className="w-10 h-10 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};