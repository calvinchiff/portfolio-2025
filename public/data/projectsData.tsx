export const projectsData = {
	contentTitles: {
		description: { en: "Description", fr: "Description" },
		date: { en: "Date", fr: "Date" },
		lien: { en: "Lien", fr: "Lien" },
		techno: { en: "Techno", fr: "Techno" },
		state: { en: "State", fr: "État" }
	},
	projects: {
		dev: [
			{
				id: "1",
				title: { en: "Portfolio", fr: "Portfolio" },
				description: {
					en: "It's the portfolio you are watching rn !",
					fr: "C'est le portfolio que vous regardez en ce moment même !"
				},
				link: "",
				date: "03-2025",
				techno: "Next.js, Tailwind CSS, Vercel",
				state: { en: "In progress", fr: "En cours" }
			},
			{
				id: "2",
				title: { en: "The Bad Review", fr: "The Bad Review" },
				description: {
					en: "An online game where players enter a name to start playing, with the option to link their Letterboxd profile by providing their account URL. The goal is to guess which movie a review is referring to. Reviews come from linked profiles or from popular reviews with many likes for being particularly funny.",
					fr: "Un jeu en ligne où les joueurs choisissent simplement un pseudo pour commencer à jouer, avec la possibilité d’ajouter leur profil Letterboxd en renseignant l’URL de leur compte. Le but est de deviner à quel film correspond une critique. Les critiques proviennent des profils ajoutés ou de critiques populaires ayant reçu beaucoup de likes parce qu’elles sont particulièrement drôles."
				},
				link: "",
				date: "04-2025",
				techno: "Next.js, Socket.io, Tailwind CSS, Redis",
				state: { en: "In progress", fr: "En cours" }
			}
		],
		craft: [
			{
				id: "1",
				title: { en: "Water level sensor", fr: "Détecteur de niveau d'eau" },
				description: {
					en: "I'm building a wireless sensor system to monitor the water level in my father’s garden tank. The sensor, powered by an STM32, measures the water level and transmits the data via 2.4GHz antennas to another STM32. This second unit is connected to Wi-Fi and sends the data to my server, where it is stored in a database. The information is then accessible through a Next.js web application, allowing real-time monitoring and preventing the tank from overflowing.",
					fr: "Je développe un système de capteur sans fil pour surveiller le niveau d’eau dans la cuve du jardin de mon père. Le capteur, alimenté par un STM32, mesure le niveau d’eau et transmet les données via des antennes 2.4GHz à un autre STM32. Ce second module est connecté en Wi-Fi et envoie les données à mon serveur, où elles sont stockées dans une base de données. Les informations sont ensuite accessibles via une application web développée en Next.js, permettant une surveillance en temps réel et évitant tout risque de débordement de la cuve."
				},
				link: "",
				date: "03-2025",
				techno: "STM32, C/C++, Next.js",
				state: { en: "In progress", fr: "En cours" }
			}
		]
	}
};
