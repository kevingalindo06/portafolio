
var inputc = document.getElementById("datos");
let mensaje = "";

inputc.focus();

let registro = document.getElementById("registro");


/*function nombre(inputc,mensaje) {

const typewriter = new Typewriter(inputc, {
    loop:true,
    delay:75
});

typewriter
.typeString(mensaje)
.pauseFor(500)
.start();

}

nombre(inputc,mensaje);

*/









var clear = document.getElementById("button_AC")
var parentesis = document.getElementById("button_()")
var porcentaje = document.getElementById("button_%")
var division = document.getElementById("button_div")

var siete = document.getElementById("button_7")
var ocho = document.getElementById("button_8")
var nueve = document.getElementById("button_9")
var multiplicacion = document.getElementById("button_x")

var cuatro = document.getElementById("button_4")
var cinco = document.getElementById("button_5")
var seis = document.getElementById("button_6")
var resta = document.getElementById("button_-")

var uno = document.getElementById("button_1")
var dos = document.getElementById("button_2")
var tres = document.getElementById("button_3")
var suma = document.getElementById("button_+")

var zero = document.getElementById("button_0")
var punto = document.getElementById("button_punto")
var borrador = document.getElementById("button_del")
var igual = document.getElementById("button_=")



uno.onclick = function (e) {
    inputc.value = inputc.value + "1";
    registro.textContent = registro.textContent + "1";
}

dos.onclick = function (e) {
    inputc.value = inputc.value + "2";
    registro.textContent = registro.textContent + "2";
}
tres.onclick = function (e) {
    inputc.value = inputc.value + "3";
    registro.textContent = registro.textContent + "3";
}
cuatro.onclick = function (e) {
    inputc.value = inputc.value + "4";
    registro.textContent = registro.textContent + "4";
}
cinco.onclick = function (e) {
    inputc.value = inputc.value + "5";
    registro.textContent = registro.textContent + "5";
}
seis.onclick = function (e) {
    inputc.value = inputc.value + "6";
    registro.textContent = registro.textContent + "6";
}
siete.onclick = function (e) {
    inputc.value = inputc.value + "7";
    registro.textContent = registro.textContent + "7";
}
ocho.onclick = function (e) {
    inputc.value = inputc.value + "8";
    registro.textContent = registro.textContent + "8";
}
nueve.onclick = function (e) {
    inputc.value = inputc.value + "9";
    registro.textContent = registro.textContent + "9";
}
zero.onclick = function (e) {
    inputc.value = inputc.value + "0";
    registro.textContent = registro.textContent + "0";
}
punto.onclick = function (e) {
    inputc.value = inputc.value + ".";
    registro.textContent = registro.textContent + ".";
}

let operandoa;
let operandob;
let operacion;



suma.onclick = function (e) {
    operandoa = inputc.value;
    operacion = " + ";
    limpiar();
    registro.textContent = registro.textContent + " + ";
}
resta.onclick = function (e) {
    operandoa = inputc.value;
    operacion = " - ";
    limpiar();

    registro.textContent = registro.textContent + " - ";
}
multiplicacion.onclick = function (e) {
    operandoa = inputc.value;
    operacion = " * ";
    limpiar();
    registro.textContent = registro.textContent + " * ";
}
division.onclick = function (e) {
    operandoa = inputc.value;
    operacion = " / ";
    limpiar();
    registro.textContent = registro.textContent + " / "
}
igual.onclick = function (e) {
    operandob = inputc.value;
    registro.textContent = registro.textContent + " = "
    resolver();

}

borrador.onclick = function(e){
    borrar();
}

function borrar (){
    var value = inputc.value;
    var newValue = value.substring(0,value.length - 1);
    inputc.value = newValue;
    registro.textContent = newValue;
}

clear.onclick = function (e) {
    resetear();
}
 

function limpiar() {
    inputc.value = "";
    
}
function resetear() {
    inputc.value = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    
}

function resolver() {
    var res = 0;
    switch (operacion) {
        case " + ":
            res = parseFloat(operandoa) + parseFloat(operandob);

            break;

        case " - ":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;

        case " * ":
            res = parseFloat(operandoa) * parseFloat(operandob);
            break;

        case " / ":
            res = parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    inputc.value = res;
    registro.textContent = registro.textContent + res

    /* crear nuevo elemento para el historial*/

let texto = `su anterior operacion fue ${registro.textContent}`
addElemento(texto)

function addElemento(texto){

    let capa = document.getElementById("Historial");
    let h4 = document.createElement("h4");
    h4.innerHTML = texto;
    capa.appendChild(h4);
  
  }
}


