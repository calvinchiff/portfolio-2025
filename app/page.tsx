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
		<div className="font-[family-name:var(--font-exo)] text-white ">
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

			<main className="flex flex-col gap-2 h-[100dvh] overflow-y-auto snap-y snap-mandatory transition duration-150">
				<section className="min-h-[20vh]"></section>
				<section className="snap-center">
					<GeneralGrid />
				</section>
				<section className="snap-center">
					<SkillsGrid />
				</section>
				<section className="snap-center">
					<CareerGrid />
				</section>
				<section className="snap-center">
					<ProjectsGrid />
				</section>
				<section className="snap-center">
					<ContactGrid />
				</section>

				<div className="min-h-[20vh]"></div>
			</main>
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
		</div>
	);
}
