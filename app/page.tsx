import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
import { translations } from "@/public/translations";
import Link from "next/link";
import GeneralGrid from "./components/grids/GeneralGrid";
import SkillsGrid from "./components/grids/SkillsGrid";
import ContactGrid from "./components/grids/ContactGrid";
import ProjectsGrid from "./components/grids/ProjectsGrid";
import CareerGrid from "./components/grids/CareerGrid";
import Header from "./components/Header";

export default function Home() {
	return (
		<main className="font-[family-name:var(--font-exo)] text-white flex flex-col gap-2 h-[100dvh] snap-y snap-mandatory transition duration-150 overflow-y-scroll z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80 scrollbar-track-gray-400/20 scroll-smooth">
			<Header />

			<div className="fixed top-0 left-0 w-full h-full min-h-full -z-10">
				<Image
					src="/background.png"
					alt="Background Image"
					width={10000}
					height={10000}
					quality={100}
					objectPosition="center"
					priority
				/>
			</div>
			<section className="min-h-[40vh]"></section>
			<GeneralGrid />
			<SkillsGrid />
			<CareerGrid />
			<ProjectsGrid />
			<ContactGrid />
			<div className="min-h-[40vh]"></div>
			<footer>
				<a
					className="fixed bottom-0 left-0 flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn
				</a>
			</footer>
		</main>
	);
}
