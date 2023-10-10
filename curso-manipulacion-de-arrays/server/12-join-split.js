const elements = ["Fire", "Air", "Water"];

let rtaFinal = "";
const separator = "--";
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  rtaFinal = rtaFinal + element + separator;
}

// join es un metodo que nos permite unir todos los elementos de un array en un string, y podemos pasarle un separador como parametro para que separe los elementos del array con ese separador que le pasamos como parametro a la funcion join en este caso  el separador es  - y lo que hace es unir todos los elementos del array en un string separados por  --  y lo guarda en la variable urlFinal que es un string y lo imprime por consola con el console.log que esta  al final del codigo y nos muestra por consola  curso-de-manipulacion-de-arrays
const rta = elements.join("--");
console.log("for", rtaFinal);
console.log("join", rta);

const title = "Curso de manipulación de arrays";

const urlFinal = title.split(" ").join("-").toLowerCase();
console.log(urlFinal);
