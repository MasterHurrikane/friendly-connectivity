import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BasicFriendInfoProps {
  form: UseFormReturn<any>;
}

export const BasicFriendInfo = ({ form }: BasicFriendInfoProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/10">
      <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter friend's name" {...field} className="bg-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter phone number" {...field} className="bg-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger className="bg-white/50">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
                  <SelectItem value="colleague">Colleague</SelectItem>
                  <SelectItem value="acquaintance">Acquaintance</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};