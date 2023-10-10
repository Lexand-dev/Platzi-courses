// Con var
var nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
var nombre = "Oscar"; // redeclaración y reasignación ✅

// Con let
let nombre; // declaración (undefined) ✅
nombre = "Andres"; // asignación ✅
nombre = "Valeria"; // reasignación ✅
let nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const
/* const nombre; */ // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres"; // declaración y asignación ✅
nombre = "Valeria"; // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar"; // SyntaxError: Identifier 'nombre' has already been declared. ❌

const array = ["manzana", "pera"]; // declaración y asignación ✅
array[0] = "piña"; // Cambio de valor en un elemento del array
console.log(array); // [ 'piña', 'pera' ]
const array = [1, 2, 3]; // SyntaxError: Identifier 'array' has already been declared. ❌
