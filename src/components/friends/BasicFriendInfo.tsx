import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BasicFriendInfoProps {
  form: UseFormReturn<any>;
}

export const BasicFriendInfo = ({ form }: BasicFriendInfoProps) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Basic Information</h3>
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-left block">Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter friend's name" {...field} />
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
                <FormLabel className="text-left block">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter email" {...field} />
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
                <FormLabel className="text-left block">Phone Number</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Enter phone number" {...field} />
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
              <FormLabel className="text-left block">Category</FormLabel>
              <Select
                defaultValue={field.value}
                onValueChange={field.onChange}
              >
                <FormControl>
                  <SelectTrigger className="bg-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
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