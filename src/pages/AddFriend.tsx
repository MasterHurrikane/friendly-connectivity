import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AddFriendForm {
  name: string;
  email: string;
  phone: string;
  category: string;
  notes: string;
}

const AddFriend = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<AddFriendForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      category: "friend",
      notes: "",
    },
  });

  const onSubmit = (data: AddFriendForm) => {
    console.log("Friend data:", data);
    toast({
      title: "Friend Added",
      description: "Your friend has been successfully added.",
    });
    navigate("/friends");
  };

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Add Friend Details"
          description="Add information about your new friend"
          icon={UserPlus}
        />
        
        <div className="max-w-2xl mx-auto mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-left">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter friend's name" {...field} className="bg-white" />
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
                    <FormItem className="text-left">
                      <FormLabel className="text-left">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter email" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="text-left">
                      <FormLabel className="text-left">Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter phone number" {...field} className="bg-white" />
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
                  <FormItem className="text-left">
                    <FormLabel className="text-left">Category</FormLabel>
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

              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem className="text-left">
                    <FormLabel className="text-left">Notes</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Add any additional notes about your friend"
                        className="bg-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="bg-white"
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Add Friend
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </main>
    </div>
  );
};

export default AddFriend;