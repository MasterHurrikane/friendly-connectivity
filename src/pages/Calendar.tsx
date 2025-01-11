import { useState } from "react"
import { Calendar as CalendarIcon, BellPlus, CalendarPlus } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { useToast } from "@/hooks/use-toast"
import { CreateEventDialog } from "@/components/calendar/CreateEventDialog"
import { EventList } from "@/components/calendar/EventList"

export interface CalendarEvent {
  id: string
  title: string
  date: Date
  time: string
  type: "event" | "reminder" | "birthday"
  description?: string
  location?: string
  notification?: boolean
}

const CalendarPage = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: "1",
      title: "Team Meeting",
      date: new Date(),
      time: "10:00 AM",
      type: "event",
      description: "Weekly sync with the team",
      location: "Conference Room A",
      notification: true
    }
  ])
  const { toast } = useToast()

  const handleAddEvent = (newEvent: Omit<CalendarEvent, "id">) => {
    const event = {
      ...newEvent,
      id: Math.random().toString(36).substr(2, 9)
    }
    setEvents([...events, event])
    toast({
      title: "Event Created",
      description: "Your event has been added to the calendar."
    })
  }

  const handleAddReminder = () => {
    const reminder: CalendarEvent = {
      id: Math.random().toString(36).substr(2, 9),
      title: "New Reminder",
      date: date || new Date(),
      time: format(new Date(), "HH:mm"),
      type: "reminder",
      notification: true
    }
    setEvents([...events, reminder])
    toast({
      title: "Reminder Created",
      description: "Your reminder has been added to the calendar."
    })
  }

  const selectedDateEvents = events.filter(
    event => date && format(event.date, "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
  )

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Calendar"
          description="Manage your events and reminders"
          icon={CalendarIcon}
        />
        
        <div className="grid gap-6 md:grid-cols-[300px_1fr] mt-6">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>

            <div className="space-y-2">
              <CreateEventDialog onAddEvent={handleAddEvent} />
              <Button 
                variant="outline" 
                className="w-full"
                onClick={handleAddReminder}
              >
                <BellPlus className="w-4 h-4 mr-2" />
                Add Reminder
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>
                    {date ? format(date, "MMMM d, yyyy") : "Select a date"}
                  </span>
                  <Badge variant="secondary">
                    {selectedDateEvents.length} Events
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <EventList events={selectedDateEvents} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CalendarPage