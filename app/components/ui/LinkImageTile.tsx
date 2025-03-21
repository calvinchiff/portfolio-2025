import React from "react";
import Tile from "./Tile";
import Image from "next/image";
import { handleScrollToId } from "@/app/utils/scroll";

export default function LinkImageTile({
	title = "",
	sectionLink = "",
	imgSrc = ""
}) {
	return (
		<Tile
			title={title}
			customClassName="cursor-pointer hover:text-glow hover:font-bold transition-all duration-150"
			onClick={() => handleScrollToId(sectionLink)}
			bottomRightCorner="arrow"
		>
			<Image
				alt={sectionLink + " logo"}
				src={imgSrc}
				fill
				objectFit="contain"
				className="opacity-90 group-hover:opacity-100 md:blur-xs group-hover:blur-none duration-150"
			/>
		</Tile>
	);
}
