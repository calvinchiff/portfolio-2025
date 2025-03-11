import React from "react";

export default function Tile({ title = "", children, customClassName = "" }) {
	return (
		<div
			className={`relative rounded-[35px] backdrop-blur-sm p-4 w-full h-full ${customClassName}`}
		>
			{/* Background layer */}
			<div className="absolute rounded-[35px] inset-0 bg-[#2B2B2B] opacity-70 "></div>
			{/* Content layer */}
			<div className="relative opacity-90 flex flex-col h-full">
				{title && <h1 className="text-center">{title}</h1>}
				<div className="w-full h-full">{children}</div>
			</div>
		</div>
	);
}
