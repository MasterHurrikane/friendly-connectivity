import { Globe2, Lock, Users } from "lucide-react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { EventFormData } from "@/types/events";

interface EventVisibilityProps {
  form: UseFormReturn<EventFormData>;
}

export const EventVisibility = ({ form }: EventVisibilityProps) => {
  return (
    <FormField
      control={form.control}
      name="visibility"
      render={({ field }) => (
        <FormItem className="text-left">
          <FormLabel className="text-left">Event Visibility</FormLabel>
          <Select 
            onValueChange={field.onChange} 
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="Select visibility" />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="bg-white">
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
  );
};