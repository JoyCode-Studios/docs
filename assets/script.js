// ------------------------------
// Theme Switching (CSS File Swap)
// ------------------------------

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("joycode-theme");
const themeIcon = document.getElementById("theme-icon");
const themeStylesheet = document.getElementById("themeStylesheet");

// Determine initial theme
let theme;

if (savedTheme) {
    theme = savedTheme;
} else {
    theme = prefersDark ? "dark" : "light";
}

// Apply initial theme
if (theme === "dark") {
    themeStylesheet.href = "../assets/dark.css";
    themeIcon.textContent = "☀️";
} else {
    themeStylesheet.href = "../assets/style.css";
    themeIcon.textContent = "🌙";
}

// Save theme
localStorage.setItem("joycode-theme", theme);

// ------------------------------
// Toggle theme on click
// ------------------------------
themeIcon.addEventListener("click", () => {
    const isDark = themeStylesheet.href.includes("dark.css");

    if (isDark) {
        themeStylesheet.href = "../assets/style.css";
        themeIcon.textContent = "🌙";
        localStorage.setItem("joycode-theme", "light");
    } else {
        themeStylesheet.href = "../assets/dark.css";
        themeIcon.textContent = "☀️";
        localStorage.setItem("joycode-theme", "dark");
    }
});

// ------------------------------
// Optional: Press "T" to toggle
// ------------------------------
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t") {
        const isDark = themeStylesheet.href.includes("dark.css");

        if (isDark) {
            themeStylesheet.href = "../assets/style.css";
            themeIcon.textContent = "🌙";
            localStorage.setItem("joycode-theme", "light");
        } else {
            themeStylesheet.href = "../assets/dark.css";
            themeIcon.textContent = "☀️";
            localStorage.setItem("joycode-theme", "dark");
        }
    }
});
