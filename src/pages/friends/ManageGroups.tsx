import { useState } from "react"
import { Users, Plus, X } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

interface Group {
  id: string
  name: string
  memberCount: number
}

const ManageGroups = () => {
  const { toast } = useToast()
  const [newGroup, setNewGroup] = useState("")
  const [groups, setGroups] = useState<Group[]>([
    { id: "1", name: "Family", memberCount: 5 },
    { id: "2", name: "Work Friends", memberCount: 8 },
    { id: "3", name: "Book Club", memberCount: 4 },
  ])

  const handleAddGroup = () => {
    if (newGroup.trim()) {
      const group = {
        id: Date.now().toString(),
        name: newGroup.trim(),
        memberCount: 0,
      }
      setGroups([...groups, group])
      setNewGroup("")
      toast({
        title: "Group created",
        description: `${group.name} has been created successfully`,
        duration: 3000,
      })
    }
  }

  const handleDeleteGroup = (groupId: string) => {
    setGroups(groups.filter((g) => g.id !== groupId))
    toast({
      title: "Group deleted",
      description: "The group has been deleted successfully",
      duration: 3000,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Manage Groups"
          description="Create and manage your friend groups"
          icon={Users}
        />
        
        <Card className="p-6 bg-white/90 backdrop-blur-sm mt-6">
          <div className="flex gap-2">
            <Input
              placeholder="Enter new group name"
              value={newGroup}
              onChange={(e) => setNewGroup(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleAddGroup}>
              <Plus className="w-4 h-4 mr-2" />
              Add Group
            </Button>
          </div>
        </Card>

        <div className="space-y-4 mt-6">
          {groups.map((group) => (
            <Card key={group.id} className="p-4 bg-white/90 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <Badge variant="secondary">
                      {group.memberCount} members
                    </Badge>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteGroup(group.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default ManageGroups