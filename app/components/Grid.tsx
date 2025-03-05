import React from "react";

export default function Grid({ id = "", children }) {
	return (
		<div
			id={id}
			className="h-screen grid grid-cols-3 grid-rows-2 auto-rows-[20fr] gap-2 bg-amber-500 min-h-[400px] max-w-screen-md mx-auto "
		>
			{children}
		</div>
	);
}
