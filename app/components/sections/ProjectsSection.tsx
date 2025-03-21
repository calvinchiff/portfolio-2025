import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function ProjectsSection() {
	const { language } = useLanguage();
	return (
		<Section customClassName="grid-rows-20 grid-cols-4" id="projects">
			<Tile
				title={translations[language].projects[0].title}
				customClassName="col-span-4 row-span-17"
			>
				Projet test
			</Tile>
			<Tile
				title="Dev"
				customClassName="col-span-2 row-span-3 cursor-pointer"
			></Tile>
			<Tile
				title="Craft"
				customClassName="col-span-2 row-span-3 cursor-pointer"
			></Tile>
		</Section>
	);
}
