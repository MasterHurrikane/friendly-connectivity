import { Contact } from "@/data/dummyContacts";
import { Badge } from "@/components/ui/badge";

interface ContactBasicInfoProps {
  contact: Contact;
  friendshipDuration: string;
}

export const ContactBasicInfo = ({ contact, friendshipDuration }: ContactBasicInfoProps) => {
  return (
    <div className="flex items-start space-x-6">
      <img
        src={contact.avatar}
        alt={contact.name}
        className="w-24 h-24 rounded-full object-cover"
      />
      <div className="space-y-4 flex-1">
        <div>
          <h2 className="text-2xl font-semibold">{contact.name}</h2>
          {contact.nickname && (
            <p className="text-gray-500">"{contact.nickname}"</p>
          )}
          <div className="flex items-center space-x-2 mt-2">
            <Badge variant="secondary">{contact.category}</Badge>
            {contact.metDate && (
              <Badge variant="outline">
                Friends for {friendshipDuration}
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};