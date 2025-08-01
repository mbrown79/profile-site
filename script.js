function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("darkModeBtn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.textContent = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }
}

window.onload = () => {
  // Dark mode setup
  const savedTheme = localStorage.getItem("theme");
  const btn = document.getElementById("darkModeBtn");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (btn) btn.textContent = "☀️ Light Mode";
  }

  // Fade in containers on page load
  document.body.classList.remove("preload");

  // Handle link clicks for fade-out
  const links = document.querySelectorAll("a[href]");
  links.forEach(link => {
    const url = new URL(link.href);
    const isSameSite = url.origin === window.location.origin;

    if (isSameSite) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.href;

        // Select and fade out all containers
        const containers = document.querySelectorAll(".container");
        containers.forEach(container => container.classList.add("fade-out"));

        // Navigate after animation
        setTimeout(() => {
          window.location.href = href;
        }, 500); // Match CSS transition duration
      });
    }
  });
};
