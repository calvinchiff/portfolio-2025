"use client";

import Image from "next/image";
import { translations } from "@/public/translations";
import React, { useEffect, useState } from "react";
import Tile from "./ui/Tile";

export default function Header() {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	function handleScrollToId(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
	}

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

	const listNavbar = translations.en.navbar.map((x) => (
		<button
			onClick={() => handleScrollToId(x.id)}
			key={x.id}
			className={`cursor-pointer hover:font-bold transition-all ${
				activeSection === x.id
					? "text-white/90 font-bold text-glow"
					: "text-gray-500"
			}`}
		>
			{x.title}
		</button>
	));

	return (
		<header className="fixed flex items-center justify-center w-full top-10 left-0 z-50">
			<nav className="inline-flex backdrop-blur-sm rounded-[35px] shadow-xl">
				<Tile>
					<ul className="relative flex mx-3 gap-5 text-xl">{listNavbar}</ul>
				</Tile>
			</nav>
			<button className="absolute right-10 h-12 w-12 overflow-hidden rounded-[35px]">
				<Image
					src="/Flag_UK.png"
					height={80}
					width={80}
					alt="Logo of Linkedin"
					objectFit="cover"
				/>
			</button>
		</header>
	);
}
