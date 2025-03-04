import React from "react";

export default function Tile({ children, customClassName = "" }) {
	return (
		<div className={`p-4 rounded-xl bg-blue-400 ${customClassName}`}>
			{children}
		</div>
	);
}
