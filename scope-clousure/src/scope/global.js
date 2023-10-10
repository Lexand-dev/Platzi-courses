// variables

var a; // declarando
var b = "b"; // declaramos / asignamos
b = "bb"; // reasignamos
var a = "aa"; // redaclaracion

// Global Scope
var fruit = "apple";
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // Global
  console.log(country);
}

countries();
