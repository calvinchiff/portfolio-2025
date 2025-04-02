"use client";

import Image from "next/image";
import GeneralGrid from "@/app/components/sections/GeneralSection";
import SkillsGrid from "@/app/components/sections/SkillsSection";
import ContactGrid from "@/app/components/sections/ContactSection";
import ProjectsGrid from "@/app/components/sections/ProjectsSection";
import CareerGrid from "@/app/components/sections/CareerSection";
import Header from "@/app/components/ui/Header";
import { LanguageProvider } from "./utils/LanguageContext";

export default function Home() {
	return (
		<LanguageProvider>
			<main className="font-[family-name:var(--font-exo)] text-white flex flex-col gap-2 h-[100dvh] snap-y snap-mandatory transition duration-150 overflow-y-scroll z-0 scroll-smooth">
				<Header />

				<div className="fixed top-0 left-0 w-full h-full -z-10">
					<div className="fixed top-0 left-0 w-full h-full -z-10">
						<Image
							src="/background.png"
							alt="Background Image"
							fill
							sizes="100%"
							quality={100}
							style={{ objectFit: "cover", objectPosition: "center" }}
						/>
					</div>
				</div>
				<div className="min-h-[40vh]"></div>
				<GeneralGrid />
				<SkillsGrid />
				<CareerGrid />
				<ProjectsGrid />
				<ContactGrid />
				<div className="min-h-[40vh]"></div>
				<footer>
					{/* <a
						className="fixed bottom-0 left-0 flex items-center gap-2 hover:underline hover:underline-offset-4"
						href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn
					</a> */}
				</footer>
			</main>
		</LanguageProvider>
	);
}
