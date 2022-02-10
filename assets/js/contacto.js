

const nombre = document.getElementById("Nombre");
const email= document.getElementById("Email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje"); 


formulario.addEventListener('input', function(event) {
   if (email.validity.typeMismatch) {
   email.setCustomValidity('El email no es válido');
   email.reportValidity();
   } else {
      email.setCustomValidity('');
}
});

nombre.addEventListener('input', function(event) {
   if (nombre.validity.tooShort) {
   nombre.setCustomValidity('Tu nombre debe tener como mínimo 3 caracteres');
   nombre.reportValidity();
   } else {
      nombre.setCustomValidity('');
}
});


asunto.addEventListener('input', function(event) {
   if (asunto.validity.tooLong) {
   asunto.setCustomValidity('Pon un título a tus deseos (en menos de 20 palabras)');
   } else {
      asunto.setCustomValidity('');
}
});

asunto.addEventListener('input', function(event) {
   if (asunto.validity.tooShort) {
   asunto.setCustomValidity('Pon un titulo a tus deseos, utiliza mas de 5 caracteres pero menos de 20');
   } else {
      asunto.setCustomValidity('');
}
});

mensaje.addEventListener('input', function(event) {
   if (asunto.validity.tooLong) {
   mensaje.setCustomValidity('Tu mensaje excede el límite máximo de caracteres');
   } else {
      mensaje.setCustomValidity('');
}
});






