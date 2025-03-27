import React, { useState } from "react";
import Tile from "@/app/components/ui/Tile";
import Image from "next/image";
import Section from "@/app/components/ui/Section";
import { motion } from "framer-motion";
import { translations } from "@/public/translations";
import { useLanguage } from "@/app/components/lib/LanguageContext";

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
					name: "Python, Java and C bases",
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
					name: "Native French",
					icon: "/skills/FR_icon.png",
					description: "blabla"
				},
				{
					name: "Fluent in English",
					icon: "/skills/EN_icon.png",
					description: "blabla"
				},
				{
					name: "Basic German",
					icon: "/skills/DE_icon.png",
					description: "blabla"
				},
				{
					name: "🚗 + 🏍️ Drinving licenses",
					icon: "/skills/License_icon.png",
					description: "blabla"
				},
				{
					name: "Agile Software Dev",
					icon: "/skills/Agile_icon.png",
					description: "blabla"
				},
				{
					name: "Problem solving",
					icon: "/skills/Problem_icon.png",
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
					icon: "/skills/Sport_icon.png",
					subList: [
						{ name: "StreetWorkout/Calisthenics", icon: "🏋️" },
						{ name: "Motorcycle / Dirtbike", icon: "🏍️" },
						{ name: "Ski", icon: "🎿" },
						{ name: "Martial Arts", icon: "🥋" }
					]
				},
				{
					name: "Creativity",
					icon: "/skills/Creative_icon.png",
					subList: [
						{ name: "3D Modelling", icon: "📐" },
						{ name: "Woodworking", icon: "🪵" },
						{ name: "Embedded/IoT", icon: "🎛️" }
					]
				},
				{
					name: "Curiosity",
					icon: "/skills/Explorer_icon.png",
					subList: [
						{ name: "Hardware", icon: "📟" },
						{ name: "Robotics", icon: "🦾" },
						{ name: "AI / ML / Edge AI", icon: "🤖" },
						{ name: "Mechanics", icon: "🔧" },
						{ name: "Quantum physics", icon: "🔬" }
					]
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
								className={`grid h-full p-4 ${
									active === tile.id
										? "grid-cols-2 gap-4"
										: "grid-cols-3 gap-1 place-items-center"
								}`}
							>
								{tile.skills.map((skill) => (
									<div key={skill.name} className="group flex flex-col">
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
										{active === "bonusSkills" && skill.subList && (
											<ul className="mt-2 pl-6 space-y-1 text-sm">
												{skill.subList.map((sub) => (
													<li key={sub.name} className="flex items-center">
														<span className="mr-2">{sub.icon}</span> {sub.name}
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
