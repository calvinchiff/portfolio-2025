import React from "react";
import clsx from "clsx";

export default function Tile({
	children,
	colSpan = 1,
	rowSpan = "1",
	bg = "bg-blue-500"
}) {
	return (
		<div
			className={clsx(
				"p-4 rounded-md",
				`col-span-${colSpan}`,
				`row-span-${rowSpan}`,
				`${bg}`
			)}
		>
			{children}
		</div>
	);
}
