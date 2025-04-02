import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

const exo = Exo({
	variable: "--font-exo",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Calvin Chiffot - Portfolio",
	description:
		"Portfolio Calvin Chiffot Full-Stack NodeJS JavaScript TypeScript Dev"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${exo.variable} antialiased`}>{children}</body>
		</html>
	);
}
