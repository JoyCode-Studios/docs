const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("joycode-theme");
const themeIcon = document.getElementById("theme-icon");

// Apply saved or preferred theme
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    document.body.classList.add("dark");
    themeIcon.textContent = "☀️";
} else {
    themeIcon.textContent = "🌙";
}

// Toggle theme on click
themeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    themeIcon.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem("joycode-theme", isDark ? "dark" : "light");
});

// Optional: Press "T" to toggle theme
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "t") {
        document.body.classList.toggle("dark");

        const isDark = document.body.classList.contains("dark");
        themeIcon.textContent = isDark ? "☀️" : "🌙";

        localStorage.setItem("joycode-theme", isDark ? "dark" : "light");
    }
});
