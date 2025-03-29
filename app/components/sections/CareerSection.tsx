import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { careerData } from "@/public/data/careerData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function CareerSection() {
	return (
		<Section id="career" nbLeftGridRows={2} nbRightGridRows={2}>
			<Tile title="Timeline" customClassName="row-span-2">
				LTTD Consulting
			</Tile>
			<Tile title="Details" customClassName="col-span-2 row-span-2">
				LTTD Consulting 2023-24
			</Tile>
		</Section>
	);
}
