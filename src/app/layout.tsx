import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Snow Dashboard",
    description: "A modern dashboard interface built with Next.js and shadcn/ui",
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
