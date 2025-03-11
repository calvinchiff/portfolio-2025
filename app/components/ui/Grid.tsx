import React from "react";

export default function Grid({ customClassName, id = "", children }) {
	return (
		<div className="overflow-hidden flex flex-nowrap justify-center items-center w-full h-[400px] lg:h-[600px] gap-2 ">
			<div className="blur-[1px] h-full min-w-[600px] lg:min-w-[900px]">
				<div className="mask-gradient mask-left h-full w-full bg-[#2b2b2b2b] opacity-100 border-2 border-white rounded-[35px]" />
			</div>
			<div
				id={id}
				className={`grid grid-cols-3 grid-rows-2 gap-2 h-full min-w-[600px] lg:min-w-[900px] ${customClassName}`}
			>
				{children}
			</div>

			<div className=" blur-[1px] h-full min-w-[600px] lg:min-w-[900px]">
				<div className="mask-gradient mask-top-right h-full w-full bg-[#2B2B2B2B] opacity-100 border-2 border-white rounded-[35px]" />
			</div>
		</div>
	);
}
