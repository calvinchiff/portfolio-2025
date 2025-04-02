import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Section from "@/app/components/ui/Section";
import { contactData } from "@/public/data/contactData";
import { useLanguage } from "@/app/utils/LanguageContext";

export default function ContactSection() {
	const { language } = useLanguage();

	const handleEmailClick = () => {
		if (window.getSelection().toString()) {
			return;
		}
		window.location.href = `mailto:${contactData.emailPart1}@${contactData.emailPart2}.${contactData.emailPart3}`;
	};

	return (
		<Section id="contact" nbLeftGridRows={2} nbRightGridRows={2}>
			<div className="flex flex-col h-full gap-2">
				<Tile
					customClassName="basis-1/2 md:col-span-3 row-span-2 md:row-span-1 cursor-pointer"
					onClick={handleEmailClick}
				>
					<div className="h-full gap-4 flex flex-col text-center items-center justify-center font-semibold opacity-90">
						<span className="text-base md:text-lg lg:text-xl">
							{contactData.text1[language]}
						</span>
						<span className="text-base md:text-lg lg:text-xl">
							{contactData.text2[language]}{" "}
							<span className="font-bold text-base md:text-lg lg:text-xl text-glow">
								{contactData.emailPart1}@{contactData.emailPart2}.
								{contactData.emailPart3}
							</span>
						</span>
					</div>
				</Tile>
				<div className="flex flex-row basis-1/2 gap-2">
					<div className="flex flex-col md:flex-row w-full gap-2 basis-1/2 md:basis-2/3">
						<Tile
							customClassName="cursor-pointer"
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/calvinchiffot/",
									"_blank"
								)
							}
						>
							<div className="relative h-full w-full flex items-center justify-center">
								<Image
									src="/contact/linkedin-logo.png"
									sizes="100%"
									style={{ objectFit: "contain" }}
									fill
									alt="Logo of Linkedin"
								/>
							</div>
						</Tile>
						<Tile
							customClassName="cursor-pointer"
							onClick={() =>
								window.open("https://github.com/calvinchiff", "_blank")
							}
						>
							<div className="relative h-full w-full flex items-center justify-center">
								<Image
									src="/contact/github-logo.png"
									sizes="100%"
									style={{ objectFit: "contain" }}
									fill
									alt="Logo of Linkedin"
								/>
							</div>
						</Tile>
					</div>
					<div className="basis-1/2 md:basis-1/3">
						<Tile
							customClassName="cursor-pointer"
							onClick={() =>
								window.open(
									`/contact/${language}-CV-CHIFFOT_Calvin.pdf`,
									"_blank"
								)
							}
						>
							<div className="relative h-full w-full flex items-center justify-center">
								<Image
									src="/contact/resume-logo.png"
									sizes="100%"
									style={{ objectFit: "contain" }}
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
