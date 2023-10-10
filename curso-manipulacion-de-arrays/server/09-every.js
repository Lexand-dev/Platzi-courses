const numbers = [1, 30, 39, 29, 10, 13];
let rta = true;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element >= 40) {
    rta = false;
  }
}
console.log("for", rta);

//con every se puede hacer lo mismo que el for de arriba pero de una forma mas sencilla y rapida de escribir y leer el codigo y es mas facil de entender que hace el codigo y es mas facil de mantener el codigo y es mas facil de depurar el codigo y es mas facil de hacer pruebas unitarias al codigo.

const rta2 = numbers.every((item) => item <= 40);
console.log("rta2", rta2);
const team = [
  { name: "Nicolas", age: 12 },
  { name: "Andrea", age: 8 },
  { name: "Zulema", age: 2 },
  { name: "Santiago", age: 18 },
];
