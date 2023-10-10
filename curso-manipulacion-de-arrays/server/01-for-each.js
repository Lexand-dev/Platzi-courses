const letters = ["a", "b", "c"];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log("for", element);
}
//con el forEach no necesitamos crear una variable para el indice y el elemento que se esta recorriendo en el array y podemos hacerlo en una sola linea de codigo.

letters.forEach((item) => console.log("forEach", item));
