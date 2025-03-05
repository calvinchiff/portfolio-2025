import React from "react";

export default function Tile({ title = "", children, customClassName = "" }) {
	return (
		<div className={`relative rounded-[35] p-4 ${customClassName}`}>
			{/* Background layer */}
			<div className="absolute rounded-[35] inset-0 bg-[#2B2B2B] opacity-70"></div>
			{/* Content layer */}
			<div className="relative opacity-90 text-white">
				{title && <h1 className="">{title}</h1>}
				<div>{children}</div>
			</div>
		</div>
	);
}
