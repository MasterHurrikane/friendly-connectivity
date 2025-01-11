import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Users } from "lucide-react";
import { ProfileSection } from "./ProfileSection";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const RelationshipSection = () => {
  const { toast } = useToast();
  const [customGroups, setCustomGroups] = useState<string[]>([]);
  const [newGroup, setNewGroup] = useState("");

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      setCustomGroups([...customGroups, newGroup.trim()]);
      setNewGroup("");
      toast({
        title: "Group added!",
        description: `"${newGroup}" has been added to your custom groups.`,
        duration: 3000,
      });
    }
  };

  const handleRemoveGroup = (group: string) => {
    setCustomGroups(customGroups.filter(g => g !== group));
    toast({
      title: "Group removed",
      description: `"${group}" has been removed from your custom groups.`,
      duration: 3000,
    });
  };

  return (
    <ProfileSection
      title="Relationship Details"
      description="Your connections and preferences"
      icon={Heart}
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <Label>Default Groups</Label>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">Family</Button>
            <Button variant="outline">Friends</Button>
            <Button variant="outline">Colleagues</Button>
            <Button variant="outline">Business</Button>
          </div>
        </div>

        <div className="space-y-4">
          <Label>Custom Groups</Label>
          <div className="flex gap-2">
            <Input
              placeholder="Add a custom group (e.g., Book Club)"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleAddGroup}
              variant="secondary"
              className="flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              Add Group
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {customGroups.map((group) => (
              <Badge
                key={group}
                variant="secondary"
                className="px-3 py-1 cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                onClick={() => handleRemoveGroup(group)}
              >
                {group} ×
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </ProfileSection>
  );
};