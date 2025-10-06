// app/components/AnalyticsWrapper.tsx
"use client";

import { PlausibleProvider } from "next-plausible";

export default function AnalyticsWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<PlausibleProvider
			domain="calvinchiff.com"
			selfHosted
			customDomain="https://stats.calvinchiff.com"
			trackOutboundLinks
			trackFileDownloads
		>
			{children}
		</PlausibleProvider>
	);
}
