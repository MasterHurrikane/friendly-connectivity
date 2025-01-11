import { LayoutDashboard, Users, Calendar, Settings, Activity, MessageSquare, PieChart, HelpCircle } from "lucide-react";
import { DashboardCard } from "@/components/dashboard/DashboardCard";
import { PageHeader } from "@/components/layout/PageHeader";
import Navigation from "@/components/Navigation";

const dashboardCards = [
  {
    title: "Activity Feed",
    description: "Track your connections and interactions",
    icon: Activity,
    path: "/activity"
  },
  {
    title: "Contacts",
    description: "Manage your network",
    icon: Users,
    path: "/contacts"
  },
  {
    title: "Calendar",
    description: "Schedule and manage events",
    icon: Calendar,
    path: "/calendar"
  },
  {
    title: "Messages",
    description: "Your conversations",
    icon: MessageSquare,
    path: "/messages"
  },
  {
    title: "Analytics",
    description: "Insights and statistics",
    icon: PieChart,
    path: "/analytics"
  },
  {
    title: "Settings",
    description: "Customize your experience",
    icon: Settings,
    path: "/settings"
  },
  {
    title: "Help & Support",
    description: "Get assistance and resources",
    icon: HelpCircle,
    path: "/help"
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Dashboard"
          description="Welcome to your personal relationship manager"
          icon={LayoutDashboard}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;