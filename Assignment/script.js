const toggleBtn = document.querySelector("#themeToggle");
const body = document.body;

// get saved theme
const savedTheme = localStorage.getItem("theme");

// apply saved theme on page load
if (savedTheme === "dark") {
    body.classList.add("dark");
}

// toggle theme when button is clicked
toggleBtn.addEventListener("click", () => {

    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});