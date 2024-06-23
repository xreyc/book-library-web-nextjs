import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "Book Library",
	description: "Book library app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(
				"min-h-screen bg-background font-sans antialiased",
				fontSans.variable
			)}>{children}</body>
		</html>
	);
}
