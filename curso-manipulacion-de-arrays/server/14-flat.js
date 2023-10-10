const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
    const element = matriz[i][j];
    newArray.push(element);
  }
}

// flat es un metodo que nos permite aplanar un array y nos devuelve un array nuevo con los elementos aplanados y podemos pasarle como parametro la profundidad a la que queremos aplanar el array en este caso  la profundidad es  3  y lo que hace es aplanar el array 3 niveles y lo guarda en la variable rta que es un array y lo imprime por consola con el console.log que esta  al final del codigo y nos muestra por consola  [1, 2, 3, 4, 5, 6, 1, 2, 1, 2, 7, 8, 9]
const rta = matriz.flat(3);
console.log("for", newArray);
console.log("flat", rta);
