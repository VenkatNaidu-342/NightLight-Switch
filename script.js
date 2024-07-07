const button = document.getElementById("toggleButton");
const body = document.body;
button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
});