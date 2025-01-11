import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

interface EventHeaderImageProps {
  headerImagePreview: string | null;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemoveImage: () => void;
}

export const EventHeaderImage = ({
  headerImagePreview,
  onImageChange,
  onRemoveImage,
}: EventHeaderImageProps) => {
  return (
    <FormItem className="text-left">
      <FormLabel className="text-left">Event Header Image</FormLabel>
      <FormControl>
        <div className="space-y-4">
          <Input
            type="file"
            accept="image/*"
            onChange={onImageChange}
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
                onClick={onRemoveImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};