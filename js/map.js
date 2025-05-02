document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map if the map container exists
  const mapContainer = document.getElementById("map")

  if (mapContainer) {
    // Create a map centered at the restaurant location
    // Using a placeholder location (Madrid, Spain)
    const map = L.map("map").setView([40.416775, -3.70379], 15)

    // Add OpenStreetMap tiles
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Add a marker for the restaurant
    const marker = L.marker([40.416775, -3.70379]).addTo(map)

    // Add a popup to the marker
    marker.bindPopup("<strong>La Buena Mesa</strong><br>Calle Principal 123<br>Madrid, España").openPopup()
  }
})
