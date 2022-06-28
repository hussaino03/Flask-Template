const map = L.map("map", {
  center: [1, 2.044502],
  zoom: 0.95,
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// “Open Street Maps” by https://www.openstreetmap.org/ is licensed under Open Data Commons Open Database License (ODbL) by the OpenStreetMap Foundation (OSMF).
// https://www.openstreetmap.org/copyright

const marker1 = L.marker([25.286106, 51.534817])
  .bindPopup(
    `Doha, Qatar 🇶🇦
    Lived here for ~ 5 years after moving from Lahore, Pakistan`
  )
  .addTo(map);
const marker2 = L.marker([23.8859, 45.0792])
  .bindPopup(
    `Saudi Arabia 🇸🇦
    Visted this place often as it was very close to Qatar`
  )
  .addTo(map);
const marker3 = L.marker([25.2048, 55.2708])
  .bindPopup(
    `Dubai, UAE 🇦🇪 
    A beautiful place with very cool places to visit 
  `
  )
  .addTo(map);

const marker4 = L.marker([41.0082, 28.9784])
  .bindPopup(
    `Istanbul, Turkey 🇹🇷
    Blue Mosque is very beautiful and a must monument to visit`
  )
  .addTo(map);

const marker5 = L.marker([29.749907, -95.358421])
  .bindPopup(
    `Houston, Texas, USA 🏴󠁵󠁳󠁴󠁸󠁿
    The city’s relatively compact Downtown includes the Theater District, home to the renowned Houston Grand Opera, and the Historic District, with 19th-century architecture and upscale restaurants.`
  )
  .addTo(map);

const marker6 = L.marker([40.730610, -73.935242])
  .addTo(map)
  .bindPopup(
    `New York, USA 🏴󠁵󠁳󠁮󠁹󠁿
    Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.`
  );
const marker7 = L.marker([26.2235, 50.5876])
  .bindPopup(
    `Manama, Bahrain 🇧🇭 
    The city's thriving Bab el-Bahrain Souq offers wares from colorful handwoven fabrics and spices to pearls.
  `
  )
  .addTo(map);

const marker8 = L.marker([41.3874, 2.1686])
  .bindPopup(
    `Barcelona, Spain 🇪🇸 
    Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture.`
  )
  .addTo(map);

const marker9 = L.marker([24.8607, 67.0011])
  .bindPopup(
    `Karachi, Pakistan 🇵🇰
    I was born here. Karachi is the largest city in Pakistan and the twelfth-largest city in the world. It is the capital of the Pakistani province of Sindh.`
  )
  .addTo(map);
const marker10 = L.marker([31.5204, 74.3587])
  .bindPopup(
    `Lahore, Pakistan 🇵🇰
    Lahore is the capital of the Pakistani province of Punjab, is Pakistan's 2nd largest city after Karachi, and is the 26th largest city in the world.`
  )
  .addTo(map);
const marker11 = L.marker([48.8566, 2.3522])
  .bindPopup(
    `Paris, France 🇫🇷 
    t's known for its bookshops, including the famed Shakespeare & Company. Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum of Natural History.`
  )
  .addTo(map);
