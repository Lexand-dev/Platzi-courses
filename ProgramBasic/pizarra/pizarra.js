//addEventListener que reconocen cuando el cursor esta sobre el canvas
pizarra.addEventListener("mouseup", soltar);
pizarra.addEventListener("mousedown", presionar);
pizarra.addEventListener("mousemove", mover_mouse);

//variables importantes
var canvas = document.getElementById("pizarra");
var lienzo = canvas.getContext("2d");
var value_grosor_trazo = document.getElementById("grosor_trazo");
var value_grosor_borrador = document.getElementById("grosor_borrador");
var dibujando = false;
var x = 0;
var y = 0;
var color_trazo = "black";

//funcion de dejar en blanco el canvas, que termina con el color del backgroundColor del mismo
limpiar_canvas = document.getElementById("limpiar_canvas");
limpiar_canvas.addEventListener("click", e =>{lienzo.clearRect(0, 0, canvas.width, canvas.height);} );
//la funcion "e =>" seria lo mismo que function (nombre_de_la_funcion) pero acorta mas el codigo

//funcion para colocar un dato hexadecimal y usarlo en el trazo
var color_trazo_usuario = document.getElementById("trazo_hexadecimal");
var boton_color_trazo_usuario = document.getElementById("boton_trazo_hexadecimal");
boton_color_trazo_usuario.addEventListener("click", e =>{color_trazo = "#" + (color_trazo_usuario.value);});

//funcion para colocar un dato hexadecimal y usarlo en el fondo
var color_fondo_usuario = document.getElementById("fondo_hexadecimal");
var boton_color_fondo_usuario = document.getElementById("boton_fondo_hexadecimal");
boton_color_fondo_usuario.addEventListener("click", function fondo_hexa() {
	lienzo.fillStyle ="#" + color_fondo_usuario.value;
	lienzo.fillRect(0, 0, canvas.width, canvas.height);
} );


//evento que dibuja sobre el canvas
function presionar(evento_presionar) {
	dibujando = true
	x = evento_presionar.offsetX
	y = evento_presionar.offsetY
}

function mover_mouse(evento_mover) {
	if (dibujando == true) {
		dibujarlinea(color_trazo,x,y,evento_mover.offsetX,evento_mover.offsetY, lienzo);
		x = evento_mover.offsetX
		y = evento_mover.offsetY
	}
}

function soltar() {
	dibujando = false;
}

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
			lienzo.beginPath();
			lienzo.strokeStyle = color;
			lienzo.lineWidth = parseInt(value_grosor_trazo.value);
			lienzo.moveTo(xinicial,yinicial);
			lienzo.lineTo(xfinal,yfinal);
			lienzo.stroke();
			lienzo.closePath();
		}

//Funcion de borrar, aun no funciona como deberia :'l, para dejar transparente el lienzo solo con el background del canvas.
//Es mejor colocar un dato no hexadecimal al trazo en la casilla de texto y darle al boton "elegir color del trazo"
pizarra.addEventListener("mouseup", soltar_borrador);
pizarra.addEventListener("mousedown", presionar_borrador);
pizarra.addEventListener("mousemove", mover_borrador);
function borrador_pizarra(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
			lienzo.beginPath();
			lienzo.strokeStyle = color;
			lienzo.lineWidth = parseInt(value_grosor_borrador.value);
			lienzo.moveTo(xinicial,yinicial);
			lienzo.lineTo(xfinal,yfinal);
			lienzo.stroke();
			lienzo.closePath();
		}

var borrador = document.getElementById("borrador");
borrador.addEventListener("click", presionar_borrador);
var borrando = false;
var borrador_color = "whitesmoke";

function presionar_borrador(evento_presionar_borrador) {
	borrando = true
	x = evento_presionar_borrador.offsetX
	y = evento_presionar_borrador.offsetY
}

function mover_borrador(evento_mover_borrador) {
	if (borrando == true) {
		borrador_pizarra("whitesmoke",x,y,evento_mover_borrador.offsetX,evento_mover_borrador.offsetY, lienzo);
		//lienzo.clearRect(x,y,evento_mover_borrador.offsetX,evento_mover_borrador.offsetY); intento fallido de borrador :'l
		x = evento_mover_borrador.offsetX
		y = evento_mover_borrador.offsetY
	}
}

function soltar_borrador() {
	borrando = false;
}


