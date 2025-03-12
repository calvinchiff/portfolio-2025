import React from "react";

export default function Grid({ customClassName, id = "", children }) {
	return (
		<div
			id={id}
			className={`grid grid-cols-3 grid-rows-2 gap-2 h-full aspect-[2/3] sm:aspect-[3/2] ${customClassName}`}
		>
			{children}
		</div>
	);
}
