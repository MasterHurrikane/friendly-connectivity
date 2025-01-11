import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { BasicFriendInfo } from "@/components/friends/BasicFriendInfo";
import { PersonalDetails } from "@/components/friends/PersonalDetails";
import { AdditionalDetails } from "@/components/friends/AdditionalDetails";

interface AddFriendForm {
  name: string;
  email: string;
  phone: string;
  category: string;
  nickname?: string;
  birthday?: string;
  anniversary?: string;
  spouse?: string;
  children?: string;
  city?: string;
  timezone?: string;
  favoriteColor?: string;
  lastMeetup?: string;
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
        
        <div className="max-w-3xl mx-auto mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <BasicFriendInfo form={form} />
              <PersonalDetails form={form} />
              <AdditionalDetails form={form} />

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate(-1)}
                  className="bg-white/95"
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