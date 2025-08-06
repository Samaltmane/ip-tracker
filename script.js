// ✅ Fetch IP info using ipapi.co
fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(data => {
    const info = `
      <p><strong>IP:</strong> ${data.ip}</p>
      <p><strong>City:</strong> ${data.city}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Country:</strong> ${data.country_name}</p>
      <p><strong>Postal:</strong> ${data.postal}</p>
      <p><strong>ISP:</strong> ${data.org}</p>
    `;
    document.getElementById("ip-info").innerHTML = info;
  })
  .catch(error => {
    document.getElementById("ip-info").innerHTML = "<p>Error loading IP info.</p>";
    console.error("IP fetch error:", error);
  });

// ✅ Dark mode toggle logic
const themeToggle = document.getElementById("toggle-theme");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Save theme preference
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ✅ Load saved theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
