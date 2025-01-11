import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Form } from "@/components/ui/form";
import { EventHeaderImage } from "@/components/events/EventHeaderImage";
import { EventBasicInfo } from "@/components/events/EventBasicInfo";
import { EventLocation } from "@/components/events/EventLocation";
import { EventVisibility } from "@/components/events/EventVisibility";
import { EventPhotosUpload } from "@/components/events/EventPhotosUpload";
import { EventFormData } from "@/types/events";

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
    console.log("Event data:", data);
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
              <EventHeaderImage
                headerImagePreview={headerImagePreview}
                onImageChange={handleHeaderImageChange}
                onRemoveImage={removeHeaderImage}
              />

              <EventBasicInfo form={form} />

              <EventLocation
                form={form}
                isVirtual={isVirtual}
                setIsVirtual={setIsVirtual}
              />

              <EventVisibility form={form} />

              <EventPhotosUpload
                eventPhotosPreviews={eventPhotosPreviews}
                onPhotosChange={handleEventPhotosChange}
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