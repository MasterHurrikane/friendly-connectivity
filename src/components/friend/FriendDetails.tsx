import { Friend } from "@/data/dummyFriends";
import { Phone, Mail, MapPin, Users, Calendar, Clock, Tag } from "lucide-react";

interface FriendDetailsProps {
  friend: Friend;
}

export const FriendDetails = ({ friend }: FriendDetailsProps) => {
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
            <span>{friend.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span>{friend.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span>{friend.city} {friend.timezone && `(${friend.timezone})`}</span>
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
            <span>Birthday: {friend.birthday}</span>
          </div>
          {friend.anniversary && (
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>Anniversary: {friend.anniversary}</span>
            </div>
          )}
          {friend.metDate && (
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span>Met on: {new Date(friend.metDate).toLocaleDateString()}</span>
            </div>
          )}
        </div>
      </div>

      {(friend.spouse || friend.children) && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Users className="w-5 h-5" />
            Family
          </h3>
          <div className="space-y-3">
            {friend.spouse && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Partner: {friend.spouse}</span>
              </div>
            )}
            {friend.children && (
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-gray-500" />
                <span>Children: {friend.children}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {friend.notes && (
        <div className="space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Notes
          </h3>
          <p className="text-gray-600">{friend.notes}</p>
        </div>
      )}
    </div>
  );
};