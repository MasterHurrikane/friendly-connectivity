import { UserPlus } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/components/ui/use-toast"

const AddContact = () => {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Friend added",
      description: "Your new friend has been successfully added to your network.",
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Add Friend"
          description="Add a new friend to your network"
          icon={UserPlus}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Core Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname">Nickname</Label>
                  <Input id="nickname" placeholder="Enter nickname" className="bg-white" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input id="birthday" type="date" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anniversary">Anniversary</Label>
                  <Input id="anniversary" type="date" className="bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="spouse">Spouse/Partner's Name</Label>
                  <Input id="spouse" placeholder="Enter spouse's name" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Input id="children" placeholder="Names and ages" className="bg-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Relationship Details</h3>
              <div className="space-y-2">
                <Label>Relationship Type</Label>
                <RadioGroup defaultValue="friend" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="friend" id="friend" />
                    <Label htmlFor="friend">Friend</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="family" id="family" />
                    <Label htmlFor="family">Family</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="acquaintance" id="acquaintance" />
                    <Label htmlFor="acquaintance">Acquaintance</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="metDate">When did you meet?</Label>
                <Input id="metDate" type="date" className="bg-white" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="group">Group</Label>
                <Input id="group" placeholder="e.g., Book Club, Work Friends" className="bg-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" className="bg-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City/Location</Label>
                  <Input id="city" placeholder="Enter city" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <Input id="timezone" placeholder="e.g., EST, PST" className="bg-white" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Notes</h3>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea 
                  id="notes" 
                  placeholder="Add any additional notes about your friend..."
                  className="bg-white"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Add Friend
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddContact;