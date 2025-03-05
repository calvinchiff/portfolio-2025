import Image from "next/image";
import Tile from "./components/Tile";
import Grid from "./components/Grid";
import { translations } from "@/public/translations";
import Link from "next/link";

export default function Home() {
	//navbar
	const listNavbar = translations.en.navbar.map((x) => (
		<Link key={x.id} href={x.link} className="cursor-pointer hover:underline">
			{x.title}
		</Link>
	));

	return (
		<div className="font-[family-name:var(--font-exo)] scroll-smooth">
			<header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-center z-50">
				<ul className="flex gap-6">{listNavbar}</ul>
			</header>
			<main className="pt-20 gap-4">
				<Grid id="general">
					<Tile customClassName="col-span-3">tests</Tile>
					<Tile>{translations.en.general.tiles[0]}</Tile>
					<Tile>{translations.en.general.tiles[1]}</Tile>
					<Tile>{translations.en.general.tiles[2]}</Tile>
				</Grid>

				<Grid id="skills">
					<Tile title={translations.en.skills.technicalSkills.title}>test</Tile>
					<Tile title={translations.en.skills.otherSkills.title}>test</Tile>
					<Tile title={translations.en.skills.bonusSkills.title}>test</Tile>
				</Grid>

				<Grid id="career">career</Grid>
				<Grid id="projects">projects</Grid>
				<Grid id="contacts">contacts</Grid>
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
