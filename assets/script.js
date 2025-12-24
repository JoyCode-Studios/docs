const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("joycode-theme");
const themeIcon = document.getElementById("theme-icon");
const themeStylesheet = document.getElementById("themeStylesheet");

// ------------------------------
// Apply saved or preferred theme
// ------------------------------
let theme = savedTheme || (prefersDark ? "dark" : "light");

if (theme === "dark") {
    themeStylesheet.href = themeStylesheet.href.replace("style.css", "dark.css");
    themeIcon.textContent = "☀️";
} else {
    themeIcon.textContent = "🌙";
}

localStorage.setItem("joycode-theme", theme);

// ------------------------------
// Toggle theme
// ------------------------------
function toggleTheme() {
    const isDark = themeStylesheet.href.includes("dark.css");

    if (isDark) {
        themeStylesheet.href = themeStylesheet.href.replace("dark.css", "style.css");
        themeIcon.textContent = "🌙";
        localStorage.setItem("joycode-theme", "light");
    } else {
        themeStylesheet.href = themeStylesheet.href.replace("style.css", "dark.css");
        themeIcon.textContent = "☀️";
        localStorage.setItem("joycode-theme", "dark");
    }
}

themeIcon.addEventListener("click", toggleTheme);

// Optional: Press "T" to toggle
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t") toggleTheme();
});