//funciones de todos los botones para cambiar el color del fondo
var fondo_negro = document.getElementById("fondo_negro");
fondo_negro.addEventListener("click", e => {lienzo.fillStyle ="black";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_blanco = document.getElementById("fondo_blanco");
fondo_blanco.addEventListener("click", e => {lienzo.fillStyle ="white";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_rojo = document.getElementById("fondo_rojo");
fondo_rojo.addEventListener("click", e => {lienzo.fillStyle ="red";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_azul = document.getElementById("fondo_azul");
fondo_azul.addEventListener("click", e => {lienzo.fillStyle ="blue";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_verde = document.getElementById("fondo_verde");
fondo_verde.addEventListener("click", e => {lienzo.fillStyle ="green";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_amarillo = document.getElementById("fondo_amarillo");
fondo_amarillo.addEventListener("click", e => {lienzo.fillStyle ="yellow";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_cian = document.getElementById("fondo_cian");
fondo_cian.addEventListener("click", e => {lienzo.fillStyle ="cyan";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_magenta = document.getElementById("fondo_magenta");
fondo_magenta.addEventListener("click", e => {lienzo.fillStyle ="magenta";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_cafe = document.getElementById("fondo_cafe");
fondo_cafe.addEventListener("click", e => {lienzo.fillStyle ="brown";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_gris = document.getElementById("fondo_gris");
fondo_gris.addEventListener("click", e => {lienzo.fillStyle ="gray";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_naranja = document.getElementById("fondo_naranja");
fondo_naranja.addEventListener("click", e => {lienzo.fillStyle ="orange";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_teal = document.getElementById("fondo_teal");
fondo_teal.addEventListener("click", e => {lienzo.fillStyle ="teal";lienzo.fillRect(0, 0, canvas.width, canvas.height);});
var fondo_rosa = document.getElementById("fondo_rosa");
fondo_rosa.addEventListener("click", e => {lienzo.fillStyle ="pink";lienzo.fillRect(0, 0, canvas.width, canvas.height);});

//funciones de todos los botones para cambiar el color del trazo
var boton_negro = document.getElementById("boton_negro");
boton_negro.addEventListener("click", trazo_negro);function trazo_negro(){color_trazo = "black";}
var boton_blanco = document.getElementById("boton_blanco");
boton_blanco.addEventListener("click", trazo_blanco);function trazo_blanco(){color_trazo = "white";}
var boton_rojo = document.getElementById("boton_rojo");
boton_rojo.addEventListener("click", trazo_rojo);function trazo_rojo(){color_trazo = "red";}
var boton_azul = document.getElementById("boton_azul");
boton_azul.addEventListener("click", trazo_azul);function trazo_azul(){color_trazo = "blue";}
var boton_verde = document.getElementById("boton_verde");
boton_verde.addEventListener("click", trazo_verde);function trazo_verde(){color_trazo = "green";}
var boton_amarillo = document.getElementById("boton_amarillo");
boton_amarillo.addEventListener("click", trazo_amarillo);function trazo_amarillo(){color_trazo = "yellow";}
var boton_cian = document.getElementById("boton_cian");
boton_cian.addEventListener("click", trazo_cian);function trazo_cian(){color_trazo = "cyan";}
var boton_magenta = document.getElementById("boton_magenta");
boton_magenta.addEventListener("click", trazo_magenta);function trazo_magenta(){color_trazo = "magenta";}
var boton_cafe = document.getElementById("boton_cafe");
boton_cafe.addEventListener("click", trazo_cafe);function trazo_cafe(){color_trazo = "brown";}
var boton_gris = document.getElementById("boton_gris");
boton_gris.addEventListener("click", trazo_gris);function trazo_gris(){color_trazo = "gray";}
var boton_naranja = document.getElementById("boton_naranja");
boton_naranja.addEventListener("click", trazo_naranja);function trazo_naranja(){color_trazo = "orange";}
var boton_teal = document.getElementById("boton_teal");
boton_teal.addEventListener("click", trazo_teal);function trazo_teal(){color_trazo = "teal";}
var boton_rosa = document.getElementById("boton_rosa");
boton_rosa.addEventListener("click", trazo_rosa);function trazo_rosa(){color_trazo = "pink";}
//aqui no cambie los function() por e => para no olvidadarme bien que era e =>





/* algunas cosas que aparte del codigo cuando estaba haciendo la funcion de cambiar el color de fondo

lienzo.fillStyle = color_fondo;
lienzo.fillRect(0, 0, canvas.width, canvas.height);
canvas.style.setProperty("background-color", color_fondo);
canvas.style.backgroundColor = "black";
*/