"use client";

import PlausibleProvider from "next-plausible";

export default function AnalyticsWrapper({
	children
}: {
	children: React.ReactNode;
}) {
	console.log("AnalyticsWrapper mounted"); // <- test
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
