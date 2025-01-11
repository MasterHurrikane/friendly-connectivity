import { Import, Phone, Mail, Share2 } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

const ImportContacts = () => {
  const { toast } = useToast()

  const handleImport = (source: string) => {
    toast({
      title: "Import initiated",
      description: `Importing contacts from ${source}...`,
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Import Contacts"
          description="Import friends from various sources"
          icon={Import}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Card className="p-6 bg-white/90 backdrop-blur-sm">
            <Phone className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Phone Contacts</h3>
            <p className="text-sm text-gray-600 mb-4">
              Import friends from your phone contacts
            </p>
            <Button
              onClick={() => handleImport("Phone Contacts")}
              className="w-full"
            >
              Import from Phone
            </Button>
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-sm">
            <Mail className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email Contacts</h3>
            <p className="text-sm text-gray-600 mb-4">
              Import friends from your email contacts
            </p>
            <Button
              onClick={() => handleImport("Email")}
              className="w-full"
            >
              Import from Email
            </Button>
          </Card>

          <Card className="p-6 bg-white/90 backdrop-blur-sm">
            <Share2 className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <p className="text-sm text-gray-600 mb-4">
              Import friends from your social networks
            </p>
            <Button
              onClick={() => handleImport("Social Media")}
              className="w-full"
            >
              Connect Social Media
            </Button>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default ImportContacts