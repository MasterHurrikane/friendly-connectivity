import { Users } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import ContactCard from "@/components/ContactCard"

const dummyContacts = [
  {
    id: "1",
    name: "John Doe",
    category: "Friend",
    lastInteraction: "2 days ago",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    birthday: "March 15",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
  },
  {
    id: "2",
    name: "Jane Smith",
    category: "Family",
    lastInteraction: "1 week ago",
    email: "jane@example.com",
    phone: "+1 (555) 987-6543",
    birthday: "July 22",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
  },
  {
    id: "3",
    name: "Bob Wilson",
    category: "Work",
    lastInteraction: "Yesterday",
    email: "bob@example.com",
    phone: "+1 (555) 246-8135",
    birthday: "December 5",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob"
  }
]

const Contacts = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Contacts"
          description="Manage your network of connections"
          icon={Users}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {dummyContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Contacts