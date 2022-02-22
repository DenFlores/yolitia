window.addEventListener("load", () => {
  const form = document.querySelector("#formulario");
  const form2 = document.querySelector("#form2");
  const nombre = document.getElementById("nombre");
  const email = document.getElementById("email");
  const pass = document.getElementById("pass");
  const usuario = document.getElementById("usuario");
  const passSesion = document.getElementById("passSesion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  form2.addEventListener("submit", (e) => {
    e.preventDefault();
    validaCampos();
  });

  // >>>>>>>>>>>>>>>>  CAPTURAR LOS VALORES INGRESADOS POR EL USUARIO >>>>>>>>>>>>>>>>>>

  const validaCampos = () => {
    const nombreValor = nombre.value.trim();
    const emailValor = email.value.trim();
    const passValor = pass.value.trim();
    const usuarioValor = usuario.value.trim();
    const passSesionValor = passSesion.value.trim();

    // VALIDANDO CAMPO NOMBRE

    const er = /^[a-zA-Z ]*$/;

    if (!nombreValor) {
      validaFalla(nombre, "Campo vacio");
    } else if (!nombreValor.match(er)) {
      validaFalla(nombre, "Nombre no valido");
    } else {
      validaOk(nombre);
    }

    // >>>>>>   VALIDANDO EMAIL   <<<<<<<

    if (!emailValor) {
      validaFalla(email, "Campo vacio");
    } else if (!validaEmail(emailValor)) {
      validaFalla(email, "El email no es valido");
    } else {
      validaOk(email);
    }

    /* -------  VALIDAR CORREO DE INICIO DE SESION ---------------- */

    if (!usuarioValor) {
      validaFalla(usuario, "Campo vacio");
    } else if (!validaEmail(usuarioValor)) {
      validaFalla(usuario, "El email no es valido");
    } else {
      validaOk(usuario);
    }

    // >>>>>> --------- VALIDAR PASSWORD  ---------- <<<<<<<

    if (!passValor) {
      validaFalla(pass, "Campo vacio");
    } else if (passValor.length < 8) {
      validaFalla(pass, "Debe tener almenos 8 Caracteres");
    } else {
      validaOk(pass);
    }

    /* --------- VALIDANDO PASSWORD DE INICIO DE SESION ---------- */

    if (!passSesionValor) {
      validaFalla(passSesion, "Campo vacio");
    } else if (passSesionValor.length < 8) {
      validaFalla(passSesion, "Debe tener almenos 8 Caracteres");
    } else {
      validaOk(passSesion);
    }
  };

  const validaFalla = (input, msje) => {
    const formControl1 = input.parentElement;
    const aviso = formControl1.querySelector("p");
    aviso.innerText = msje;

    formControl1.className = "form-control1 falla";
  };

  const validaOk = (input, msje) => {
    const formControl1 = input.parentElement;
    formControl1.className = "form-control1 ok";
  };

  const validaEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
});
