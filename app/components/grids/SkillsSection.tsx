import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";

export default function SkillsGrid() {
	return (
		<Section id="skills" nbLeftGridRows={1} nbRightGridRows={2}>
			<Tile
				customClassName="col-span-2 row-span-2"
				title={translations.en.skills.technicalSkills.title}
			>
				JS
			</Tile>
			<Tile title={translations.en.skills.otherSkills.title}>English</Tile>
			<Tile title={translations.en.skills.bonusSkills.title}>Creative</Tile>
		</Section>
	);
}
