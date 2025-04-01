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
			<div className="flex flex-col h-full gap-2">
				<Tile customClassName="basis-1/2 md:col-span-3 row-span-2 md:row-span-1 cursor-pointer">
					<div className="h-full gap-4 flex flex-col text-center items-center justify-center">
						<span>{contactData.text1[language]}</span>
						<span>{contactData.text2[language]}</span>
					</div>
				</Tile>
				<div className="flex flex-row basis-1/2 gap-2">
					<div className="flex flex-col md:flex-row w-full gap-2 basis-1/2 md:basis-2/3">
						<Tile customClassName="cursor-pointer ">
							<div className="h-full w-full flex items-center justify-center">
								<Image
									src="/contact/linkedin-logo.png"
									objectFit="contain"
									fill
									alt="Logo of Linkedin"
								/>
							</div>
						</Tile>
						<Tile customClassName="cursor-pointer">
							<div className="h-full w-full flex items-center justify-center">
								<Image
									src="/contact/github-logo.png"
									objectFit="contain"
									fill
									alt="Logo of Linkedin"
								/>
							</div>
						</Tile>
					</div>
					<div className="basis-1/2 md:basis-1/3">
						<Tile customClassName="cursor-pointer">
							<div className="h-full w-full flex items-center justify-center">
								<Image
									src="/contact/resume-logo.png"
									objectFit="contain"
									fill
									alt="Logo of Resume"
									className="invert brightness-200 rotate-45 scale-75 opacity-70"
								/>
							</div>
						</Tile>
					</div>
				</div>
			</div>
		</Section>
	);
}
