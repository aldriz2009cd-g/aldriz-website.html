document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("themeToggle");

    // Apply saved theme on page load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Toggle button
    if (button) {
        button.addEventListener("click", function(e) {
            e.preventDefault(); // stop default action
            document.body.classList.toggle("dark-mode");

            // Save preference
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});
