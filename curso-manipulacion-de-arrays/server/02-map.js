const numbers = [1, 2, 3, 4, 5];

/* const newNumbers = []

for(let i=0; i< numbers.length; i++){
    const number = numbers[i]
    newNumbers.push(number*2)
} */

console.log(newNumbers); // [ 2, 4, 6, 8, 10 ]

// Con map podemos hacer lo mismo que con el for pero de una forma mas sencilla y con menos codigo y mas legible y entendible.
const newNumbers = numbers.map((number) => number * 2);
console.log(newNumbers); // [ 2, 4, 6, 8, 10 ]
