import { Contact } from "@/data/dummyContacts";
import { Phone, Mail, MapPin, Users, Calendar, Clock, Tag } from "lucide-react";

interface ContactDetailsProps {
  contact: Contact;
}

export const ContactDetails = ({ contact }: ContactDetailsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Users className="w-5 h-5" />
          Contact Information
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-gray-500" />
            <span>{contact.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>{contact.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{contact.city} {contact.timezone && `(${contact.timezone})`}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-lg flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Important Dates
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>Birthday: {contact.birthday}</span>
          </div>
          {contact.anniversary && (
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Anniversary: {contact.anniversary}</span>
            </div>
          )}
          {contact.metDate && (
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>Met on: {new Date(contact.metDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>

      {(contact.spouse || contact.children) && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Users className="w-5 h-5" />
            Family
          </h3>
          <div className="space-y-3">
            {contact.spouse && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Partner: {contact.spouse}</span>
              </div>
            )}
            {contact.children && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Children: {contact.children}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {contact.notes && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Notes
          </h3>
          <p className="text-gray-600">{contact.notes}</p>
        </div>
      )}
    </div>
  );
};