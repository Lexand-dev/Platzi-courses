const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);
const words = [
  "réservé",
  "premier",
  "communiqué",
  "café",
  "adieu",
  "éclair",
  "banana",
];

//con sort y localeCompare podemos ordenar un array de strings y nos devuelve un array ordenado alfabeticamente y sin importar si las palabras estan en mayusculas o minusculas y sin importar si las palabras tienen acentos o no y sin importar si las palabras tienen caracteres especiales o no y sin importar si las palabras tienen caracteres especiales o no
words.sort((a, b) => a.localeCompare(b));
console.log(words);
const orders = [
  {
    customerName: "Nicolas",
    total: 600,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 1840,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
//con sort podemos ordenar un array de objetos y nos devuelve un array ordenado por el total de cada objeto y en este caso lo ordena de mayor a menor
orders.sort((a, b) => b.total - a.total);
console.log(orders);
