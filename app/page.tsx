import Image from "next/image";
import Tile from "@/app/components/ui/Tile";
import Grid from "@/app/components/ui/Grid";
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
				{/* General section */}
				<Grid id="general">
					<Tile title="Me" customClassName="col-span-3">
						tests
					</Tile>
					<Tile title={translations.en.general.tiles[0].id}></Tile>
					<Tile title={translations.en.general.tiles[1].id}></Tile>
					<Tile title={translations.en.general.tiles[2].id}></Tile>
				</Grid>

				{/* Skills section */}
				<Grid id="skills">
					<Tile
						customClassName="col-span-2 row-span-2"
						title={translations.en.skills.technicalSkills.title}
					>
						JS
					</Tile>
					<Tile title={translations.en.skills.otherSkills.title}>English</Tile>
					<Tile title={translations.en.skills.bonusSkills.title}>Creative</Tile>
				</Grid>

				{/* Career section */}
				<Grid id="career">
					<Tile title="Timeline" customClassName="row-span-2">
						LTTD Consulting
					</Tile>
					<Tile title="Details" customClassName="col-span-2 row-span-2">
						LTTD Consulting 2023-24
					</Tile>
				</Grid>

				{/* Project section */}
				<Grid customClassName="grid-rows-20 grid-cols-4" id="projects">
					<Tile
						title={translations.en.projects[0].title}
						customClassName="col-span-full row-span-17"
					>
						Projet test
					</Tile>
					<Tile
						title="Dev"
						customClassName="col-span-2 row-span-3 cursor-pointer"
					></Tile>
					<Tile
						title="Craft"
						customClassName="col-span-2 row-span-3 cursor-pointer"
					></Tile>
				</Grid>

				{/* Contact section */}
				<Grid id="contact">
					<Tile customClassName="col-span-3 cursor-pointer">
						<div className="h-full gap-4 flex flex-col text-center items-center justify-center">
							<p>{translations.en.contact.text1}</p>
							<p>{translations.en.contact.text2}</p>
						</div>
					</Tile>
					<Tile customClassName="cursor-pointer">
						<div className="h-full w-full flex items-center justify-center">
							<Image
								src="/linkedin-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
							/>
						</div>
					</Tile>
					<Tile customClassName="cursor-pointer">
						<div className="h-full w-full flex items-center justify-center">
							<Image
								src="/github-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
							/>
						</div>
					</Tile>
					<Tile customClassName="cursor-pointer">
						<div className="h-full w-full flex items-center justify-center">
							<Image
								src="/linkedin-logo.png"
								height={160}
								width={160}
								alt="Logo of Linkedin"
								className=""
							/>
						</div>
					</Tile>
				</Grid>
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
