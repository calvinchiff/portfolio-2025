import React from "react";
import { footerData } from "@/public/data/footerData";
import { useLanguage } from "@/app/utils/LanguageContext";

export default function Footer() {
	const { language } = useLanguage();
	return (
		<footer className="text-center text-sm text-white/50 md:py-8">
			© {new Date().getFullYear()} Calvin Chiffot. {footerData.rights[language]}
			.
		</footer>
	);
}
