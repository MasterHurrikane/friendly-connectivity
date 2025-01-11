import { Calendar as CalendarIcon, Clock } from "lucide-react"
import Navigation from "@/components/Navigation"
import { PageHeader } from "@/components/layout/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const dummyEvents = [
  {
    id: 1,
    title: "Coffee with John",
    date: "2024-03-20",
    time: "09:00 AM",
    type: "Social"
  },
  {
    id: 2,
    title: "Jane's Birthday Party",
    date: "2024-03-22",
    time: "07:00 PM",
    type: "Birthday"
  },
  {
    id: 3,
    title: "Team Meeting",
    date: "2024-03-21",
    time: "02:00 PM",
    type: "Work"
  }
]

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Calendar"
          description="Manage your events and reminders"
          icon={CalendarIcon}
        />
        
        <div className="grid gap-6 mt-6">
          {dummyEvents.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{event.title}</span>
                  <span className="text-sm text-muted-foreground">{event.type}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Calendar;