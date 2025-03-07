import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import { translations } from "@/public/translations";

export default function GeneralGrid() {
	return (
		<Grid id="general">
			<Tile title="Me" customClassName="col-span-3">
				tests
			</Tile>
			<Tile title={translations.en.general.tiles[0].id}></Tile>
			<Tile title={translations.en.general.tiles[1].id}></Tile>
			<Tile title={translations.en.general.tiles[2].id}></Tile>
		</Grid>
	);
}
