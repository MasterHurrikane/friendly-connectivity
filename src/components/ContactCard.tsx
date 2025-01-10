import { motion } from "framer-motion";
import { Heart, Phone, Mail, Calendar } from "lucide-react";

interface ContactCardProps {
  contact: {
    id: string;
    name: string;
    category: string;
    lastInteraction: string;
    email: string;
    phone: string;
    birthday: string;
    avatar: string;
  };
}

const ContactCard = ({ contact }: ContactCardProps) => {
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
            <h3 className="font-semibold text-lg">{contact.name}</h3>
            <button className="text-gray-400 hover:text-secondary transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
          <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1">
            {contact.category}
          </span>
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
          </div>
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