import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProfileSectionProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children?: React.ReactNode;
}

export const ProfileSection = ({ title, description, icon: Icon, children }: ProfileSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 rounded-lg shadow-sm border border-primary/10 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-start space-x-4 mb-4">
        <Icon className="w-8 h-8 text-primary mt-1" />
        <div className="text-left">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </motion.section>
  );
};