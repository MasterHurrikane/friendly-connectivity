import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { EventFormData } from "@/types/events";

interface EventBasicInfoProps {
  form: UseFormReturn<EventFormData>;
}

export const EventBasicInfo = ({ form }: EventBasicInfoProps) => {
  return (
    <>
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="text-left">
            <FormLabel className="text-sm font-normal">Event Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="Enter event name" 
                className="text-foreground/70"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="text-left">
            <FormLabel className="text-sm font-normal">Description</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="What's this event about?"
                className="text-foreground/70"
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
            <FormItem className="text-left">
              <FormLabel className="text-sm font-normal">Date</FormLabel>
              <FormControl>
                <Input 
                  type="date" 
                  className="text-foreground/70"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem className="text-left">
              <FormLabel className="text-sm font-normal">Time</FormLabel>
              <FormControl>
                <Input 
                  type="time" 
                  className="text-foreground/70"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
};