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
					en: "It's the portfolio you are watching right now !",
					fr: "C'est le portfolio que vous regardez en ce moment même !"
				},
				link: "",
				date: "03-2025",
				techno:
					"Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Figma, Docker, GitHub Actions, VPS Linux, Nginx",
				state: { en: "Done", fr: "Terminé" }
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
				techno:
					"Next.js, TypeScript, Tailwind CSS, Socket.io, Figma, Express, PostgreSQL, Prisma, Jest, Docker, GitHub Actions",
				state: {
					en: "On hold – API access unavailable",
					fr: "Suspendu – Pas d’accès à l’API Letterboxd"
				}
			},
			{
				id: "3",
				title: { en: "Mangatheque API", fr: "Mangatheque API" },
				description: {
					en: "Built the backend for Mangatheque, an app that helps users keep track of their manga collections. Developed a secure API for user authentication and set up the database using NodeJS, MySQL, and Sequelize. Configured CI/CD pipelines to ensure smooth deployment and integration, utilizing Docker, GCP, and GitHub Actions.",
					fr: "Développement du backend pour Mangatheque, une application permettant aux utilisateurs de suivre leur collection de mangas. Création d’une API sécurisée pour l’authentification des utilisateurs et mise en place de la base de données avec NodeJS, MySQL et Sequelize. Configuration des pipelines CI/CD pour assurer une intégration et un déploiement fluides, en utilisant Docker, GCP et GitHub Actions."
				},
				link: "",
				date: "03-2024",
				techno: "Node.js, MySQL, Sequelize, Docker, GCP, GitHub Actions",
				state: { en: "Done", fr: "Terminé" }
			}
		],
		craft: [
			{
				id: "1",
				title: { en: "Water level sensor", fr: "Détecteur de niveau d'eau" },
				description: {
					en: "I'm building a wireless sensor system to monitor the water level in my father’s garden tank. The sensor, built with an STM32, measures the water level and transmits the data via 2.4GHz antennas to a second STM32 unit. This receiving unit is connected to Wi-Fi, sends the data to my server, and features a built-in screen that displays the current water level, temperature, and upcoming weather forecasts locally.",
					fr: "Je développe un système de capteur sans fil pour surveiller le niveau d’eau dans la cuve du jardin de mon père. Le capteur, conçu avec un STM32, mesure le niveau d’eau et transmet les données via des antennes 2.4GHz à une seconde unité STM32. Ce module récepteur est connecté en Wi-Fi, envoie les données à mon serveur, et dispose d’un écran intégré affichant localement le niveau d’eau, la température ainsi que les prévisions météo."
				},
				link: "",
				date: "03-2025",
				techno: "STM32, C/C++, Next.js, Node.js, MySQL, Docker",
				state: { en: "In progress", fr: "En cours" }
			}
		]
	}
};
