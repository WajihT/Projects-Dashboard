import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Calendar, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    id: number;
    name: string;
    dueDate: string;
    totalTasks: number;
    completedTasks: number;
    progress: number;
    status: string;
    color: string;
    team: Array<{
        name: string;
        avatar: string;
    }>;
}

const statusColors = {
    "Complete": "bg-green-500/10 text-green-500 border-green-500/20",
    "In Progress": "bg-blue-500/10 text-blue-500 border-blue-500/20",
    "Planning": "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    "Rejected": "bg-red-500/10 text-red-500 border-red-500/20",
    "Approved": "bg-purple-500/10 text-purple-500 border-purple-500/20",
    "Pending": "bg-orange-500/10 text-orange-500 border-orange-500/20",
};

export function ProjectCard({
                                id,
                                name,
                                dueDate,
                                totalTasks,
                                completedTasks,
                                progress,
                                status,
                                color,
                                team
                            }: ProjectCardProps) {
    return (
        <Card className="gradient-card border-border hover:shadow-lg transition-all duration-200">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <div
                            className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold"
                            style={{ backgroundColor: color }}
                        >
                            {name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground text-sm leading-tight">
                                {name}
                            </h3>
                            <div className="flex items-center gap-1 mt-1">
                                <Calendar className="h-3 w-3 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">Due Date: {dueDate}</span>
                            </div>
                        </div>
                    </div>
                    <Badge
                        variant="outline"
                        className={cn(
                            "text-xs",
                            statusColors[status as keyof typeof statusColors]
                        )}
                    >
                        {status}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Team Members */}
                <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div className="flex -space-x-2">
                        {team.slice(0, 3).map((member, index) => (
                            <Avatar key={index} className="h-6 w-6 border-2 border-card">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                        ))}
                        {team.length > 3 && (
                            <div className="h-6 w-6 rounded-full bg-muted border-2 border-card flex items-center justify-center">
                                <span className="text-xs text-muted-foreground">+{team.length - 3}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {completedTasks}/{totalTasks} Total Tasks
            </span>
                        <span className="font-medium text-foreground">{progress}%</span>
                    </div>
                    <Progress
                        value={progress}
                        className="h-2"
                        style={{
                            background: "hsl(var(--muted))"
                        }}
                    />
                </div>
            </CardContent>
        </Card>
    );
}
