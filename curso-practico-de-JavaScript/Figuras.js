/* // codigo del cuadrado
console.group("Cuadrados")

const ladoCuadrado = 5;
console.log("los lados del cuadrdo miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado
console.log("el area del cuadrado es: " + areaCuadrado  + "cm^2")

console.groupEnd()

// codigo del triangulo
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("los lados del triangulo miden: " 
+ ladoTriangulo1 + "cm " 
+ ladoTriangulo2 + "cm " 
+ baseTriangulo + "cm ");

const alturaTriangulo = 5.5;
console.log("La altura del triangulo es: " + alturaTriangulo  + "cm ")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
console.log("El perimetro del triangulo es: " + perimetroTriangulo  + "cm ")

const areaTriangulo = (baseTriangulo*alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo  + "cm^2")

console.groupEnd()

codigo del Circulo
console.group("Circulo")

Radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm ")

Diametro
const diametroCirculo = radioCirculo *2;
console.log("El diametro del circulo es: " + diametroCirculo  + "cm ")
PI
const PI = Math.PI;
console.log("PI es: " + PI)

Circunsferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo  + "cm ")

area 
const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El area del circulo es: " + areaCirculo  + "cm^2")



console.groupEnd() */


//Funciones arrow 

// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;




// Aaui interactuamos con el HTML
function calcularPerimetro () {
    const input = document.getElementById("InputCuadrado");
    const resPerimetro = document.getElementById("pResult");
    const lado = parseInt(input.value)
    const perimetro = perimetroCuadrado(lado);
    resPerimetro.innerHTML = perimetro + " cm";
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const resArea = document.getElementById("aResult");
    const lados = parseInt(input.value)
    const area = areaCuadrado(lados)
    resArea.innerHTML = area + " cm^2";
  
}
