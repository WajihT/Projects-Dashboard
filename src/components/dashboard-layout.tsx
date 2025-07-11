import { Sidebar } from "@/components/sidebar";
import { TopNav } from "@/components/top-nav";
import { NotificationsPanel } from "@/components/notifications-panel";

interface DashboardLayoutProps {
    children: React.ReactNode;
    title?: string;
    breadcrumb?: string[];
    showNotifications?: boolean;
}

export function DashboardLayout({
                                    children,
                                    title = "Overview",
                                    breadcrumb = ["Dashboards"],
                                    showNotifications = true
                                }: DashboardLayoutProps) {
    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex-1 flex flex-col min-w-0">
                <TopNav title={title} breadcrumb={breadcrumb} />

                <div className="flex-1 flex">
                    {/* Main content */}
                    <main className="flex-1 overflow-auto">
                        <div className="p-6">
                            {children}
                        </div>
                    </main>

                    {/* Notifications panel */}
                    {showNotifications && (
                        <div className="flex-shrink-0">
                            <NotificationsPanel />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
