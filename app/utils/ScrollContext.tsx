"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextType {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const useScrollContext = () => {
	const context = useContext(ScrollContext);
	if (!context) {
		throw new Error("useScrollContext must be used within a ScrollProvider");
	}
	return context;
};

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [activeSection, setActiveSection] = useState<string>("");

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: "-30% 0px -30% 0px", // Zone centrale de 40%
			threshold: 0.5
		};

		const handleIntersection = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
					setActiveSection(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(
			handleIntersection,
			observerOptions
		);

		// Observer toutes les sections avec un petit délai pour s'assurer qu'elles sont montées
		const observeSections = () => {
			const sections = document.querySelectorAll("section[id]");
			sections.forEach((section) => observer.observe(section));
		};

		// Délai pour laisser le temps aux composants de se monter
		const timeoutId = setTimeout(observeSections, 100);

		return () => {
			clearTimeout(timeoutId);
			observer.disconnect();
		};
	}, []);

	return (
		<ScrollContext.Provider value={{ activeSection, setActiveSection }}>
			{children}
		</ScrollContext.Provider>
	);
};
