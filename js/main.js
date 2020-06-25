
var map = L.map('mapa').setView([10.084178, -69.321917], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([10.084178, -69.321917]).addTo(map)
.bindPopup('Alfareros del Gres')
.openPopup();

