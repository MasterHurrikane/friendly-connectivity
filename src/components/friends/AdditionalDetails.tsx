import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface AdditionalDetailsProps {
  form: UseFormReturn<any>;
}

export const AdditionalDetails = ({ form }: AdditionalDetailsProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/10">
      <h3 className="text-lg font-semibold mb-4">Additional Details</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="timezone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timezone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter timezone" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="favoriteColor"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Favorite Color</FormLabel>
                <FormControl>
                  <Input placeholder="Enter favorite color" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastMeetup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Meetup</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Add any additional notes about your friend"
                  className="bg-white/50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};