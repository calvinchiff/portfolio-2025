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

export default function Home() {
	//navbar
	const listNavbar = translations.en.navbar.map((x) => (
		<Link key={x.id} href={x.link} className="cursor-pointer hover:underline">
			{x.title}
		</Link>
	));

	return (
		<div className="font-[family-name:var(--font-exo)] text-white scroll-smooth">
			{/* Navbar */}
			<header className="fixed top-0 left-0 w-full shadow-md p-4 backdrop-blur-sm flex justify-center z-50">
				<div className="absolute top-0 left-0 w-full h-full bg-[#2B2B2B] -z-10 opacity-70"></div>
				<ul className="relative flex gap-6">{listNavbar}</ul>
			</header>

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

			<main className="flex flex-col pt-20 gap-2">
				<GeneralGrid />

				<SkillsGrid />

				<CareerGrid />

				<ProjectsGrid />

				<ContactGrid />
			</main>
			<footer>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn
				</a>
			</footer>
		</div>
	);
}
