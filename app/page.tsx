import Image from "next/image";
import Tile from "./components/Tile";
import Grid from "./components/Grid";
import { translations } from "@/public/translations";

export default function Home() {
	return (
		// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-exo)]">
		// 	<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
		<div className="font-[family-name:var(--font-exo)]">
			<p>test</p>
			<main>
				<Grid>
					<Tile customClassName="bg-gray-100">tests</Tile>
					<Tile>{translations.en.general.tiles[0]}</Tile>
					{/* <Tile>{translations.en.general.tiles[1]}</Tile> */}
					{/* <Tile>{translations.en.general.tiles[2]}</Tile> */}
				</Grid>
			</main>
			{/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"> */}
			<footer>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					{/* <Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/> */}
					Learn
				</a>
			</footer>
		</div>
	);
}
