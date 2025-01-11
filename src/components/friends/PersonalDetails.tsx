import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface PersonalDetailsProps {
  form: UseFormReturn<any>;
}

export const PersonalDetails = ({ form }: PersonalDetailsProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Personal Details</h3>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left">Nickname</FormLabel>
              <FormControl>
                <Input placeholder="Enter nickname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-left">Birthday</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anniversary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-left">Anniversary</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="spouse"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-left">Spouse/Partner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter spouse/partner name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-left">Children</FormLabel>
                <FormControl>
                  <Input placeholder="Enter children's names" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};