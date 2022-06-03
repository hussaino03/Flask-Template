const map = L.map("map", {
  center: [-29.5, 145],
  zoom: 3.5,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// “Open Street Maps” by https://www.openstreetmap.org/ is licensed under Open Data Commons Open Database License (ODbL) by the OpenStreetMap Foundation (OSMF).
// https://www.openstreetmap.org/copyright

const marker1 = L.marker([-37.69945, 176.27942]).addTo(map);
const marker2 = L.marker([-27.64331, 153.30514]).addTo(map);
const marker3 = L.marker([-33.95633, 122.15027]).addTo(map);
const marker4 = L.marker([-34.96239, 117.39122]).addTo(map);
const marker5 = L.marker([-17.96121, 122.21482]).addTo(map);
const marker6 = L.marker([-16.50596, 151.75152]).addTo(map);
const marker7 = L.marker([-22.5944, 167.48444]).addTo(map);
const marker8 = L.marker([-37.977, 177.057]).addTo(map);
const marker9 = L.marker([-41.0376, 173.017]).addTo(map);
const marker10 = L.marker([-37.6703, 176.212]).addTo(map);
