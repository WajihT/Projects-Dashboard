"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    FolderOpen,
    User,
    Users,
    FileText,
    Settings,
    Building,
    MessageCircle,
    BarChart3,
    Star,
    Clock,
    Snowflake
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const sidebarItems = [
    {
        title: "Favorites",
        items: [
            { name: "Overview", href: "/", icon: LayoutDashboard, badge: null },
            { name: "Projects", href: "/projects", icon: FolderOpen, badge: null },
        ]
    },
    {
        title: "Recently",
        items: []
    },
    {
        title: "Dashboards",
        items: [
            { name: "Overview", href: "/", icon: LayoutDashboard, badge: null },
            { name: "eCommerce", href: "/ecommerce", icon: BarChart3, badge: null },
            { name: "Projects", href: "/projects", icon: FolderOpen, badge: null },
        ]
    },
    {
        title: "Pages",
        items: [
            { name: "User Profile", href: "/profile", icon: User, badge: null },
            { name: "Overview", href: "/overview", icon: LayoutDashboard, badge: null },
            { name: "Projects", href: "/projects", icon: FolderOpen, badge: null },
            { name: "Campaigns", href: "/campaigns", icon: BarChart3, badge: null },
            { name: "Documents", href: "/documents", icon: FileText, badge: null },
            { name: "Followers", href: "/followers", icon: Users, badge: null },
            { name: "Account", href: "/account", icon: Settings, badge: null },
            { name: "Blog", href: "/blog", icon: FileText, badge: null },
            { name: "Social", href: "/social", icon: MessageCircle, badge: null },
        ]
    }
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="h-full bg-card border-r border-border">
            <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Snowflake className="h-6 w-6 text-primary" />
                    <span className="text-foreground">Dashboard</span>
                </Link>
            </div>

            <div className="flex-1 px-3 py-2">
                <nav className="space-y-6">
                    {sidebarItems.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            {section.title && (
                                <div className="px-3 py-2">
                                    <h2 className="mb-2 px-0 text-xs font-medium tracking-tight text-muted-foreground uppercase">
                                        {section.title}
                                    </h2>
                                </div>
                            )}
                            <div className="space-y-1">
                                {section.items.map((item, itemIndex) => {
                                    const isActive = pathname === item.href;
                                    return (
                                        <Link
                                            key={itemIndex}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                                            )}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            <span className="flex-1">{item.name}</span>
                                            {item.badge && (
                                                <Badge variant="secondary" className="ml-auto">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                            {sectionIndex < sidebarItems.length - 1 && (
                                <Separator className="my-4" />
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            <div className="mt-auto p-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-card">
                    <Snowflake className="h-5 w-5 text-primary" />
                    <div className="text-xs text-muted-foreground">
                        © 2025 Wajih Tarkhani
                    </div>
                </div>
            </div>
        </div>
    );
}
