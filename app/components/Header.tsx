"use client";
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
					<ul className="relative flex mx-2 gap-5">{listNavbar}</ul>
				</Tile>
			</nav>
			<button className="absolute right-10">
				<Tile>EN</Tile>
			</button>
		</header>
	);
}
