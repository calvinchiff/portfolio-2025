import React from "react";
import { useScrollContext } from "@/app/utils/ScrollContext";
import BGTile from "@/app/components/ui/BGTile";

type SectionProps = {
	customGridClassName?: string;
	id: string;
	children: React.ReactNode;
	nbLeftGridRows?: 0 | 1 | 2;
	nbRightGridRows?: 0 | 1 | 2;
};

const InvisGridStyle = "blur-[1px]";
const InvisSideTileStyle = "relative h-full w-full mask-gradient ";
const InvisTileStyle = "blur-[2px] opacity-50";
const VisTileStyle = "opacity-90";

const renderInvisGrid = (
	position: "left" | "right",
	nbGridRows = 0,
	isActive: boolean
) => {
	const maskTop = position === "left" ? "mask-top-left" : "mask-top-right";
	const maskBottom =
		position === "left" ? "mask-bottom-left" : "mask-bottom-right";
	const maskSingle = position === "left" ? "mask-left" : "mask-right";
	const gridRowsSize = nbGridRows === 1 ? "grid-row-1" : "grid-row-2";
	return (
		<div
			className={`grid ${gridRowsSize} gap-2 h-full min-w-[200px] md:min-w-[300px] transition-all duration-300 ease-in-out ${
				isActive ? "opacity-90" : "opacity-0"
			}`}
		>
			{nbGridRows >= 1 && (
				<div
					className={`${InvisSideTileStyle} ${
						nbGridRows === 2 ? maskTop : maskSingle
					}`}
				>
					<BGTile />
				</div>
			)}
			{nbGridRows === 2 && (
				<div className={`${InvisSideTileStyle} ${maskBottom}`}>
					<BGTile />
				</div>
			)}
		</div>
	);
};

export default function Section({
	customGridClassName,
	id,
	children,
	nbLeftGridRows = 0,
	nbRightGridRows = 0
}: SectionProps) {
	const { activeSection } = useScrollContext();
	const isActive = activeSection === id;
	return (
		<section id={id} className="snap-center">
			<div className="overflow-hidden flex justify-center items-center w-full md:min-h-[500px] xl:min-h-[525px] h-[65vh] max-h-[600px] gap-2">
				{/* Left invis grid */}
				{renderInvisGrid("left", nbLeftGridRows, isActive)}
				<div
					className={`gap-2 h-full max-w-[90vw] aspect-[3/2] ${customGridClassName} ${
						isActive ? VisTileStyle : InvisTileStyle
					} transition-all duration-300 ease-in-out
					}`}
				>
					{children}
				</div>
				{/* Right invis grid */}
				{renderInvisGrid("right", nbRightGridRows, isActive)}
			</div>
		</section>
	);
}
