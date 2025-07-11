export const dashboardMetrics = {
    views: {
        value: 7265,
        change: "+11.01%",
        trend: "up" as const
    },
    visits: {
        value: 3671,
        change: "-0.03%",
        trend: "down" as const
    },
    newUsers: {
        value: 256,
        change: "+15.03%",
        trend: "up" as const
    },
    activeUsers: {
        value: 2318,
        change: "+6.08%",
        trend: "up" as const
    }
};

export const analyticsData = [
    { month: "Jan", totalUsers: 15000, totalProjects: 12000, operatingStatus: 11000 },
    { month: "Feb", totalUsers: 18000, totalProjects: 14500, operatingStatus: 13200 },
    { month: "Mar", totalUsers: 22000, totalProjects: 17000, operatingStatus: 15800 },
    { month: "Apr", totalUsers: 28000, totalProjects: 21000, operatingStatus: 19500 },
    { month: "May", totalUsers: 35000, totalProjects: 26000, operatingStatus: 24000 },
    { month: "Jun", totalUsers: 32000, totalProjects: 24000, operatingStatus: 22000 },
    { month: "Jul", totalUsers: 29000, totalProjects: 22000, operatingStatus: 20500 }
];

export const deviceTrafficData = [
    { device: "Linux", value: 15000 },
    { device: "Mac", value: 22000 },
    { device: "iOS", value: 18000 },
    { device: "Windows", value: 32000 },
    { device: "Android", value: 12000 },
    { device: "Other", value: 8000 }
];

export const locationTrafficData = [
    { country: "United States", percentage: 52.1, color: "#8B5CF6" },
    { country: "Canada", percentage: 22.8, color: "#06B6D4" },
    { country: "Mexico", percentage: 13.9, color: "#10B981" },
    { country: "Other", percentage: 11.2, color: "#F59E0B" }
];

export const trafficWebsites = [
    { name: "Google", percentage: 45 },
    { name: "YouTube", percentage: 32 },
    { name: "Instagram", percentage: 28 },
    { name: "Pinterest", percentage: 15 },
    { name: "Facebook", percentage: 12 },
    { name: "Twitter", percentage: 8 }
];

export const projects = [
    {
        id: 1,
        name: "Dashboard",
        dueDate: "Nov 10, 2025",
        totalTasks: 49,
        completedTasks: 36,
        progress: 75,
        status: "In Progress",
        color: "#06B6D4",
        team: [
            { name: "John Doe", avatar: "/avatars/01.png" },
            { name: "Jane Smith", avatar: "/avatars/02.png" }
        ]
    },
    {
        id: 2,
        name: "Coffee detail page • Marketing Site",
        dueDate: "Nov 16, 2025",
        totalTasks: 56,
        completedTasks: 56,
        progress: 100,
        status: "Complete",
        color: "#10B981",
        team: [
            { name: "Mike Johnson", avatar: "/avatars/03.png" }
        ]
    },
    {
        id: 3,
        name: "Drinking bottle graphics",
        dueDate: "Nov 18, 2025",
        totalTasks: 65,
        completedTasks: 16,
        progress: 25,
        status: "Rejected",
        color: "#EF4444",
        team: [
            { name: "Sarah Wilson", avatar: "/avatars/04.png" }
        ]
    },
    {
        id: 4,
        name: "Company logo design",
        dueDate: "Feb 21, 2025",
        totalTasks: 20,
        completedTasks: 20,
        progress: 100,
        status: "Complete",
        color: "#8B5CF6",
        team: [
            { name: "Alex Brown", avatar: "/avatars/05.png" },
            { name: "Emma Davis", avatar: "/avatars/06.png" }
        ]
    },
    {
        id: 5,
        name: "Landing page design",
        dueDate: "Jan 30, 2025",
        totalTasks: 23,
        completedTasks: 5,
        progress: 22,
        status: "Planning",
        color: "#F59E0B",
        team: [
            { name: "Chris Lee", avatar: "/avatars/07.png" },
            { name: "Pat Taylor", avatar: "/avatars/08.png" },
            { name: "Sam White", avatar: "/avatars/09.png" }
        ]
    },
    {
        id: 6,
        name: "Product page redesign",
        dueDate: "Jan 30, 2025",
        totalTasks: 49,
        completedTasks: 12,
        progress: 25,
        status: "In Progress",
        color: "#EC4899",
        team: [
            { name: "Jordan Kim", avatar: "/avatars/10.png" }
        ]
    }
];

export const projectMetrics = {
    currentProjects: {
        value: 268,
        change: "+11.02%",
        trend: "up"
    },
    projectFinance: {
        value: "$3,290",
        change: "-0.03%",
        trend: "down"
    },
    ourClients: {
        value: 31,
        change: "+15.03%",
        trend: "up"
    }
};

export const notifications = [
    {
        id: 1,
        type: "bug",
        title: "You fixed a bug.",
        time: "5 minutes ago",
        avatar: "/avatars/user.png"
    },
    {
        id: 2,
        type: "user",
        title: "New user registered.",
        time: "5 minutes ago",
        avatar: "/avatars/user.png"
    },
    {
        id: 3,
        type: "bug",
        title: "You fixed a bug.",
        time: "12 hours ago",
        avatar: "/avatars/user.png"
    },
    {
        id: 4,
        type: "subscription",
        title: "Andi Lane subscribed to you.",
        time: "Today, 11:59 AM",
        avatar: "/avatars/andi.png"
    }
];

export const activities = [
    {
        id: 1,
        type: "style",
        title: "Changed the style.",
        time: "Just now",
        avatar: "/avatars/user.png"
    },
    {
        id: 2,
        type: "version",
        title: "Released a new version.",
        time: "59 minutes ago",
        avatar: "/avatars/user.png"
    },
    {
        id: 3,
        type: "bug",
        title: "Submitted a bug.",
        time: "12 hours ago",
        avatar: "/avatars/user.png"
    },
    {
        id: 4,
        type: "data",
        title: "Modified A data in Page X.",
        time: "Today, 11:59 AM",
        avatar: "/avatars/user.png"
    },
    {
        id: 5,
        type: "delete",
        title: "Deleted a page in Project X.",
        time: "Feb 2, 2025",
        avatar: "/avatars/user.png"
    }
];

export const contacts = [
    { name: "Natali Craig", avatar: "/avatars/natali.png", status: "online" },
    { name: "Drew Cano", avatar: "/avatars/drew.png", status: "online" },
    { name: "Andi Lane", avatar: "/avatars/andi.png", status: "away" },
    { name: "Koray Okumus", avatar: "/avatars/koray.png", status: "online" },
    { name: "Kate Morrison", avatar: "/avatars/kate.png", status: "offline" },
    { name: "Melody Macy", avatar: "/avatars/melody.png", status: "online" }
];
