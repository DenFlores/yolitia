/* unction cambiarDatos(){
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var usuario = document.getElementById("usuario").value;
var correo = document.getElementById("correo").value;

console.log(nombre);
console.log(apellido);
console.log(usuario);
console.log(correo);

} */


const $formPerfil = document.querySelector('#formPerfil');
const $nombre = document.querySelector('#nombre');
const $apellido = document.querySelector('#apellido');
const $correo = document.querySelector('#correo');


$formPerfil.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = $nombre.value;
    const apellido = $apellido.value;
    const correo = $correo.value;

    console.log(nombre, apellido, correo);

    

        fetch('http://localhost:8080/perfil/cambiar/1', {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, apellido, correo })
        })
        .then(res => res.json())
        .then(res=> {
            console.log(res);
        });


    });