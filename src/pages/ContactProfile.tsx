import { useParams } from "react-router-dom";
import { Phone, Mail, Calendar, MapPin, Users, Heart, Clock, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ContactProfile = () => {
  const { id } = useParams();
  // In a real app, you would fetch the contact data using the id
  // For now, we'll use dummy data
  const contact = {
    id: "1",
    name: "John Doe",
    nickname: "Johnny",
    category: "Friend",
    lastInteraction: "2 days ago",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "March 15",
    anniversary: "June 21",
    spouse: "Jane Doe",
    children: "Tommy (8), Sarah (6)",
    metDate: "2022-01-01",
    city: "San Francisco",
    timezone: "PST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    notes: "Met at the local tech meetup. Loves hiking and photography."
  };

  const calculateFriendshipDuration = (date: string) => {
    const start = new Date(date);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} and ${months} month${months > 1 ? 's' : ''}`;
    }
    return `${months} month${months > 1 ? 's' : ''}`;
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title={contact.name}
          description={`View and manage ${contact.name}'s profile`}
          icon={Heart}
        />
        
        <div className="max-w-4xl mx-auto space-y-6 mt-6">
          <Card>
            <CardContent className="p-6">
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
                          Friends for {calculateFriendshipDuration(contact.metDate)}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />
              
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ContactProfile;