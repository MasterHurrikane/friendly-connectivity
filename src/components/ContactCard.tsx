import { motion } from "framer-motion";
import { Heart, Phone, Mail, Calendar, MapPin, Clock, Users, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    nickname?: string;
    category: string;
    lastInteraction: string;
    email: string;
    phone: string;
    birthday: string;
    anniversary?: string;
    spouse?: string;
    children?: string;
    metDate?: string;
    city?: string;
    timezone?: string;
    avatar: string;
  };
}

const ContactCard = ({ contact }: ContactCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const calculateFriendshipDuration = (metDate: string) => {
    if (!metDate) return "";
    const start = new Date(metDate);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `Friends for ${diffDays} days`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">{contact.name}</h3>
              {contact.nickname && (
                <p className="text-sm text-gray-500">"{contact.nickname}"</p>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="text-gray-400 hover:text-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle favorite action
                }}
              >
                <Heart className="w-5 h-5" />
              </button>
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-gray-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </div>
          </div>
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
            {contact.category}
          </span>
          {contact.metDate && (
            <p className="text-xs text-gray-500 mt-1">
              {calculateFriendshipDuration(contact.metDate)}
            </p>
          )}
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="mt-4 space-y-2 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{contact.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{contact.birthday}</span>
          </div>
          {contact.city && (
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>{contact.city}</span>
              {contact.timezone && <span className="text-gray-400">({contact.timezone})</span>}
            </div>
          )}
        </div>

        {(contact.spouse || contact.children) && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="space-y-1">
              {contact.spouse && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Partner:</span> {contact.spouse}
                </p>
              )}
              {contact.children && (
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Children:</span> {contact.children}
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            Last interaction: {contact.lastInteraction}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;