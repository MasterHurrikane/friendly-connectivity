import { Calendar } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EventRSVP = () => {
  const { id } = useParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission
    console.log("RSVP submitted");
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="RSVP"
          description="Let us know if you can make it"
          icon={Calendar}
        />
        
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Your Response</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <RadioGroup defaultValue="attending">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="attending" id="attending" />
                  <Label htmlFor="attending">Yes, I'll be there!</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="maybe" id="maybe" />
                  <Label htmlFor="maybe">Maybe</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-attending" id="not-attending" />
                  <Label htmlFor="not-attending">No, I can't make it</Label>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add a message to your response..."
                />
              </div>

              <Button type="submit">Send RSVP</Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default EventRSVP;