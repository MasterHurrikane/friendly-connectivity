import { motion } from "framer-motion";

interface ContactAvatarProps {
  avatar: string;
  name: string;
}

export const ContactAvatar = ({ avatar, name }: ContactAvatarProps) => {
  return (
    <div className="relative">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <span className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-white" />
    </div>
  );
};