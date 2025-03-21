import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function SkillsSection() {
	const { language } = useLanguage();

	return (
		<Section id="skills" nbLeftGridRows={1} nbRightGridRows={2}>
			<Tile
				customClassName="col-span-2 row-span-2"
				title={translations[language].skills.technicalSkills.title}
			>
				JS
			</Tile>
			<Tile title={translations[language].skills.otherSkills.title}>
				English
			</Tile>
			<Tile title={translations[language].skills.bonusSkills.title}>
				Creative
			</Tile>
		</Section>
	);
}
