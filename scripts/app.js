const buttons = document.querySelectorAll(".button");
const sharePanel = document.querySelector(".share-panel");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		sharePanel.classList.toggle("share-panel--visible");
	});
});
