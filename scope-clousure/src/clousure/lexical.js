const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

//Agrege una funcion que trae un numero aleatorio (fije el rango en 0 y 99 pero se puede cambiar) y llamo en el primer console.log al valor firstNum mientras que en el segundo console.log (el return) llamo a la suma de firstNum+secondNum

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function sumWithClosure(firstNum) {
  console.log(firstNum);

  function parent(secondNum) {
    console.log(firstNum + secondNum);
  }

  return parent(getRandomInt(0, 99));
}
return sumWithClosure(getRandomInt(0, 99));
