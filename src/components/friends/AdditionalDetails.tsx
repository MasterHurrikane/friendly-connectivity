import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";

interface AdditionalDetailsProps {
  form: UseFormReturn<any>;
}

export const AdditionalDetails = ({ form }: AdditionalDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Additional Details</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-left">City</FormLabel>
                <FormControl>
                  <Input placeholder="Enter city" {...field} />
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
                <FormLabel className="text-left">Timezone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter timezone" {...field} />
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
                <FormLabel className="text-left">Favorite Color</FormLabel>
                <FormControl>
                  <Input placeholder="Enter favorite color" {...field} />
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
                <FormLabel className="text-left">Last Meetup</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
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
              <FormLabel className="text-left">Notes</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Add any additional notes about your friend"
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