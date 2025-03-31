import React, { useState } from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { careerData } from "@/public/data/careerData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function CareerSection() {
	const { language } = useLanguage();
	const [active, setActive] = useState(careerData.entries[0]);
	return (
		<Section
			id="career"
			customGridClassName="flex flex-col md:flex-row"
			nbLeftGridRows={2}
			nbRightGridRows={2}
		>
			<div className="h-full basis-1/3">
				<Tile
					title={careerData.tiles.timeline.name[language]}
					customClassName=""
				>
					<ul>
						{careerData.entries.map((entry, index) => (
							<li
								key={entry.id}
								className={`cursor-pointer transition-all duration-150 ${
									active === entry
										? "opacity-90 text-glow"
										: "opacity-40 hover:opacity-60"
								}`}
								onClick={() => setActive(entry)}
							>
								<h3>
									{entry.from.split("-")[2]} - {entry.to.split("-")[2]}
								</h3>
								{entry.title[language]}
							</li>
						))}
					</ul>
				</Tile>
			</div>
			<div className="h-full basis-2/3">
				<Tile
					title={careerData.tiles.details.name[language]}
					customClassName=""
				>
					<div className="flex flex-col md:gap-2 md:mt-2">
						{Object.entries(careerData.tiles.details.contentTitles).map(
							([key, label]) => {
								const value = active[key];

								if (!value || (typeof value === "object" && !value[language])) {
									return null;
								}

								return (
									<div key={key} className="flex gap-2">
										<span className="font-semibold">
											{label[language]} :
											<span className="opacity-60 ml-2">
												{value[language] || value}
											</span>
										</span>
									</div>
								);
							}
						)}
					</div>
				</Tile>
			</div>
		</Section>
	);
}
