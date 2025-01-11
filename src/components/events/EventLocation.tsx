import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Globe2, MapPin } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { EventFormData } from "@/types/events";

interface EventLocationProps {
  form: UseFormReturn<EventFormData>;
  isVirtual: boolean;
  setIsVirtual: (value: boolean) => void;
}

export const EventLocation = ({ form, isVirtual, setIsVirtual }: EventLocationProps) => {
  return (
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
          <FormItem className="text-left">
            <FormLabel className="text-sm font-normal">
              {isVirtual ? "Meeting Link" : "Location"}
            </FormLabel>
            <FormControl>
              <Input 
                placeholder={
                  isVirtual 
                    ? "Enter meeting link" 
                    : "Enter physical location"
                } 
                className="text-foreground/70"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};