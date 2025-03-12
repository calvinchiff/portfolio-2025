import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";

export default function CareerGrid() {
	return (
		<Section nbLeftGridRows={2} nbRightGridRows={2}>
			<Grid id="career">
				<Tile title="Timeline" customClassName="row-span-2">
					LTTD Consulting
				</Tile>
				<Tile title="Details" customClassName="col-span-2 row-span-2">
					LTTD Consulting 2023-24
				</Tile>
			</Grid>
		</Section>
	);
}
