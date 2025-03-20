import React from "react";
import BG from "@/app/components/ui/BG";

export default function Tile({ title = "", children, customClassName = "" }) {
	return (
		<div
			className={`relative rounded-[35px] backdrop-blur-md p-4 w-full h-full ${customClassName}`}
		>
			{/* Background layer */}
			<BG />
			{/* Content layer */}
			<div className="relative opacity-90 flex flex-col h-full">
				{title && <h1 className="text-center md:text-2xl">{title}</h1>}
				<div className="w-full h-full">{children}</div>
			</div>
		</div>
	);
}
