"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

interface AnalyticsChartProps {
    data: Array<{
        month: string;
        totalUsers: number;
        totalProjects: number;
        operatingStatus: number;
    }>;
}

export function AnalyticsChart({ data }: AnalyticsChartProps) {
    return (
        <Card className="gradient-card border-border">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-semibold text-foreground">
                        Analytics Overview
                    </CardTitle>
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="text-xs">
                            Today
                        </Button>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-primary text-primary-foreground">
                            Total Users
                        </Badge>
                        <Badge variant="outline" className="bg-chart-2 text-white">
                            Total Projects
                        </Badge>
                        <Badge variant="outline" className="bg-chart-3 text-white">
                            Operating Status
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2 ml-auto">
                        <Button variant="outline" size="sm" className="text-xs">
                            This year
                        </Button>
                        <Button variant="outline" size="sm" className="text-xs">
                            Last year
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                            <XAxis
                                dataKey="month"
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={12}
                            />
                            <YAxis
                                stroke="hsl(var(--muted-foreground))"
                                fontSize={12}
                                tickFormatter={(value) => `${value / 1000}K`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "hsl(var(--card))",
                                    border: "1px solid hsl(var(--border))",
                                    borderRadius: "6px",
                                    color: "hsl(var(--foreground))",
                                }}
                                labelStyle={{ color: "hsl(var(--foreground))" }}
                            />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="totalUsers"
                                stroke="hsl(var(--primary))"
                                strokeWidth={2}
                                dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                                name="Total Users"
                            />
                            <Line
                                type="monotone"
                                dataKey="totalProjects"
                                stroke="hsl(var(--chart-2))"
                                strokeWidth={2}
                                strokeDasharray="5 5"
                                dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                                name="Total Projects"
                            />
                            <Line
                                type="monotone"
                                dataKey="operatingStatus"
                                stroke="hsl(var(--chart-3))"
                                strokeWidth={2}
                                strokeDasharray="3 3"
                                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 4 }}
                                name="Operating Status"
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
