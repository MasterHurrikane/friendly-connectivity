import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, Image, Globe2, Lock, Users, Upload, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface EventFormData {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  visibility: "public" | "private" | "invite-only";
  headerImage?: File;
  eventPhotos?: FileList;
}

const CreateEvent = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isVirtual, setIsVirtual] = useState(false);
  const [headerImagePreview, setHeaderImagePreview] = useState<string | null>(null);
  const [eventPhotosPreviews, setEventPhotosPreviews] = useState<string[]>([]);
  
  const form = useForm<EventFormData>({
    defaultValues: {
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      visibility: "private",
    },
  });

  const handleHeaderImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Header image must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeaderImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      form.setValue("headerImage", file);
    }
  };

  const handleEventPhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const previews: string[] = [];
      Array.from(files).forEach(file => {
        if (file.size > 5 * 1024 * 1024) {
          toast({
            title: "File too large",
            description: `${file.name} is too large. Each photo must be less than 5MB`,
            variant: "destructive",
          });
          return;
        }
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result as string);
          setEventPhotosPreviews([...previews]);
        };
        reader.readAsDataURL(file);
      });
      form.setValue("eventPhotos", files);
    }
  };

  const removeHeaderImage = () => {
    setHeaderImagePreview(null);
    form.setValue("headerImage", undefined);
  };

  const onSubmit = (data: EventFormData) => {
    // Here you would typically send the data to your backend
    console.log("Event data:", data);
    // Navigate to invite friends page (in a real app, you'd use the created event's ID)
    navigate("/events/new/invite");
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Create Event"
          description="Plan your next gathering"
          icon={Calendar}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="headerImage"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Event Header Image</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={handleHeaderImageChange}
                          {...field}
                        />
                        {headerImagePreview && (
                          <div className="relative">
                            <img
                              src={headerImagePreview}
                              alt="Header preview"
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2"
                              onClick={removeHeaderImage}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter event name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What's this event about?"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant={!isVirtual ? "default" : "outline"}
                    onClick={() => setIsVirtual(false)}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Physical Location
                  </Button>
                  <Button
                    type="button"
                    variant={isVirtual ? "default" : "outline"}
                    onClick={() => setIsVirtual(true)}
                  >
                    <Globe2 className="w-4 h-4 mr-2" />
                    Virtual Event
                  </Button>
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {isVirtual ? "Meeting Link" : "Location"}
                      </FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={
                            isVirtual 
                              ? "Enter meeting link" 
                              : "Enter physical location"
                          } 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="visibility"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Visibility</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select visibility" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="public">
                          <div className="flex items-center gap-2">
                            <Globe2 className="w-4 h-4" />
                            <span>Public</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="private">
                          <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4" />
                            <span>Private</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="invite-only">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Invite Only</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventPhotos"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Additional Event Photos</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        <Input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleEventPhotosChange}
                          {...field}
                        />
                        {eventPhotosPreviews.length > 0 && (
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {eventPhotosPreviews.map((preview, index) => (
                              <div key={index} className="relative aspect-square">
                                <img
                                  src={preview}
                                  alt={`Event photo ${index + 1}`}
                                  className="w-full h-full object-cover rounded-lg"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button variant="outline" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Continue to Invite Friends
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default CreateEvent;
