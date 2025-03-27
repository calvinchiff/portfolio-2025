import React, { useState } from "react";
import Tile from "@/app/components/ui/Tile";
import Image from "next/image";
import Section from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";
import BG from "../ui/BG";
import { siJavascript, siNodedotjs, siReact, siTypescript } from "simple-icons";

export default function SkillsSection() {
	const { language } = useLanguage();
	const [active, setActive] = useState("technicalSkills");

	// Définition des tuiles
	const tiles = [
		{
			id: "technicalSkills",
			title: translations[language].skills["technicalSkills"].title,
			skills: [
				{
					name: "JavaScript",
					icon: "/skills/JS_icon.png",
					description: ""
				},
				{
					name: "React",
					icon: "/skills/React_icon.png",
					description: "blabla"
				},
				{
					name: "Git",
					icon: "/skills/Git_icon.png",
					description: "blabla"
				},
				{
					name: "TypeScript",
					icon: "/skills/TS_icon.png",
					description: "blabla"
				},
				{
					name: "Node.js",
					icon: "/skills/Node_icon.png",
					description: "blabla"
				},
				{
					name: "Cloud",
					icon: "/skills/Cloud_icon.png",
					description: "blabla"
				},
				{
					name: "Docker",
					icon: "/skills/Docker_icon.webp",
					description: "blabla"
				},
				{
					name: "Angular",
					icon: "/skills/Angular_icon.png",
					description: "blabla"
				},
				{
					name: "Github Actions",
					icon: "/skills/GithubActions_icon.png",
					description: "blabla"
				},
				{
					name: "SQL",
					icon: "/skills/SQL_icon.png",
					description: "blabla"
				},
				{
					name: "Linux",
					icon: "/skills/Linux_icon.png",
					description: "Linux"
				},
				{
					name: "More",
					icon: "/skills/More_icon.png",
					description: "Python, Java and C bases"
				}
			]
		},
		{
			id: "otherSkills",
			title: translations[language].skills["otherSkills"].title,
			skills: [
				{
					name: "French",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				},
				{
					name: "English",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				},
				{
					name: "German",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				}
			]
		},
		{
			id: "bonusSkills",
			title: translations[language].skills["bonusSkills"].title,
			skills: [
				{
					name: "Sport",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				},
				{
					name: "Creativity",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				},
				{
					name: "Curiosity",
					icon: "/skills/JS_icon.png",
					description: "blabla"
				}
			]
		}
	];

	const reorderedTiles = [...tiles].sort((a, b) =>
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
							title={tile.title}
							bottomRightCorner={active === tile.id ? "checked" : "toggle"}
						>
							<div
								className={`grid gap-4 h-full p-4 ${
									active === tile.id
										? "grid-cols-2"
										: "grid-cols-3 place-items-center"
								}`}
							>
								{tile.skills.map((skill) => (
									<div key={skill.name} className="group flex flex-row">
										<div className="relative w-6 h-6 md:w-10 md:h-10 xl:w-14 xl:h-14 self-center">
											<Image
												src={skill.icon}
												alt={skill.name + " icon"}
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
												<strong>{skill.name}</strong>
											</p>
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
