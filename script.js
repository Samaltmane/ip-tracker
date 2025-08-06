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
