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


document.querySelector('#form').addEventListener('submit',(e)=>{
    e.preventDefault();
    if(!($nombre && $ntarjeta && $mes && $anio && $clave)){
        alert('Rellena los campos');
    }
    else{
        let nombre1;
        let tarjeta1;
        let mes1;
        let anio1;
        let clave1;
        let fechaUnq;
        nameValid() ? (nombre1 = $nombre.value) : alert("Nombre invalido");
        cardValid() ? (tarjeta1 = $ntarjeta.value) : alert("Numero de tarjea invalida");
        mesValid() ? (mes1 = $mes.value) : alert("Mes invalido");
        anioValid() ? (anio1 = $anio.value) : alert("Anio invalido");
        claveValid() ? (clave1 = $clave.value) : alert("Clave invalido");
        fechaUnq = mes1 + '-' + anio1;
       
         
        console.log("nombre: "+nombre1)
        console.log("tarjeta: "+tarjeta1)
        console.log("fecha: "+fechaUnq)
        console.log("clave: "+clave1)
        fetch('http://localhost:8080/api/pago', {
            method: 'POST',
            body: JSON.stringify({
                nombre_titular: nombre1,
                numero_tarjeta: tarjeta1,
                fecha_expiracion: fechaUnq,
                codigo_seguridad: clave1,
            }),
            headers:{
                'Content-Type': 'application/json'
              }

        }).then(res => res.json())
        .then(response =>{

            console.log('Success11:', response)
            alert("¡Pago exitoso! Tu pedido esta en proceso...")
         } );
    }
})


  