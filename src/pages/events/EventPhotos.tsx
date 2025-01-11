import { ImageIcon } from "lucide-react";
import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EventPhotos = () => {
  const { id } = useParams();

  // This would typically come from an API
  const photos = [
    { id: 1, url: "https://source.unsplash.com/random/800x600?party", caption: "Welcome drinks" },
    { id: 2, url: "https://source.unsplash.com/random/800x600?celebration", caption: "Group photo" },
    { id: 3, url: "https://source.unsplash.com/random/800x600?event", caption: "Dance floor" },
    { id: 4, url: "https://source.unsplash.com/random/800x600?party-food", caption: "Buffet setup" },
  ];

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Event Photos"
          description="Captured moments from the event"
          icon={ImageIcon}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {photos.map((photo) => (
            <Card key={photo.id}>
              <CardContent className="p-2">
                <AspectRatio ratio={4/3}>
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="rounded-md object-cover w-full h-full"
                  />
                </AspectRatio>
                <p className="mt-2 text-sm text-center text-muted-foreground">
                  {photo.caption}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default EventPhotos;