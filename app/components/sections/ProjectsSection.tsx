import React, { useState, useEffect } from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { projectsData } from "@/public/data/projectsData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

type Category = "dev" | "craft";

export default function ProjectsSection() {
	const { language } = useLanguage();
	const categories: Category[] = ["dev", "craft"];

	const [activeCategory, setActiveCategory] = useState<Category>("dev");
	const [projectIndex, setProjectIndex] = useState(0);

	const currentProjects = projectsData[activeCategory];

	useEffect(() => {
		setProjectIndex(0);
	}, [activeCategory]);

	const handleCategoryChange = (category: Category) => {
		setActiveCategory(category);
	};

	const handleNext = () => {
		setProjectIndex((prevIndex) => (prevIndex + 1) % currentProjects.length);
	};

	const handlePrevious = () => {
		setProjectIndex(
			(prevIndex) =>
				(prevIndex - 1 + currentProjects.length) % currentProjects.length
		);
	};

	return (
		<Section customGridClassName="" id="projects">
			<div className="flex flex-col h-full gap-2">
				<div className="relative h-full">
					<button
						onClick={handlePrevious}
						className="w-10 h-10 md:w-20 md:h-20 absolute z-50 left-2 md:-left-18 top-1/2 -translate-y-1/2 p-2 cursor-pointer transition-transform duration-200 hover:-translate-x-2 opacity-70 hover:opacity-100"
					>
						<Image
							src="/projects/arrow.png"
							alt="Previous"
							objectFit="contain"
							fill
						/>
					</button>

					<button
						onClick={handleNext}
						className="w-10 h-10 md:w-20 md:h-20 absolute z-50 right-2 md:-right-18 top-1/2 -translate-y-1/2 p-2 cursor-pointer transition-transform duration-200 hover:translate-x-2 opacity-70 hover:opacity-100"
					>
						<Image
							src="/projects/arrow.png"
							alt="Next"
							objectFit="contain"
							fill
							className="transform rotate-180"
						/>
					</button>

					<Tile
						title={`${currentProjects[projectIndex].title[language]} #${currentProjects[projectIndex].id}`}
						customClassName=""
					/>
				</div>

				<div className="flex flex-row gap-2 md:h-[70px]">
					{categories.map((category) => (
						<Tile
							key={category}
							onClick={() => handleCategoryChange(category)}
							customClassName="cursor-pointer"
						>
							<h1
								className={`transition-all duration-150 ${
									activeCategory === category
										? "opacity-90 text-glow font-semibold"
										: "opacity-40"
								}`}
							>
								{category.charAt(0).toUpperCase() + category.slice(1)}
							</h1>
						</Tile>
					))}
				</div>
			</div>
		</Section>
	);
}
