import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { projectsData } from "@/public/data/projectsData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function ProjectsSection() {
	const { language } = useLanguage();
	return (
		<Section customClassName="grid-rows-20 grid-cols-4" id="projects">
			<Tile
				title={projectsData[0].title[language]}
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
