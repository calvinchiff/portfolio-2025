"use client";

import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState
} from "react";

interface LanguageContextType {
	language: "en" | "fr";
	changeLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<string>("en");

	useEffect(() => {
		const storedLanguage = localStorage.getItem("language");
		if (storedLanguage) {
			setLanguage(storedLanguage);
		} else {
			const browserLanguage = navigator.language.startsWith("fr") ? "fr" : "en";
			setLanguage(browserLanguage);
		}
	}, []);

	const changeLanguage = (lang: string) => {
		setLanguage(lang);
		localStorage.setItem("language", lang);
	};

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
