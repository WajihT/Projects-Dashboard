"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Search,
    Bell,
    Settings,
    Sun,
    RotateCcw,
    Bookmark,
    Expand
} from "lucide-react";

interface TopNavProps {
    title?: string;
    breadcrumb?: string[];
}

export function TopNav({ title = "Default", breadcrumb = ["Dashboards"] }: TopNavProps) {
    return (
        <header className="h-14 lg:h-[60px] border-b border-border bg-card">
            <div className="flex h-full items-center justify-between px-4 lg:px-6">
                {/* Left section - Breadcrumb and Title */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        {breadcrumb.map((item, index) => (
                            <span key={index}>
                {item}
                                {index < breadcrumb.length - 1 && <span className="mx-1">/</span>}
              </span>
                        ))}
                    </div>
                    <span className="text-sm font-medium text-foreground ml-2">{title}</span>
                </div>

                {/* Center section - Search */}
                <div className="flex-1 max-w-md mx-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="pl-10 bg-background/50 border-border"
                        />
                    </div>
                </div>

                {/* Right section - Actions and User */}
                <div className="flex items-center gap-2">
                    {/* Action buttons */}
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Sun className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <RotateCcw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Bookmark className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Expand className="h-4 w-4" />
                    </Button>

                    {/* Notifications */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 relative">
                                <Bell className="h-4 w-4" />
                                <Badge className="absolute -top-1 -right-1 h-2 w-2 p-0 bg-primary" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel className="flex items-center justify-between">
                                Notifications
                                <Badge variant="secondary">4</Badge>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="max-h-64 overflow-y-auto">
                                <DropdownMenuItem className="flex items-start gap-3 p-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">You fixed a bug.</p>
                                        <p className="text-xs text-muted-foreground">5 minutes ago</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-start gap-3 p-3">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">New user registered.</p>
                                        <p className="text-xs text-muted-foreground">5 minutes ago</p>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex items-start gap-3 p-3">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Andi Lane subscribed to you.</p>
                                        <p className="text-xs text-muted-foreground">Today, 11:59 AM</p>
                                    </div>
                                </DropdownMenuItem>
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatars/user.png" alt="User" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">ByeWind</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        user@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
