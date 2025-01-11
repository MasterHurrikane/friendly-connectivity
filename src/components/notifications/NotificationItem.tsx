import { motion } from "framer-motion";
import { Bell, Calendar, Users, Heart, MessageSquare, Settings, AlertTriangle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type NotificationType = 
  | "friend_request" 
  | "event" 
  | "activity" 
  | "system" 
  | "priority" 
  | "group";

interface NotificationItemProps {
  type: NotificationType;
  title: string;
  message: string;
  time: string;
  read?: boolean;
  priority?: boolean;
}

export const NotificationItem = ({ 
  type, 
  title, 
  message, 
  time, 
  read = false,
  priority = false 
}: NotificationItemProps) => {
  const getIcon = () => {
    switch (type) {
      case "friend_request":
        return Users;
      case "event":
        return Calendar;
      case "activity":
        return Heart;
      case "system":
        return Settings;
      case "priority":
        return AlertTriangle;
      case "group":
        return MessageSquare;
      default:
        return Bell;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="mb-4"
    >
      <Card className={`p-4 ${read ? 'bg-card/50' : 'bg-card shadow-lg'}`}>
        <div className="flex items-start gap-4">
          <div className={`p-2 rounded-full ${priority ? 'bg-warning/20' : 'bg-primary/20'}`}>
            <Icon className={`w-5 h-5 ${priority ? 'text-warning' : 'text-primary'}`} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-sm">{title}</h4>
              <div className="flex items-center gap-2">
                {priority && (
                  <Badge variant="warning" className="text-xs">
                    Priority
                  </Badge>
                )}
                {!read && (
                  <Badge variant="secondary" className="text-xs">
                    New
                  </Badge>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{message}</p>
            <span className="text-xs text-muted-foreground mt-2 block">{time}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};