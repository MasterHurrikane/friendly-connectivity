import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ContactAvatar } from "./contact/ContactAvatar";
import { ContactHeader } from "./contact/ContactHeader";

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
  const navigate = useNavigate();

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Handle favorite action
  };

  const handleCardClick = () => {
    navigate(`/contacts/${contact.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex items-start space-x-4">
        <ContactAvatar avatar={contact.avatar} name={contact.name} />
        <div className="flex-1">
          <ContactHeader
            name={contact.name}
            nickname={contact.nickname}
            category={contact.category}
            metDate={contact.metDate}
            onFavorite={handleFavorite}
          />
          <p className="text-sm text-gray-500 mt-4">
            Last interaction: {contact.lastInteraction}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
