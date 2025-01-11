import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface PersonalDetailsProps {
  form: UseFormReturn<any>;
}

export const PersonalDetails = ({ form }: PersonalDetailsProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/10">
      <h3 className="text-lg font-semibold mb-4">Personal Details</h3>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nickname</FormLabel>
              <FormControl>
                <Input placeholder="Enter nickname" {...field} className="bg-white/50" />
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
                <FormLabel>Birthday</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-white/50" />
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
                <FormLabel>Anniversary</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="bg-white/50" />
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
                <FormLabel>Spouse/Partner Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter spouse/partner name" {...field} className="bg-white/50" />
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
                <FormLabel>Children</FormLabel>
                <FormControl>
                  <Input placeholder="Enter children's names" {...field} className="bg-white/50" />
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