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

const marker1 = L.marker([40.689247, -74.044502])
  .bindPopup(
    `Statue of Liberty, New York City 🗽
    The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.`
  )
  .addTo(map);
const marker2 = L.marker([38.897675, -77.03653])
  .bindPopup(
    `The White House, Washington, DC 🦅
    The White House remains a place where history continues to unfold. 
    There are 132 rooms, 35 bathrooms, and 6 levels in the Residence. There are also 412 doors, 147 windows, 28 fireplaces, 8 staircases, and 3 elevators`
  )
  .addTo(map);
const marker3 = L.marker([36.169941, -115.139832])
  .bindPopup(
    `Las Vegas, Nevada 🎰
    What happens in Vegas stays in Vegas!
  `
  )
  .addTo(map);

const marker4 = L.marker([28.385233, -81.563873])
  .bindPopup(
    `Disney World Resort, Florida 🪄
    I'm a Disney World regular. With four theme parks, two water parks and nearly two dozen hotels, you're stepping into the Most Magical Place on Earth — a world full of fantasy and happiness.`
  )
  .addTo(map);

const marker5 = L.marker([50.075539, 14.4378])
  .bindPopup(
    `Prague, Czech Republic 🇨🇿
    Prague is so beautiful! It is a 3D architecture textbook. Romanesque chapels and cellars, Gothic cathedrals, Baroque palaces and gardens, worldly Art Nouveau buildings, and unique Cubist architecture make it a place with no parallel in the world.`
  )
  .addTo(map);

const marker6 = L.marker([48.1464, 17.10688])
  .addTo(map)
  .bindPopup(
    `Bratislava Castle, Bratislava, Slovakia 🏰
    The castle stands on an important crossroad of the ancient routes. First traces of the settlement on the hill stretch back to the Stone and Bronze Age.`
  );
const marker7 = L.marker([-3.067425, 37.355625])
  .bindPopup(
    `Mount Kilimanjaro 🌋
  Mount Kilimanjaro is the tallest mountain on the African continent and the highest free-standing mountain in the world. 9. Kilimanjaro has three volcanic cones, Mawenzi, Shira and Kibo. Mawenzi and Shira are extinct but Kibo, the highest peak, is dormant and could erupt again.
  `
  )
  .addTo(map);

const marker8 = L.marker([-22.950996196, -43.206499174])
  .bindPopup(
    `Christ the Redeemer Statue, Rio de Janeiro, Brazil ✝️ 
  The statue is a large statue of Christ the Redeemer, the Roman Catholic Archdiocese of Rio de Janeiro, Brazil. It is located in the city of Rio de Janeiro, Brazil.`
  )
  .addTo(map);

const marker9 = L.marker([40.4319, 116.5704])
  .bindPopup(
    `Great Wall of China, Beijing, China 🧱
    The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built across the historical northern borders of China to protect the Chinese states and empires against various nomadic groups, the Mongols, the Japanese, and the Turks.`
  )
  .addTo(map);
const marker10 = L.marker([48.8584, 2.2945])
  .bindPopup(
    `Eiffel Tower, Paris, France 🇫🇷
    The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower.`
  )
  .addTo(map);
const marker11 = L.marker([51.5007, 0.1246])
  .bindPopup(
    `Big Ben, London, England 🕰
    Big Ben is a tower clock known for its accuracy and for its massive hour bell. Strictly speaking, the name refers only to the bell, which weighs 15.1 tons (13.7 metric tons), but it is commonly associated with the whole clock tower at the northern end of the Houses of Parliament, in the London borough of Westminster.`
  )
  .addTo(map);
