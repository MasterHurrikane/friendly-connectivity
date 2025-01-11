import { Input } from "@/components/ui/input";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface EventPhotosUploadProps {
  eventPhotosPreviews: string[];
  onPhotosChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const EventPhotosUpload = ({
  eventPhotosPreviews,
  onPhotosChange,
}: EventPhotosUploadProps) => {
  return (
    <FormItem>
      <FormLabel>Additional Event Photos</FormLabel>
      <FormControl>
        <div className="space-y-4">
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={onPhotosChange}
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
  );
};