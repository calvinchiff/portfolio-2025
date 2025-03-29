import React, { useState } from "react";
import Tile from "@/app/components/ui/Tile";
import Image from "next/image";
import Section from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { skillsTiles } from "@/public/skillsData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function SkillsSection() {
	const { language } = useLanguage();
	const [active, setActive] = useState("technicalSkills");

	// Définition des tuiles

	const reorderedTiles = [...skillsTiles].sort((a, b) =>
		a.id === active ? -1 : b.id === active ? 1 : 0
	);

	return (
		<Section id="skills" nbLeftGridRows={1} nbRightGridRows={2}>
			<div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-2 h-full w-full">
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
						<Tile
							title={tile.name[language]}
							bottomRightCorner={active === tile.id ? "checked" : "toggle"}
						>
							<div
								className={`grid h-full p-4 ${
									active === tile.id
										? "grid-cols-2 gap-4"
										: "grid-cols-3 gap-1 place-items-center"
								}`}
							>
								{tile.skills.map((skill) => (
									<div key={skill.icon} className="group flex flex-col">
										<div className="group flex flex-row">
											<div
												className={`relative transition-all duration-300 ${
													active === tile.id
														? "self-center w-6 h-6 md:w-10 md:h-10 xl:w-14 xl:h-14"
														: "w-4 h-4 md:w-8 md:h-8 xl:w-8 xl:h-8"
												}`}
											>
												<Image
													src={skill.icon}
													alt={skill.name[language] + " icon"}
													fill
													objectFit="contain"
													className={`transition-all duration-300 ${
														active === tile.id
															? "drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
															: "opacity-40 group-hover:opacity-60"
													}`}
												/>
											</div>
											{active === tile.id && (
												<p className="ml-2 self-center">
													<strong>{skill.name[language]}</strong>
												</p>
											)}
										</div>
										{active === "bonusSkills" && skill.subList && (
											<ul className="mt-2 pl-6 space-y-1 text-sm">
												{skill.subList.map((sub) => (
													<li key={sub.name} className="flex items-center">
														<span className="mr-2">{sub.icon}</span>{" "}
														{sub.name[language]}
													</li>
												))}
											</ul>
										)}
									</div>
								))}
							</div>
						</Tile>
					</motion.div>
				))}
			</div>
		</Section>
	);
}
