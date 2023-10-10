// Ejemplo usando el modo estricto

nombre = "Andres";
console.log(nombre); // "Andres"

// En modo estricto, no te permitirá realizar esto y provocará un error.
// "use strict";

nombre = "Andres";
console.log(nombre); // ReferenceError: nombre is not defined

// Ejemplo usando el modo estricto en una función

function myFunction() {
  return (pi = 3.14);
}

console.log(myFunction()); // 3.14

//En modo estricto, no te permitirá realizar esto y provocará un error.
//"use strict";

function myFunction() {
  return (pi = 3.14);
}

console.log(myFunction()); // ReferenceError: pi is not defined
