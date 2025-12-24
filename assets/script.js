// Theme toggle
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("joycode-theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

// Load saved theme
const saved = localStorage.getItem("joycode-theme");
if (saved === "dark") {
    document.body.classList.add("dark");
}
