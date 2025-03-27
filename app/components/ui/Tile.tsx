import React from "react";
import BG from "@/app/components/ui/BG";
import Image from "next/image";

interface TileProps {
	title?: string;
	children: React.ReactNode;
	customClassName?: string;
	onClick?: () => void;
	bottomRightCorner?: "arrow" | "toggle" | "checked" | "";
}

export default function Tile({
	title = "",
	children,
	customClassName = "",
	onClick,
	bottomRightCorner = ""
}: TileProps) {
	const imageSrc =
		bottomRightCorner === "arrow"
			? "/general/Arrow_right.png"
			: bottomRightCorner === "toggle"
			? "/Toggle_icon.png"
			: bottomRightCorner === "checked"
			? "/Toggle_checked.png"
			: null;

	return (
		<div
			className={`relative rounded-[35px] backdrop-blur-md p-5 w-full h-full group ${customClassName}`}
			onClick={onClick}
		>
			{/* Background layer */}
			<BG />
			{/* Content layer */}
			<div className="relative opacity-90 flex flex-col h-full">
				{title && <h1>{title}</h1>}
				<div className="w-full h-full relative">{children}</div>
			</div>
			{imageSrc && (
				<div
					className={`h-[4vh] w-[4vh] absolute bottom-4 right-4 ${
						bottomRightCorner === "checked"
							? "opacity-100"
							: "md:opacity-40 md:group-hover:opacity-100"
					} duration-150`}
				>
					<Image
						src={imageSrc}
						alt={bottomRightCorner}
						fill
						objectFit="contain"
					/>
				</div>
			)}
		</div>
	);
}
