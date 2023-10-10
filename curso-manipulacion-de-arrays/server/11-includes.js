const pets = ["cat", "dog", "bat"];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
  const element = pets[index];
  if (element === "dog") {
    includeInArray = true;
    break;
  }
}

// includes es un metodo que nos permite saber si un elemento esta dentro de un array y nos devuelve un booleano  true o false  dependiendo si lo encuentra o no  dentro del array  respectivamente
const rta = pets.includes("dog");
console.log("for", includeInArray);
console.log("includes", rta);
