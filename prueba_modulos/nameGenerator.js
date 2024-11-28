// const randomizer = {
//   getRandomName: function() {
//     const names = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5"];

//     const randomIndex = Math.floor(Math.random() * names.length);
//     return names[randomIndex];
//   }
// }

function getRandomName() {
  const names = ["Nombre1", "Nombre2", "Nombre3", "Nombre4", "Nombre5"];

  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

// module.exports = randomizer;
module.exports = { getRandomName };
