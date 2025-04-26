export const handleScrollToId = (id: string) => {
	const element = document.getElementById(id);
	const main = document.querySelector("main");
	if (element && main) {
		main.scrollTo({
			top: element.offsetTop,
			behavior: "smooth"
		});
	}
};
