"use client";

import Image from "next/image";
import { navbarData } from "@/public/data/navbarData";
import React, { useEffect, useState } from "react";
import { useLanguage } from "@/app/utils/LanguageContext";
import BG from "@/app/components/ui/BGTile";
import { handleScrollToId } from "@/app/utils/scroll";

export default function Header() {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const { language, changeLanguage } = useLanguage();

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				root: null, // Use viewport as root
				rootMargin: "-45% 0px -45% 0px",
				threshold: [0.1, 0.5, 0.9]
			}
		);

		const sections = document.querySelectorAll("section");
		if (sections.length === 0) {
			console.error("No <section> elements found on the page.");
		}

		sections.forEach((section) => observer.observe(section));

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);

	const listNavbar = navbarData.map((x) => (
		<button
			onClick={() => handleScrollToId(x.id)}
			key={x.id}
			className={`cursor-pointer hover:font-bold transition-all ${
				activeSection === x.id
					? "text-white/90 font-bold text-glow"
					: "text-gray-500"
			}`}
		>
			{x.title[language]}
		</button>
	));

	return (
		<header className="fixed flex items-center justify-center w-full bottom-5 md:bottom-auto md:top-[4dvh] left-0 z-50">
			<nav className="inline-flex max-w-[98vw] backdrop-blur-sm rounded-[35px] shadow-xl p-3.5 md:p-4">
				<BG />
				<ul className="relative flex mx-auto md:mx-3 gap-1.5 md:gap-4 text-base md:text-lg xl:text-2xl">
					{listNavbar}
				</ul>
			</nav>
			<button
				onClick={() => changeLanguage(language === "en" ? "fr" : "en")}
				className="fixed top-10 md:top-[4dvh] right-[10dvw] h-10 md:h-15 w-10 md:w-15 overflow-hidden rounded-full cursor-pointer shadow-xl hover:shadow-white hover:shadow-xs"
			>
				<Image
					src={
						language === "en"
							? "/header/Flag_UK_1.png"
							: "/header/Flag_FR_1.png"
					}
					fill
					sizes="100%"
					style={{ objectFit: "contain" }}
					alt="Language Toggle between EN/FR"
				/>
			</button>
		</header>
	);
}
