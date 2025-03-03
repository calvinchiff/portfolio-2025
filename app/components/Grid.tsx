import React from "react";

export default function Grid({ children }) {
	return (
		<div className="grid grid-cols-3 grid-rows-2 gap-4 bg-amber-500 w-full max-w-screen-md mx-auto">
			{children}
		</div>
	);
}
