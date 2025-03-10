import React from "react";

export default function Grid({ customClassName, id = "", children }) {
	return (
		<div
			id={id}
			className={`grid grid-cols-3 grid-rows-2 gap-2 h-[400px] w-[600px] lg:h-[600px] lg:w-[900px] mx-auto ${customClassName}`}
		>
			{children}
		</div>
	);
}
