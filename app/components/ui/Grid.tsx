import React from "react";

export default function Grid({ customClassName, id = "", children }) {
	return (
		<div
			id={id}
			className={`grid grid-cols-3 grid-rows-2 auto-rows-[20fr] gap-2 min-h-[400px] min-w-[600px] h-[40vw] w-[60vw] mx-auto ${customClassName} snap-center snap-always`}
		>
			{children}
		</div>
	);
}
