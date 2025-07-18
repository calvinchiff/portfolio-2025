import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BGTopo from "@/app/components/ui/BGTopo";
import { ScrollProvider } from "@/app/utils/ScrollContext";
import AnimatedWrapper from "@/app/utils/AnimatedWrapper";
// import CRTFilter from "@/app/components/ui/CRTFilter";

const exo = Exo({
	variable: "--font-exo",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	title: "Calvin Chiffot - Portfolio",
	description: "Portfolio Calvin Chiffot Full-Stack Dev",
	icons: {
		icon: [
			{ url: "/favicon.ico" },
			{
				url: "/favicon_io/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png"
			},
			{
				url: "/favicon_io/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png"
			}
		],
		apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
		other: [
			{
				url: "/favicon_io/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png"
			},
			{
				url: "/favicon_io/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png"
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${exo.variable} antialiased`}>
				{/* <CRTFilter> */}
				<AnimatedWrapper>
					<ScrollProvider>{children}</ScrollProvider>
				</AnimatedWrapper>
				<BGTopo />
				<Analytics />
				<SpeedInsights />
				{/* </CRTFilter> */}
			</body>
		</html>
	);
}
