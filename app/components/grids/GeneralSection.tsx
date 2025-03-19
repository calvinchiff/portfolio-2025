import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function GeneralGrid() {
	const { language } = useLanguage();

	return (
		<Section id="general" nbLeftGridRows={2} nbRightGridRows={1}>
			{/* General Grid */}
			<Tile
				title={translations[language].general.title}
				customClassName="col-span-3"
			>
				tests
			</Tile>
			<Tile title={translations[language].general.tiles[0].title}></Tile>
			<Tile title={translations[language].general.tiles[1].title}></Tile>
			<Tile title={translations[language].general.tiles[2].title}></Tile>
		</Section>
	);
}
