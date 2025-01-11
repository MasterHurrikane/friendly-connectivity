import { useParams } from "react-router-dom";
import { Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ContactBasicInfo } from "@/components/contact/ContactBasicInfo";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { dummyContacts } from "@/data/dummyContacts";

const ContactProfile = () => {
  const { id } = useParams();
  const contact = dummyContacts.find(c => c.id === id);

  if (!contact) {
    return (
      <div className="min-h-screen bg-gradient-page">
        <Navigation />
        <main className="p-6 md:ml-64">
          <h1>Contact not found</h1>
        </main>
      </div>
    );
  }

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
              <ContactBasicInfo 
                contact={contact} 
                friendshipDuration={calculateFriendshipDuration(contact.metDate)} 
              />
              <Separator className="my-6" />
              <ContactDetails contact={contact} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ContactProfile;