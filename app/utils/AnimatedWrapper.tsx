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
	if (el.children.length !== 0) return;

	const finalText = el.textContent ?? "";
	if (!finalText.trim()) return;
	if (el.dataset.scrambling === "1") return;

	el.dataset.scrambling = "1";

	// 🔧 dynamic iterations based on duration (~60fps)
	const iterations = Math.max(8, Math.round((duration / 1000) * 60));
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
			el.textContent = finalText;
			delete el.dataset.scrambling;
		}
	};

	step();
};

export default function AnimatedWrapper({
	children,
	animationClass = "fade-in-text",
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

		const animate = (node: Node) => {
			if (!(node instanceof HTMLElement)) return;
			if (!TEXT_TAGS.includes(node.tagName)) return;

			node.classList.remove(animationClass);
			void node.offsetWidth;
			node.classList.add(animationClass);

			scrambleText(node, 700); // 🔧 use the hardcoded duration
		};

		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				mutation.addedNodes.forEach(animate);

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
