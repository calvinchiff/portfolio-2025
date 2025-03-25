import React, { useState } from "react";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";
import BG from "../ui/BG";

export default function SkillsSection() {
	const { language } = useLanguage();
	const [active, setActive] = useState("technicalSkills");

	// Définition des tuiles
	const tiles = [
		{
			id: "technicalSkills",
			title: translations[language].skills["technicalSkills"].title
		},
		{
			id: "otherSkills",
			title: translations[language].skills["otherSkills"].title
		},
		{
			id: "bonusSkills",
			title: translations[language].skills["bonusSkills"].title
		}
	];

	// Réorganisation dynamique des tuiles
	const reorderedTiles =
		active === "bonusSkills" ? [tiles[2], tiles[0], tiles[1]] : tiles;

	return (
		<Section id="skills" nbLeftGridRows={1} nbRightGridRows={2}>
			<div className="grid grid-cols-3 grid-rows-2 gap-2 h-full w-full">
				{reorderedTiles.map((tile, index) => (
					<motion.div
						key={tile.id}
						layout
						className={`cursor-pointer ${
							active === tile.id
								? "col-span-2 row-span-2"
								: "col-span-1 row-span-1"
						}`}
						onClick={() => setActive(tile.id)}
						transition={{ duration: 0.5, ease: "easeInOut" }}
					>
						<Tile title={tile.title} />
					</motion.div>
				))}
			</div>
		</Section>
	);
}
