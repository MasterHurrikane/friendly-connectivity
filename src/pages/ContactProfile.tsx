import { useParams } from "react-router-dom";
import { Phone, Mail, Calendar, MapPin, Users, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";

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
    children: "Tommy, Sarah",
    metDate: "2022-01-01",
    city: "San Francisco",
    timezone: "PST",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span>{contact.birthday}</span>
                      </div>
                      {contact.city && (
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span>{contact.city} {contact.timezone && `(${contact.timezone})`}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      {(contact.spouse || contact.children) && (
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="font-medium">Family</span>
                          </div>
                          {contact.spouse && (
                            <p className="text-sm text-gray-600 ml-6">
                              Partner: {contact.spouse}
                            </p>
                          )}
                          {contact.children && (
                            <p className="text-sm text-gray-600 ml-6">
                              Children: {contact.children}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ContactProfile;