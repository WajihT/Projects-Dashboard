import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Eye, Users, UserPlus, UserCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
    title: string;
    value: string | number;
    change: string;
    trend: "up" | "down";
    icon: React.ReactNode;
}

function MetricCard({ title, value, change, trend, icon }: MetricCardProps) {
    return (
        <Card className="gradient-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>
                <div className="p-2 rounded-full bg-primary/10">
                    {icon}
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                    {typeof value === 'number' ? value.toLocaleString() : value}
                </div>
                <div className="flex items-center gap-1">
                    {trend === "up" ? (
                        <TrendingUp className="h-3 w-3 text-green-500" />
                    ) : (
                        <TrendingDown className="h-3 w-3 text-red-500" />
                    )}
                    <span className={cn(
                        "text-xs font-medium",
                        trend === "up" ? "text-green-500" : "text-red-500"
                    )}>
            {change}
          </span>
                </div>
            </CardContent>
        </Card>
    );
}

interface MetricsCardsProps {
    metrics: {
        views: { value: number; change: string; trend: "up" | "down" };
        visits: { value: number; change: string; trend: "up" | "down" };
        newUsers: { value: number; change: string; trend: "up" | "down" };
        activeUsers: { value: number; change: string; trend: "up" | "down" };
    };
}

export function MetricsCards({ metrics }: MetricsCardsProps) {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
                title="Views"
                value={metrics.views.value}
                change={metrics.views.change}
                trend={metrics.views.trend}
                icon={<Eye className="h-4 w-4 text-primary" />}
            />
            <MetricCard
                title="Visits"
                value={metrics.visits.value}
                change={metrics.visits.change}
                trend={metrics.visits.trend}
                icon={<Users className="h-4 w-4 text-primary" />}
            />
            <MetricCard
                title="New Users"
                value={metrics.newUsers.value}
                change={metrics.newUsers.change}
                trend={metrics.newUsers.trend}
                icon={<UserPlus className="h-4 w-4 text-primary" />}
            />
            <MetricCard
                title="Active Users"
                value={metrics.activeUsers.value}
                change={metrics.activeUsers.change}
                trend={metrics.activeUsers.trend}
                icon={<UserCheck className="h-4 w-4 text-primary" />}
            />
        </div>
    );
}
