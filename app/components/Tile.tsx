import React from "react";

export default function Tile({ title = "", children, customClassName = "" }) {
	return (
		<div className={`p-4 rounded-xl bg-blue-400 ${customClassName}`}>
			{title && <h1 className="">{title}</h1>}
			<div>{children}</div>
		</div>
	);
}
