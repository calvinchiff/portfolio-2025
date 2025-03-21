"use client";
import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";
import LinkImageTile from "@/app/components/ui/LinkImageTile";

export default function GeneralSection() {
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
			customGridClassName="flex flex-col"
			nbLeftGridRows={2}
			nbRightGridRows={1}
		>
			<div className="h-full basis-2/3 md:basis-1/2">
				{/* General Tile */}
				<Tile>
					<div className="flex flex-col md:flex-row h-full justify-center">
						<div className="md:basis-1/3 relative">
							<Image
								alt="Avatar logo"
								src="/general/Me_Logo.png"
								fill
								objectFit="contain"
							/>
						</div>
						<div className="flex flex-col md:basis-2/3 self-center gap-3">
							<div className="flex flex-row gap-4">
								<h2>{translations[language].general.name}</h2>
								<h2 className="font-normal">
									{age + translations[language].general.me}
								</h2>
							</div>
							<ul className="flex flex-col gap-2">{listDescription}</ul>
						</div>
					</div>
				</Tile>
			</div>

			<div className="flex flex-row h-full gap-2 basis-1/3 md:basis-1/2">
				{/* Skills Tile */}
				<LinkImageTile
					title={translations[language].general.tiles[0].title}
					sectionLink="skills"
					imgSrc="/general/Skills_Logo.png"
				/>

				{/* Career Tile */}
				<LinkImageTile
					title={translations[language].general.tiles[1].title}
					sectionLink="career"
					imgSrc="/general/Career_Logo.png"
				/>

				{/* Projects Tile */}
				<LinkImageTile
					title={translations[language].general.tiles[2].title}
					sectionLink="projects"
					imgSrc="/general/Projects_Logo.png"
				/>
			</div>
		</Section>
	);
}
