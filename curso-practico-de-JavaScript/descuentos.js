// variables y funcion base usada en las diferentes soluciones plantedas

const precioOriginal = 120;
const descuento = 18;


function calcularPrecioConDescuento(precio,descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento/100);
    return precioConDescuento;
}

// Solucion 0 creada en clase

/* function buttonPriceDescount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputDescount = document.getElementById("InputDescount")
    const DescountValue = inputDescount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,DescountValue)

    const resultP = document.getElementById("resultP")
    resultP.innerText = "El precio con descuento es $" + precioConDescuento
} */


/* console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})
 */



// Solucion #1
  
// se remplaza por un array de descuentos

/* const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
]; */

/* function buttonPriceDescount() {
    const inputPrice = document.getElementById("InputPrice")
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon")
    const couponValue = inputCoupon.value;

    let descuento; */

// se remplaza switch con condicionales if y else if para la solucion 2

  /*   switch(couponValue) {
      case coupons[0]: // "JuanDC_es_Batman"
        descuento = 15;
      break;
      case coupons[1]: // "pero_no_le_digas_a_nadie"
        descuento = 30;
      break;
      case coupons[2]: // "es_un_secreto"
        descuento = 25;
      break;
    } */

    /* if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + " no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }
    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

    const resultP = document.getElementById("resultP")
    resultP.innerText = "El precio con descuento es $" + precioConDescuento */
/* }  */

// Solucion 2:

//Además, error-first es un patrón de programación donde atrapamos los errores antes de escribir el resto de la lógica de nuestros programas. Aplicar error-first nos puede ayudar a mejorar la legibilidad de nuestro código (es completamente válido tener otra opinión, no te preocupes, cuéntame en los comentarios).

/* Error first con array.includes
La función array.includes() nos permite validar si un elemento ha sido almacenado en el array. Vamos a usar esta función para ejecutar un error si el cupón de los usuarios es inválido (no fue guardado en el array coupons): */

/* if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
}

if (!coupons.includes(couponValue)) {
    alert("El cupón " + couponValue + "no es válido");
 } else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
 } else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
 } else if (couponValue === "es_un_secreto") {
    descuento = 25;
 } */

// Solucion #3

const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
} else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

    




