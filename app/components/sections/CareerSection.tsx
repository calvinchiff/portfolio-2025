import React, { useState } from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { careerData } from "@/public/data/careerData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function CareerSection() {
	const { language } = useLanguage();
	const [active, setActive] = useState(careerData.entries[0]);
	const activeIndex = careerData.entries.findIndex(
		(entry) => entry.id === active.id
	);

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
					<div className="h-full relative pl-8 mt-4 opacity-90 p-4">
						{/* Timeline vertical bar */}
						<div className="absolute left-2.5 top-2 bottom-8 w-1 bg-white/20 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
						<div
							className="absolute left-2.5 top-2 w-1 bg-white rounded-full transition-all duration-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
							style={{
								height: `${
									(activeIndex / (careerData.entries.length - 1)) * 90 + 3
								}%`
							}}
						/>

						<ul className="flex flex-col h-full justify-between">
							{careerData.entries.map((entry, index) => (
								<li key={entry.id} className="relative">
									{/* Timeline dot */}
									<div
										className={`absolute -left-7.5 top-1 w-3 md:w-5 h-3 md:h-5 rounded-full border-2 transition-all duration-300 ${
											index === activeIndex
												? "bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
												: index < activeIndex
												? "bg-white border-white"
												: "bg-black/30 border-white/50"
										}`}
									></div>

									<div
										className={`cursor-pointer transition-all duration-150 ${
											active === entry
												? "opacity-90 text-glow"
												: "opacity-40 hover:opacity-60"
										}`}
										onClick={() => setActive(entry)}
									>
										<h3 className="font-bold">
											{entry.from.split("-")[2]} - {entry.to.split("-")[2]}
										</h3>
										<p className="text-sm md:text-base">
											{entry.title[language]}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
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
