import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { contactData } from "@/public/data/contactData";
import { useLanguage } from "@/app/components/lib/LanguageContext";

export default function ContactSection() {
	const { language } = useLanguage();

	return (
		<Section
			id="contact"
			customClassName={"grid-rows-4 grid-cols-4 md:grid-rows-2 md:grid-cols-3"}
			nbLeftGridRows={2}
			nbRightGridRows={2}
		>
			<Tile customClassName="col-span-4 md:col-span-3 row-span-2 md:row-span-1 cursor-pointer">
				<div className="h-full gap-4 flex flex-col text-center items-center justify-center">
					<p>{contactData.text1[language]}</p>
					<p>{contactData.text2[language]}</p>
				</div>
			</Tile>
			<Tile customClassName="col-span-2 md:col-span-1 cursor-pointer">
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src="/contact/linkedin-logo.png"
						height={160}
						width={160}
						alt="Logo of Linkedin"
					/>
				</div>
			</Tile>
			<Tile customClassName="col-span-2 md:col-span-1 cursor-pointer">
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src="/contact/github-logo.png"
						height={160}
						width={160}
						alt="Logo of Linkedin"
					/>
				</div>
			</Tile>
			<Tile customClassName="col-span-4 md:col-span-1 cursor-pointer">
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src="/contact/linkedin-logo.png"
						height={160}
						width={160}
						alt="Logo of Linkedin"
						className=""
					/>
				</div>
			</Tile>
		</Section>
	);
}
