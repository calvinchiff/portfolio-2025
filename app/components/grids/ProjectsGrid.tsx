import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import { translations } from "@/public/translations";

export default function ProjectsGrid() {
	return (
		<Grid customClassName="grid-rows-20 grid-cols-4" id="projects">
			<Tile
				title={translations.en.projects[0].title}
				customClassName="col-span-full row-span-17"
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
		</Grid>
	);
}
