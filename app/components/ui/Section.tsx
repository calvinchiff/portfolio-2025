import React from "react";

type SectionProps = {
	customGridClassName: string;
	id: string;
	children: React.ReactNode;
	isCentered: boolean;
	nbLeftGridRows?: 0 | 1 | 2;
	nbRightGridRows?: 0 | 1 | 2;
};

const InvisGridStyle = "blur-[1px]";
const InvisTileStyle =
	"mask-gradient bg-[#2b2b2b2b] opacity-100 border-2 border-white";

const renderInvisGrid = (position: "left" | "right", nbGridRows = 0) => {
	const maskTop = position === "left" ? "mask-top-left" : "mask-top-right";
	const maskBottom =
		position === "left" ? "mask-bottom-left" : "mask-bottom-right";
	const maskSingle = position === "left" ? "mask-left" : "mask-right";
	const gridRowsSize = nbGridRows === 1 ? "grid-row-1" : "grid-row-2";
	return (
		<div
			className={`grid ${gridRowsSize} gap-2 h-full min-w-[200px] lg:min-w-[300px] ${InvisGridStyle}`}
		>
			{nbGridRows >= 1 && (
				<div
					className={`h-full w-full rounded-[35px] ${InvisTileStyle} ${
						nbGridRows === 2 ? maskTop : maskSingle
					}`}
				/>
			)}
			{nbGridRows === 2 && (
				<div
					className={`h-full w-full rounded-[35px] ${InvisTileStyle} ${maskBottom}`}
				/>
			)}
		</div>
	);
};

export default function Section({
	customGridClassName,
	id,
	children,
	isCentered = true,
	nbLeftGridRows = 0,
	nbRightGridRows = 0
}: SectionProps) {
	return (
		<section id={id} className="snap-center">
			<div className="overflow-hidden flex flex-nowrap justify-center items-center w-full h-[65vh] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] gap-2">
				{/* Left invis grid */}
				{renderInvisGrid("left", nbLeftGridRows)}
				<div
					className={`grid grid-cols-3 grid-rows-2 gap-2 h-full aspect-[2/3] sm:aspect-[3/2] ${customGridClassName} ${
						isCentered ? "" : InvisTileStyle + "mask-bottom"
					}`}
				>
					{children}
				</div>
				{/* Right invis grid */}
				{renderInvisGrid("right", nbRightGridRows)}
			</div>
		</section>
	);
}
