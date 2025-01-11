import { BarChart3, LineChart, PieChart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const Analytics = () => {
  const { data: friendMetrics } = useQuery({
    queryKey: ["friendMetrics"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("friends")
        .select("status, relationship_type")
        .eq("user_id", (await supabase.auth.getUser()).data.user?.id);

      if (error) throw error;

      // Process data for visualization
      const statusCounts = data.reduce((acc: any, curr) => {
        acc[curr.status] = (acc[curr.status] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(statusCounts).map(([name, value]) => ({
        name,
        value,
      }));
    },
  });

  const { data: interactionMetrics } = useQuery({
    queryKey: ["interactionMetrics"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("friend_interactions")
        .select("interaction_type, created_at")
        .order("created_at", { ascending: true });

      if (error) throw error;

      // Process data for visualization
      const interactionsByMonth = data.reduce((acc: any, curr) => {
        const month = new Date(curr.created_at).toLocaleString("default", {
          month: "short",
        });
        acc[month] = (acc[month] || 0) + 1;
        return acc;
      }, {});

      return Object.entries(interactionsByMonth).map(([month, count]) => ({
        month,
        interactions: count,
      }));
    },
  });

  return (
    <div className="min-h-screen bg-gradient-page">
      <Navigation />
      <main className="p-6 md:ml-64">
        <PageHeader
          title="Analytics"
          description="View insights about your connections and interactions"
          icon={BarChart3}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Friend Status Distribution */}
          <div className="bg-card p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Friend Status Distribution</h3>
            <ChartContainer className="h-[300px]" config={{}}>
              <BarChart data={friendMetrics || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend content={<ChartLegendContent />} />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Interaction Trends */}
          <div className="bg-card p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Monthly Interactions</h3>
            <ChartContainer className="h-[300px]" config={{}}>
              <BarChart data={interactionMetrics || []}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltipContent />} />
                <Legend content={<ChartLegendContent />} />
                <Bar dataKey="interactions" fill="#10B981" />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;