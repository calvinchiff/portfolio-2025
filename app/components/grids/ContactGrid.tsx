import React from "react";
import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import { translations } from "@/public/translations";

export default function ContactGrid() {
	return (
		<Grid id="contact">
			<Tile customClassName="col-span-3 cursor-pointer">
				<div className="h-full gap-4 flex flex-col text-center items-center justify-center">
					<p>{translations.en.contact.text1}</p>
					<p>{translations.en.contact.text2}</p>
				</div>
			</Tile>
			<Tile customClassName="cursor-pointer">
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src="/linkedin-logo.png"
						height={160}
						width={160}
						alt="Logo of Linkedin"
					/>
				</div>
			</Tile>
			<Tile customClassName="cursor-pointer">
				<div className="h-full w-full flex items-center justify-center">
					<Image
						src="/github-logo.png"
						height={160}
						width={160}
						alt="Logo of Linkedin"
					/>
				</div>
			</Tile>
			<Tile customClassName="cursor-pointer">
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
	);
}
