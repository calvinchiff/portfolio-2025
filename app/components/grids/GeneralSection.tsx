"use client";
import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";
import { handleScrollToId } from "@/app/utils/scroll";

export default function GeneralGrid() {
	const { language } = useLanguage();

	const listDescription = translations[language].general.description.map(
		(line) => <li key={line.id}>{line.text}</li>
	);

	const birthDate = new Date("2001-03-30");
	const today = new Date();

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();

	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDate.getDate())
	) {
		age--;
	}

	return (
		<Section
			id="general"
			customGridClassName=""
			nbLeftGridRows={2}
			nbRightGridRows={1}
		>
			{/* General Tile */}
			<Tile title="" customClassName="col-span-3">
				<div className="flex flex-row h-full">
					<div className="basis-1/3 relative">
						<Image
							alt="Avatar logo"
							src="/general/Me_Logo.png"
							fill
							objectFit="contain"
						/>
					</div>
					<div className="basis-2/3 self-center">
						<h2>{translations[language].general.name}</h2>
						<p>{age + translations[language].general.me}</p>
						<ul>{listDescription}</ul>
					</div>
				</div>
			</Tile>

			{/* Skills Tile */}
			<Tile
				title={translations[language].general.tiles[0].title}
				customClassName="cursor-pointer hover:text-glow hover:font-bold transition-all duration-150"
				onClick={() => handleScrollToId("skills")}
				bottomRightCorner="arrow"
			>
				<Image
					alt="Skills logo"
					src="/general/Skills_Logo.png"
					fill
					objectFit="contain"
					className="p-2 opacity-90 group-hover:opacity-100 md:blur-xs group-hover:blur-none duration-150"
				/>
			</Tile>

			{/* Career Tile */}
			<Tile
				title={translations[language].general.tiles[1].title}
				customClassName="cursor-pointer hover:text-glow hover:font-bold transition-all duration-150"
				onClick={() => handleScrollToId("career")}
				bottomRightCorner="arrow"
			>
				<Image
					alt="Skills logo"
					src="/general/Career_Logo.png"
					fill
					objectFit="contain"
					className="opacity-90 group-hover:opacity-100 md:blur-xs group-hover:blur-none duration-150"
				/>
			</Tile>

			{/* Projects Tile */}
			<Tile
				title={translations[language].general.tiles[2].title}
				customClassName="cursor-pointer hover:text-glow hover:font-bold transition-all duration-150"
				onClick={() => handleScrollToId("projects")}
				bottomRightCorner="arrow"
			>
				<Image
					alt="Projects logo"
					src="/general/Projects_Logo.png"
					fill
					objectFit="contain"
					className="opacity-90 group-hover:opacity-100 md:blur-xs group-hover:blur-none duration-150"
				/>
			</Tile>
		</Section>
	);
}
