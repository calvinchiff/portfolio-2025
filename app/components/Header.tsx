"use client";

import Image from "next/image";
import { translations } from "@/public/translations";
import React from "react";
import Tile from "./ui/Tile";

export default function Header() {
	function handleScrollToId(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		}
	}

	const listNavbar = translations.en.navbar.map((x) => (
		<button
			onClick={() => handleScrollToId(x.id)}
			key={x.id}
			className="cursor-pointer hover:underline"
		>
			{x.title}
		</button>
	));

	return (
		<header className="fixed flex items-center justify-center w-full top-10 left-0 z-50">
			<nav className="inline-flex backdrop-blur-sm rounded-[35px]">
				<Tile>
					<ul className="relative flex mx-3 gap-5">{listNavbar}</ul>
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
