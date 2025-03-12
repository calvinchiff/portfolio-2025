import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";

export default function GeneralGrid() {
	return (
		<Section id="general" nbLeftGridRows={2} nbRightGridRows={1}>
			{/* General Grid */}
			<Tile title="Me" customClassName="col-span-3">
				tests
			</Tile>
			<Tile title={translations.en.general.tiles[0].id}></Tile>
			<Tile title={translations.en.general.tiles[1].id}></Tile>
			<Tile title={translations.en.general.tiles[2].id}></Tile>
		</Section>
	);
}
