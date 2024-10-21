const buttons = document.querySelectorAll(".button");
const sharePanel = document.querySelector(".share-panel");

console.log(buttons);
console.log(sharePanel);

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		sharePanel.classList.toggle("share-panel--visible");
		console.log("click");
	});
});
