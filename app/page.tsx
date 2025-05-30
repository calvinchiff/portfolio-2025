"use client";

import GeneralGrid from "@/app/components/sections/GeneralSection";
import SkillsGrid from "@/app/components/sections/SkillsSection";
import ContactGrid from "@/app/components/sections/ContactSection";
import ProjectsGrid from "@/app/components/sections/ProjectsSection";
import CareerGrid from "@/app/components/sections/CareerSection";
import Header from "@/app/components/ui/Header";
import Footer from "@/app/components/ui/Footer";
import { LanguageProvider } from "@/app/utils/LanguageContext";

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
				<Footer />
				<div className="min-h-[40vh]"></div>
			</main>
		</LanguageProvider>
	);
}
