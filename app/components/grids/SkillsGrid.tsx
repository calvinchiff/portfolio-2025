import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import { translations } from "@/public/translations";

export default function SkillsGrid() {
	return (
		<Grid id="skills">
			<Tile
				customClassName="col-span-2 row-span-2"
				title={translations.en.skills.technicalSkills.title}
			>
				JS
			</Tile>
			<Tile title={translations.en.skills.otherSkills.title}>English</Tile>
			<Tile title={translations.en.skills.bonusSkills.title}>Creative</Tile>
		</Grid>
	);
}
