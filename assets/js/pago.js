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
        
      } else {
        console.log("Nombre no valido");
    
      }
}


function cardValid(){
    var value = $ntarjeta.value
    var isValid = /^[0-9]{16}$/.test(value);
    if (isValid) {
        console.log("Numero valido");
        
      } else {
        console.log("Numero no valido");
    
      }
}
function mesValid(){
    var value = $mes.value
    var isValid = /^1[0-2]|0[1-9]$/.test(value);
    if (isValid) {
        console.log("mes valido");
        
      } else {
        console.log("mes no valido");
    
      }
}
function anioValid(){
    var value = $anio.value
    var isValid = /^[20,29]{2}$/.test(value);
    if (isValid) {
        console.log("anio valido");
        
      } else {
        console.log("anio no valido");
    
      }
}
function claveValid(){
    var value = $clave.value
    var isValid = /^[0-9]{3}$/.test(value);
    if (isValid) {
        console.log("clave valido");
        
      } else {
        console.log("clave no valida");
    
      }
}





pagar.onclick = function(){
    console.log("pagando");
    nameValid();
    cardValid()
    mesValid();
    anioValid();
    claveValid();
}


   /* let $spanError = document.querySelector('span1');


// e hace referencia al evento, puede ser cualquier nombre pero por lo regular sera una e que hace referencia a (e)vento 
$ntarjeta.addEventListener('keydown', (e) =>{
    console.log(e.target.value);

// si el texto que escribe el ususario es menor a tres mostrara error 
    if(e.target.value.length < 16) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    }
// si es mayor quitara la clase error y añadira hide 
    else{
        $spanError.classList.add('hide');
        $spanError.classList.remove('error');

    }
});





   /* if(username != '' && password != '') {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify( {
                username,
                password
            }),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(resp => {
            const token = resp.headers.get('Authorization');
            
            if(token && token.includes('Bearer') && resp.ok) {
                localStorage.setItem('token', token);
                console.log(token);
                url = window.location;
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)
                location.href = path +  'administrador.html';
            } else {
                localStorage.removeItem('token');
                Swal.fire({
                    title: 'Correo electronico o contraseña incorrecta',
                    text: 'Reintentar',
                    icon: 'error',
                    confirmButtonText: 'ok'
                });
                //emailError.textContent = 'Usuario o contraseña incorrecta';
            }
        })
    }*/
