"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { notifications, activities, contacts } from "@/lib/mock-data";
import { Bug, User, Heart, FileText, Trash2, Palette, GitPullRequest } from "lucide-react";

const getActivityIcon = (type: string) => {
    switch (type) {
        case "bug":
            return <Bug className="h-4 w-4 text-red-500" />;
        case "user":
            return <User className="h-4 w-4 text-blue-500" />;
        case "subscription":
            return <Heart className="h-4 w-4 text-pink-500" />;
        case "style":
            return <Palette className="h-4 w-4 text-purple-500" />;
        case "version":
            return <GitPullRequest className="h-4 w-4 text-green-500" />;
        case "data":
            return <FileText className="h-4 w-4 text-orange-500" />;
        case "delete":
            return <Trash2 className="h-4 w-4 text-red-500" />;
        default:
            return <FileText className="h-4 w-4 text-gray-500" />;
    }
};

const getStatusColor = (status: string) => {
    switch (status) {
        case "online":
            return "bg-green-500";
        case "away":
            return "bg-yellow-500";
        case "offline":
            return "bg-gray-500";
        default:
            return "bg-gray-500";
    }
};

export function NotificationsPanel() {
    return (
        <div className="w-80 h-full bg-card border-l border-border">
            <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-semibold text-foreground">Notifications</h2>
                    <Badge variant="secondary">4</Badge>
                </div>

                {/* Notifications */}
                <div className="space-y-3 mb-6">
                    {notifications.map((notification) => (
                        <div key={notification.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={notification.avatar} alt="User" />
                                <AvatarFallback className="bg-primary/10 text-primary">
                                    {getActivityIcon(notification.type)}
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground leading-tight">
                                    {notification.title}
                                </p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {notification.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <Separator className="my-6" />

                {/* Activities */}
                <div className="mb-6">
                    <h2 className="font-semibold text-foreground mb-4">Activities</h2>
                    <div className="space-y-3">
                        {activities.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                                    {getActivityIcon(activity.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground leading-tight">
                                        {activity.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        {activity.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Separator className="my-6" />

                {/* Contacts */}
                <div>
                    <h2 className="font-semibold text-foreground mb-4">Contacts</h2>
                    <div className="space-y-3">
                        {contacts.map((contact, index) => (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent transition-colors">
                                <div className="relative">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={contact.avatar} alt={contact.name} />
                                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                            {contact.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-card ${getStatusColor(contact.status)}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-foreground truncate">
                                        {contact.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
