"use client";

import { useEffect, useRef } from "react";

const TEXT_TAGS = [
	"H1",
	"H2",
	"H3",
	"H4",
	"H5",
	"H6",
	"P",
	"SPAN",
	"LI",
	"A",
	"STRONG",
	"EM",
	"LABEL",
	"BUTTON"
];

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

/** Scramble letters until the final text is revealed */
const scrambleText = (el: HTMLElement, duration = 700) => {
	// only touch plain-text elements – no children allowed
	if (el.children.length !== 0) return;

	const finalText = el.textContent ?? "";
	if (!finalText.trim()) return; // ignore empty strings
	if (el.dataset.scrambling === "1") return; // already running

	el.dataset.scrambling = "1";
	const iterations = 14; // how many redraws
	let frame = 0;

	const step = () => {
		const pct = frame / iterations;
		const displayed = finalText
			.split("")
			.map((ch, i) =>
				i < pct * finalText.length
					? ch
					: CHARS[Math.floor(Math.random() * CHARS.length)]
			)
			.join("");

		el.textContent = displayed;

		if (frame++ < iterations) {
			requestAnimationFrame(step);
		} else {
			el.textContent = finalText; // restore real text
			delete el.dataset.scrambling;
		}
	};

	step();
};

export default function AnimatedWrapper({
	children,
	animationClass = "fade-in-text", // your existing fade class
	className = ""
}: {
	children: React.ReactNode;
	animationClass?: string;
	className?: string;
}) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const root = ref.current;
		if (!root) return;

		/** Trigger both fade-in and scramble on a node */
		const animate = (node: Node) => {
			if (!(node instanceof HTMLElement)) return;
			if (!TEXT_TAGS.includes(node.tagName)) return;

			node.classList.remove(animationClass);
			void node.offsetWidth; // force reflow
			node.classList.add(animationClass);

			scrambleText(node);
		};

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				// new nodes (React replaced element)
				mutation.addedNodes.forEach(animate);

				// direct text edits (React edited existing text node)
				if (
					mutation.type === "characterData" &&
					mutation.target.parentElement &&
					TEXT_TAGS.includes(mutation.target.parentElement.tagName)
				) {
					animate(mutation.target.parentElement);
				}
			});
		});

		observer.observe(root, {
			childList: true,
			subtree: true,
			characterData: true
		});

		return () => observer.disconnect();
	}, [animationClass]);

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
}
