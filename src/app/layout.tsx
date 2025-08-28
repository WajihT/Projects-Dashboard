import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Projects Dashboard",
    description: "A modern dashboard interface built with Next.js and shadcn/ui",
    icons: {
        icon: "/logo.ico",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}
