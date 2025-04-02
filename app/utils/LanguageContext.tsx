"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from "react";

type Language = "en" | "fr";

interface LanguageContextType {
	language: Language;
	changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
	language: "en",
	changeLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>("en");

	const changeLanguage = (lang: Language) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

	useEffect(() => {
		const storedLanguage = localStorage.getItem("language");
		if (storedLanguage === "en" || storedLanguage === "fr") {
			setLanguage(storedLanguage);
		} else {
			const browserLanguage = navigator.language.startsWith("fr") ? "fr" : "en";
			setLanguage(browserLanguage);
		}
	}, []);

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context)
		throw new Error("useLanguage must be used within a LanguageProvider");
	return context;
};
