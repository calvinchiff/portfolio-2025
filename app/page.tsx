"use client";

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
				<div className="min-h-[40vh]"></div>
				<GeneralGrid />
				<SkillsGrid />
				<CareerGrid />
				<ProjectsGrid />
				<ContactGrid />
				<footer className="text-center text-sm text-white/50 md:py-8">
					© {new Date().getFullYear()} Calvin Chiffot. All rights reserved.
				</footer>
				<div className="min-h-[40vh]"></div>
			</main>
		</LanguageProvider>
	);
}
