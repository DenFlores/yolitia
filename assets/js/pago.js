const $formulario = document.querySelector('#form');
const $nombre = document.querySelector('#nombre');
const $ntarjeta = document.querySelector('#tarjeta');
const $mes = document.querySelector('#mes');
const $anio = document.querySelector('#anio');



$formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = $username.value;
    const password = $password.value;
    const username = $username.value;
    const username = $username.value;




    if(username != '' && password != '') {
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
    }

})