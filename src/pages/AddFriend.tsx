import { UserPlus } from "lucide-react";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFriend = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement friend creation logic
      toast({
        title: "Friend added",
        description: "Your new friend has been successfully added to your network.",
        duration: 3000,
      });
      navigate("/friends");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error adding your friend. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Add Friend"
          description="Add a new friend to your network"
          icon={UserPlus}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Core Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nickname">Nickname</Label>
                  <Input id="nickname" placeholder="Enter nickname" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Input id="birthday" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="anniversary">Anniversary</Label>
                  <Input id="anniversary" type="date" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="spouse">Spouse/Partner's Name</Label>
                  <Input id="spouse" placeholder="Enter spouse's name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children">Children</Label>
                  <Input id="children" placeholder="Names and ages" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Relationship Details</h3>
              <div className="space-y-2">
                <Label>Relationship Type</Label>
                <RadioGroup defaultValue="friend" className="flex flex-wrap gap-4">
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
                <Input id="metDate" type="date" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="group">Group</Label>
                <Input id="group" placeholder="e.g., Book Club, Work Friends" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City/Location</Label>
                  <Input id="city" placeholder="Enter city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Time Zone</Label>
                  <Input id="timezone" placeholder="e.g., EST, PST" />
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
                  className="min-h-[100px]"
                />
              </div>
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Adding Friend..." : "Add Friend"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddFriend;