import { DashboardLayout } from "@/components/dashboard-layout";
import { MetricsCards } from "@/components/metrics-cards";
import { AnalyticsChart } from "@/components/analytics-chart";
import { DeviceTrafficChart, LocationTrafficChart } from "@/components/traffic-charts";
import { TrafficByWebsite } from "@/components/traffic-by-website";
import {
    dashboardMetrics,
    analyticsData,
    deviceTrafficData,
    locationTrafficData,
    trafficWebsites
} from "@/lib/mock-data";

export default function DashboardPage() {
    return (
        <DashboardLayout title="Overview" breadcrumb={["Dashboards"]}>
            <div className="space-y-6">
                {/* Metrics Cards */}
                <MetricsCards metrics={dashboardMetrics} />

                {/* Analytics Chart */}
                <AnalyticsChart data={analyticsData} />

                {/* Bottom Row Charts */}
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                    <DeviceTrafficChart data={deviceTrafficData} />
                    <LocationTrafficChart data={locationTrafficData} />
                    <TrafficByWebsite data={trafficWebsites} />
                </div>
            </div>
        </DashboardLayout>
    );
}
