import React from "react";

export const Toggle = ({ isActive = false }) => {
	return (
		<div className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer">
			<div
				className={`w-6 h-6 rounded-full border-2 transition-all duration-150 ${
					isActive
						? "border-white bg-white/20"
						: "border-white/40 opacity-40 group-hover:opacity-80"
				}`}
			>
				{isActive && (
					<div className="w-full h-full rounded-full flex items-center justify-center">
						<div className="w-4 h-4 rounded-full bg-white"></div>
					</div>
				)}
			</div>
		</div>
	);
};
