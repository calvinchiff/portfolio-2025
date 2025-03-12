import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import Section from "@/app/components/ui/Section";
import { translations } from "@/public/translations";

export default function ContactGrid() {
	return (
		<Section nbLeftGridRows={2} nbRightGridRows={2}>
			<Grid
				id="contact"
				customClassName={
					"grid-rows-4 grid-cols-4 sm:grid-rows-2 sm:grid-cols-3"
				}
			>
				<Tile customClassName="col-span-4 sm:col-span-3 row-span-2 sm:row-span-1 cursor-pointer">
					<div className="h-full gap-4 flex flex-col text-center items-center justify-center">
						<p>{translations.en.contact.text1}</p>
						<p>{translations.en.contact.text2}</p>
					</div>
				</Tile>
				<Tile customClassName="col-span-2 sm:col-span-1 cursor-pointer">
					<div className="h-full w-full flex items-center justify-center">
						<Image
							src="/linkedin-logo.png"
							height={160}
							width={160}
							alt="Logo of Linkedin"
						/>
					</div>
				</Tile>
				<Tile customClassName="col-span-2 sm:col-span-1 cursor-pointer">
					<div className="h-full w-full flex items-center justify-center">
						<Image
							src="/github-logo.png"
							height={160}
							width={160}
							alt="Logo of Linkedin"
						/>
					</div>
				</Tile>
				<Tile customClassName="col-span-4 sm:col-span-1 cursor-pointer">
					<div className="h-full w-full flex items-center justify-center">
						<Image
							src="/linkedin-logo.png"
							height={160}
							width={160}
							alt="Logo of Linkedin"
							className=""
						/>
					</div>
				</Tile>
			</Grid>
		</Section>
	);
}
