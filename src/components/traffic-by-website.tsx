import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TrafficByWebsiteProps {
    data: Array<{
        name: string;
        percentage: number;
    }>;
}

export function TrafficByWebsite({ data }: TrafficByWebsiteProps) {
    return (
        <Card className="gradient-card border-border">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                    Traffic by Website
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {data.map((item, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-foreground">{item.name}</span>
                                <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                            </div>
                            <Progress
                                value={item.percentage}
                                className="h-2"
                                style={{
                                    background: "hsl(var(--muted))"
                                }}
                            />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
