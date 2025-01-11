import { motion } from "framer-motion";
import { Heart, Phone, Mail, Calendar, MapPin, Clock, Users } from "lucide-react";

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
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
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
            <button className="text-gray-400 hover:text-secondary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
            {contact.category}
          </span>
          {contact.metDate && (
            <p className="text-xs text-gray-500 mt-1">
              {calculateFriendshipDuration(contact.metDate)}
            </p>
          )}
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
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Last interaction: {contact.lastInteraction}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactCard;