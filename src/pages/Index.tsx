import { useState } from "react";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactCard";
import { motion } from "framer-motion";

const Index = () => {
  const [contacts] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      category: "Close Friend",
      lastInteraction: "2 days ago",
      email: "sarah.j@example.com",
      phone: "+1 234 567 8900",
      birthday: "March 15",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    },
    {
      id: "2",
      name: "Michael Chen",
      category: "Work Connection",
      lastInteraction: "1 week ago",
      email: "m.chen@example.com",
      phone: "+1 234 567 8901",
      birthday: "July 22",
      avatar: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />
      <main className="md:ml-64 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">
                Keep track of your relationships
              </p>
            </div>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Add Contact
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Index;