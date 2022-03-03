const $formulario = document.querySelector('#form');
const $nombre = document.querySelector('#nombre');
const $ntarjeta = document.querySelector('#tarjeta');
const $mes = document.querySelector('#mes');
const $anio = document.querySelector('#anio');
const $clave = document.querySelector('#codigo');
var pagar = document.getElementById("pagar");
let $spanError = document.querySelector('span1');




function nameValid(){
    var value = $nombre.value
    var isValid = /^[a-z ,.'-]+$/i.test(value);

    if (isValid) {
        console.log("Valido")
        return true;
        
      } else {
        console.log("Nombre no valido");
        return false;
    
      }
}


function cardValid(){
    var value = $ntarjeta.value
    var isValid = /^[0-9]{16}$/.test(value);
    if (isValid) {
        console.log("Numero valido");
        return true;
        
      } else {
        console.log("Numero no valido");
        return false;
    
      }
}
function mesValid(){
    var value = $mes.value
    var isValid = /^1[0-2]|0[1-9]$/.test(value);
    if (isValid) {
        console.log("mes valido");
        return true;
        
      } else {
        console.log("mes no valido");
        return false;
    
      }
}
function anioValid(){
    var value = $anio.value
    var isValid = /^[20,29]{2}$/.test(value);
    if (isValid) {
        console.log("anio valido");
        return true;
        
      } else {
        console.log("anio no valido");
        return false;
    
      }
}
function claveValid(){
    var value = $clave.value
    var isValid = /^[0-9]{3}$/.test(value);
    if (isValid) {
        console.log("clave valido");
        return true;
        
      } else {
        console.log("clave no valida");
        return false;
    
      }
}

pagar.onclick = function(){
    console.log("pagando");
    let name1 = nameValid();
    let tarjeta1 =cardValid()
    let mes = mesValid();
    let anio = anioValid();
    let clave = claveValid();

    if(name1 == true && tarjeta1==true && mes==true && anio==true && clave==true ){
        console.log("Pago valido");
        alert("¡Pago exitoso!");
        
    }
    else{
        console.log("Pago no valido");
    }
}



  