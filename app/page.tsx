import Image from "next/image";
import Tile from "./components/ui/Tile";
import Grid from "./components/ui/Grid";
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
			<main className="pt-200 gap-4 ">
				<div className="gap-4 snap-y snap-mandatory">
					<Grid id="general">
						<Tile customClassName="col-span-3">tests</Tile>
						<Tile>{translations.en.general.tiles[0].id}</Tile>
						<Tile>{translations.en.general.tiles[1].id}</Tile>
						<Tile>{translations.en.general.tiles[2].id}</Tile>
					</Grid>

					<Grid id="skills">
						<Tile
							customClassName="col-span-2 row-span-2"
							title={translations.en.skills.technicalSkills.title}
						>
							test
						</Tile>
						<Tile title={translations.en.skills.otherSkills.title}>test</Tile>
						<Tile title={translations.en.skills.bonusSkills.title}>test</Tile>
					</Grid>

					<Grid id="career">
						<Tile title="Timeline" customClassName="row-span-2">
							test
						</Tile>
						<Tile title="Details" customClassName="col-span-2 row-span-2">
							test
						</Tile>
					</Grid>
					<Grid customClassName="grid-rows-10 grid-cols-4" id="projects">
						<Tile
							title={translations.en.projects[0].title}
							customClassName="col-span-full row-span-9"
						>
							Projet test
						</Tile>
						<Tile title="Dev" customClassName="col-span-2">
							Dev
						</Tile>
						<Tile title="Craft" customClassName="col-span-2">
							Craft
						</Tile>
					</Grid>
					<Grid id="contact">
						<Tile customClassName="col-span-3 cursor-pointer">
							<p>{translations.en.contact.text1}</p>
							<p>{translations.en.contact.text2}</p>
						</Tile>
						<Tile customClassName="cursor-pointer">
							<Image
								src="/linkedin-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
							/>
						</Tile>
						<Tile customClassName="cursor-pointer">
							<Image
								src="/github-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
							/>
						</Tile>
						<Tile customClassName="cursor-pointer">
							<Image
								src="/linkedin-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
							/>
						</Tile>
					</Grid>
				</div>
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
