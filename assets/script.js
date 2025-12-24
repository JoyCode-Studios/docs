const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("joycode-theme");
const themeIcon = document.getElementById("theme-icon");
const themeStylesheet = document.getElementById("themeStylesheet");

// Full website URLs for GitHub Pages
const LIGHT = "https://joycode-studios.github.io/docs/assets/style.css";
const DARK  = "https://joycode-studios.github.io/docs/assets/dark.css";

// ------------------------------
// Apply saved or preferred theme
// ------------------------------
let theme = savedTheme || (prefersDark ? "dark" : "light");

if (theme === "dark") {
    themeStylesheet.href = DARK;
    themeIcon.textContent = "☀️";
} else {
    themeStylesheet.href = LIGHT;
    themeIcon.textContent = "🌙";
}

localStorage.setItem("joycode-theme", theme);

// ------------------------------
// Toggle theme
// ------------------------------
function toggleTheme() {
    const isDark = themeStylesheet.href === DARK;

    if (isDark) {
        themeStylesheet.href = LIGHT;
        themeIcon.textContent = "🌙";
        localStorage.setItem("joycode-theme", "light");
    } else {
        themeStylesheet.href = DARK;
        themeIcon.textContent = "☀️";
        localStorage.setItem("joycode-theme", "dark");
    }
}

themeIcon.addEventListener("click", toggleTheme);

// Optional: Press "T" to toggle
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t") toggleTheme();
});
