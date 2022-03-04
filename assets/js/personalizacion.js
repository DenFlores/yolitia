/*Nivel 1 movimiento de palanca giratoria y seleccion de peluche*/

const ball = document.querySelector("#ball")
const palanca = document.querySelector(".move-palanca");
const brazo = document.querySelector("#brazo");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
let defaultState = 45;

const osoAzul = document.querySelector("#osoAzul");
const perro = document.querySelector('#perro');
const osoCafe = document.querySelector('#osoCafe');
const conejo = document.querySelector('#conejo');
/* Nivel 2,3 y 4 declaración de ids y clases para trabajar con ellas */
const colores = document.querySelector('#colores');
const peluche = document.querySelector('#peluche');
const peluche2 = document.querySelector('.peluche2');
const peluche3 = document.querySelector('.peluche3');
const monio = document.querySelector('.monio');
const gorro = document.querySelector('.gorro');
/* Declaración de los gadgets a elegir del carrousel desde sombreros a moños */
const gadget1 = document.querySelector('#gadget-1');
const gadget2 = document.querySelector('#gadget-2');
const gadget3 = document.querySelector('#gadget-3');
const gadget4 = document.querySelector('#gadget-4');
const gadget5 = document.querySelector('#gadget-5');
const gadget6 = document.querySelector('#gadget-6');
/* Anexar los distintos gadgets a los ids sombrero y monio */
const sombreroN3 = document.querySelector(".sombrero-n3");
const monioN3 = document.querySelector(".monio-n3");
const selectionAudio = new Audio("https://denflores.github.io/yolitia/assets/audio/selection.mp3");
let opcion1;
let opcion2;
let opcion3;
let opcion4;

window.addEventListener("load",getPeluches);

function getPeluches(){
  const URLAPI = "http://localhost:8080/api/productos/all";
  fetch(URLAPI).then(res=>res.json()).then(peluche=>
    {
    let resul=[];
    resul=peluche.filter(elemento=>elemento.id>=11);
    console.log(resul);
    resul.forEach(el=>{
      if(el.id==11){
        osoAzul.src=el.imagen;
        opcion1=el.imagen;
      }
      if(el.id==12){
        perro.src=el.imagen;
        opcion2=el.imagen;
      }
      if(el.id==13){
        osoCafe.src=el.imagen;
        opcion3=el.imagen;
      }
      if(el.id==14){
        conejo.src=el.imagen;
        opcion4=el.imagen;
      }
    })
  }
  );
}

gadget1.addEventListener("click", seccionOne);
function seccionOne() {
  sombreroN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/Rectangle 148.png";
  gorro.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/Rectangle 148.png";
}

gadget2.addEventListener("click", seccionDos);
function seccionDos() {
  sombreroN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/gorro1-removebg-preview.png";
  gorro.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/gorro1-removebg-preview.png";
}

gadget3.addEventListener("click", seccionTres);
function seccionTres() {
  sombreroN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.34_PM-removebg-preview.png";
  gorro.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.34_PM-removebg-preview.png";
}

gadget4.addEventListener("click", seccionCuatro);
function seccionCuatro() {
  monioN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/Rectangle 149.png";
  monio.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/Rectangle 149.png";
}

gadget5.addEventListener("click", seccionCinco);
function seccionCinco() {
  monioN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.33_PM__3_-removebg-preview.png";
  monio.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.33_PM__3_-removebg-preview.png";
}

gadget6.addEventListener("click", seccionSeis);
function seccionSeis() {
  monioN3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/monios-removebg-preview.png";
  monio.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/nivel3/monios-removebg-preview.png";
}
/* Comienza la lógica de los eventos para lograr los efectos deseados */

const movimientoHorizontal = new Audio("https://denflores.github.io/yolitia/assets/audio/horizontal.mp3");
ball.addEventListener("mousedown", mousedown);

function mousedown(e) {
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseup", mouseup);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function mousemove(e) {
    let newX = e.clientX;

    /* console.log(newX) */
    let angulo = Math.tan(newX / 220) * 10;
    /* console.log(angulo) */
    if (Math.abs(angulo) < 45) {
      palanca.style.transform = `rotate(${angulo}deg)`;
    }
    while (angulo < 0 && defaultState <= 94) {
      defaultState = defaultState + 0.05;
      console.log(`estate plus ${defaultState}`);
      angulo++;
      brazo.style.right = defaultState + "%";
    }
    while (angulo > 0 && defaultState >= 0) {
      defaultState = defaultState - 0.05;
      console.log(`estate less ${defaultState}`);
      angulo--;
      brazo.style.right = defaultState + "%";
    }
    prevX = e.clientX;
    prevY = e.clientY;
    movimientoHorizontal.play();
  }

  function mouseup() {
    window.removeEventListener("mousemove", mousemove);
    window.removeEventListener("mouseup", mouseup);
  }
}

/* Movimiento palanca no disponible para  versión móvil en su lugar se usara
la parte tactil de los dedos*/
/* Seleccion tactil del conejo */

conejo.addEventListener("click", modeloUno);
function modeloUno(e) {
  console.log('conejo');
  if (screen.width <= 576) {
    selectionAudio.play();
    changeStep("next");
    peluche.src = opcion4;
    peluche2.src = opcion4;
    peluche3.src = opcion4;

  }
  else {
    e.preventDefault();
  }
}
/* Seleccion tactil del oso cafe */
osoCafe.addEventListener("click", modeloDos);
function modeloDos(e) {
  console.log('Oso café');
  if (screen.width <= 576) {
    selectionAudio.play();
    changeStep("next");
    peluche.src = opcion3;
    peluche2.src = opcion3;
    peluche3.src = opcion3;

  }
  else {
    e.preventDefault();
  }
}
/* Seleccion tactil del perro */
perro.addEventListener("click", modeloTres);
function modeloTres(e) {
  console.log('Perro');
  if (screen.width <= 576) {
    selectionAudio.play();
    changeStep("next");
    peluche.src = opcion2;
    peluche2.src = opcion2;
    peluche3.src = opcion2;

  }
  else {
    e.preventDefault();
  }
}
/* Seleccion tactil del oso azul */
osoAzul.addEventListener("click", modeloCuatro);
function modeloCuatro(e) {
  console.log('oso azul');
  if (screen.width <= 576) {
    selectionAudio.play();
    changeStep("next");
    peluche.src = opcion1;
    peluche2.src = opcion1;
    peluche3.src = opcion1;

  }
  else {
    e.preventDefault();
  }
}

/* Nivel uno movimiento arriba y abajo brazo robotico solo disponible para
pantalla de escritorio*/

btnleft.addEventListener("click", bajarBrazo);

function bajarBrazo(e) {
  if (screen.width >= 1200) {
    console.log(e);
    const audioBajarBrazo = new Audio("https://denflores.github.io/yolitia/assets/audio/bajar-brazo.mp3");
    audioBajarBrazo.play();
    brazo.style.height = "100%";
    if (defaultState>16&&defaultState<27) {
      console.log('oso azul');
      osoAzul.style.display = "none";
      changeStep("next");
      peluche.src = opcion1;
      peluche2.src = opcion1;
      peluche3.src = opcion1;

    }
    else if (defaultState<43&&defaultState>34) {
      console.log('perro');
      perro.style.display = "none";
      changeStep("next");
      peluche.src = opcion2;
      peluche2.src = opcion2;
      peluche3.src = opcion2;

    }
    else if (defaultState<61&&defaultState>51) {
      console.log('oso cafe');
      osoCafe.style.display = "none";
      changeStep("next");
      peluche.src = opcion3;
      peluche2.src = opcion3;
      peluche3.src = opcion3;

    }
    else if (defaultState>69&&defaultState<76) {
      console.log('conejo');
      conejo.style.display = "none";
      changeStep("next");
      peluche.src = opcion4;
      peluche2.src = opcion4;
      peluche3.src = opcion4;

    }
  }

  else {
    e.preventDefault();
  }
}

btnright.addEventListener("click", subirBrazo);

function subirBrazo(e) {
  if (screen.width >= 1200) {
    console.log(e);
    const audioSubirBrazo = new Audio("https://denflores.github.io/yolitia/assets/audio/subir-brazo.mp3");
    audioSubirBrazo.play();
    brazo.style.height = "60px";
  }
  else {
    e.preventDefault();
  }
}

/* Nivel 2 cambio de colores */
//Opciones de modelos de peluches a elegir

/* Solo usar para pruebas locales */

const ninosFestejando = new Audio("https://denflores.github.io/yolitia/assets/audio/ninos.mp3");
const ruletaSonido = new Audio("https://denflores.github.io/yolitia/assets/audio/sonido_ruleta.mp3");
//Pintando los colores en canvas
const array_colores =
  [
    '#e40909'
    , '#e46b09'
    , '#e4bc09'
    , '#35e409'
    , '#139af5'
    , '#6542c7'
  ];

let canvas = document.querySelector("#idcanvas");
let context = canvas.getContext("2d");
let center = canvas.width / 2;

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = '#33333333';
context.fill();

context.beginPath();
context.moveTo(center, center);
context.arc(center, center, center - 10, 0, 2 * Math.PI);
context.lineTo(center, center);
context.fillStyle = 'black';
context.fill();

for (var i = 0; i < array_colores.length; i++) {
  context.beginPath();
  context.moveTo(center, center);
  context.arc(center, center, center - 20, i * 2 * Math.PI / array_colores.length, (i + 1) * 2 * Math.PI / array_colores.length);
  context.lineTo(center, center);
  context.fillStyle = array_colores[i];
  context.fill();

  context.save();
  context.translate(center, center);
  context.rotate(3 * 2 * Math.PI / (5 * array_colores.length) + i * 2 * Math.PI / array_colores.length);
  context.translate(-center, -center);
  context.textAlign = "right";
  context.fillStyle = "white";
  context.restore();
}
let pos_ini = 0;
let clic = 0;
let movement;
canvas.addEventListener("click", sortear);
function sortear() {
  if (clic == 0) {
    let canvas = document.getElementById("idcanvas");
    movement = setInterval(function () {
      ruletaSonido.play();
      pos_ini += 10;
      canvas.style.transform = 'rotate(' + pos_ini + 'deg)';
      console.log(pos_ini);
      if (pos_ini == 360) {
        pos_ini = 0;
      }
    }, 10);
    clic = 1;

  } else {
    clearInterval(movement);
    clic = 0;
    if (peluche.src == opcion1) {
      if (pos_ini > 0 && pos_ini <= 60) {
        /* Rojo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(140deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(140deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(140deg) saturate(3)`;
      }
      else if (pos_ini > 60 && pos_ini <= 120) {
        /* Naranja */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(150deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(150deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(150deg) saturate(3)`;
      }
      else if (pos_ini > 120 && pos_ini <= 180) {
        /* Amarillo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(200deg) brightness(200%) saturate(100%)`;
        peluche2.style.filter = `hue-rotate(200deg) brightness(200%) saturate(100%)`;
        peluche3.style.filter = `hue-rotate(200deg) brightness(200%) saturate(100%)`;
      }
      else if (pos_ini > 180 && pos_ini <= 240) {
        /* Verde */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(210deg) saturate(3)`;
      }
      else if (pos_ini > 240 && pos_ini <= 300) {
        /* Azul */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(30deg) saturate(100%)`;
        peluche2.style.filter = `hue-rotate(30deg) saturate(100%)`;
        peluche3.style.filter = `hue-rotate(30deg) saturate(100%)`;
      }
      else if (pos_ini > 300 && pos_ini <= 360) {
        /* Morado */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(90deg) saturate(100%)`;
        peluche2.style.filter = `hue-rotate(90deg) saturate(100%)`;
        peluche3.style.filter = `hue-rotate(90deg) saturate(100%)`;
      }
    }
    else if (peluche.src == opcion2) {
      if (pos_ini > 0 && pos_ini <= 60) {
        /* Rojo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(70deg)`;
        peluche2.style.filter = `hue-rotate(70deg)`;
        peluche3.style.filter = `hue-rotate(70deg)`;
      }
      else if (pos_ini > 60 && pos_ini <= 120) {
        /* Naranja */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(120deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(120deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(120deg) saturate(3)`;
      }
      else if (pos_ini > 120 && pos_ini <= 180) {
        /* Amarillo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
        peluche2.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
        peluche3.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
      }
      else if (pos_ini > 180 && pos_ini <= 240) {
        /* Verde */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(150deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(150deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(150deg) saturate(3)`;
      }
      else if (pos_ini > 240 && pos_ini <= 300) {
        /* Azul */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(270deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(270deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(270deg) saturate(3)`;
      }
      else if (pos_ini > 300 && pos_ini <= 360) {
        /* Morado */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(20deg)`;
        peluche2.style.filter = `hue-rotate(20deg)`;
        peluche3.style.filter = `hue-rotate(20deg)`;
      }
    }
    else if (peluche.src == opcion3) {
      if (pos_ini > 0 && pos_ini <= 60) {
        /* Rojo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(350deg) saturate(5)`;
        peluche2.style.filter = `hue-rotate(350deg) saturate(5)`;
        peluche3.style.filter = `hue-rotate(350deg) saturate(5)`;
      }
      else if (pos_ini > 60 && pos_ini <= 120) {
        /* Naranja */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(15deg) brightness(100%) saturate(5)`;
        peluche2.style.filter = `hue-rotate(15deg) brightness(100%) saturate(5)`;
        peluche3.style.filter = `hue-rotate(15deg) brightness(100%) saturate(5)`;
      }
      else if (pos_ini > 120 && pos_ini <= 180) {
        /* Amarillo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(30deg) brightness(200%) saturate(100%)`;
        peluche2.style.filter = `hue-rotate(30deg) brightness(200%) saturate(100%)`;
        peluche3.style.filter = `hue-rotate(30deg) brightness(200%) saturate(100%)`;
      }
      else if (pos_ini > 180 && pos_ini <= 240) {
        /* Verde */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
        peluche2.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
        peluche3.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
      }
      else if (pos_ini > 240 && pos_ini <= 300) {
        /* Azul */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(210deg) saturate(3)`;
      }
      else if (pos_ini > 300 && pos_ini <= 360) {
        /* Morado */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(270deg) saturate(2)`;
        peluche2.style.filter = `hue-rotate(270deg) saturate(2)`;
        peluche3.style.filter = `hue-rotate(270deg) saturate(2)`;
      }
    }
    else if (peluche.src == opcion4) {
      if (pos_ini > 0 && pos_ini <= 60) {
        /* Rojo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(15deg) saturate(5)`;
        peluche2.style.filter = `hue-rotate(15deg) saturate(5)`;
        peluche3.style.filter = `hue-rotate(15deg) saturate(5)`;
      }
      else if (pos_ini > 60 && pos_ini <= 120) {
        /* Naranja */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(30deg) saturate(5)`;
        peluche2.style.filter = `hue-rotate(30deg) saturate(5)`;
        peluche3.style.filter = `hue-rotate(30deg) saturate(5)`;
      }
      else if (pos_ini > 120 && pos_ini <= 180) {
        /* Amarillo */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
        peluche2.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
        peluche3.style.filter = `hue-rotate(60deg) brightness(100%) saturate(5)`;
      }
      else if (pos_ini > 180 && pos_ini <= 240) {
        /* Verde */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(90deg) brightness(100%) saturate(5)`;
        peluche2.style.filter = `hue-rotate(90deg) brightness(100%) saturate(5)`;
        peluche3.style.filter = `hue-rotate(90deg) brightness(100%) saturate(5)`;
      }
      else if (pos_ini > 240 && pos_ini <= 300) {
        /* Azul */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche2.style.filter = `hue-rotate(210deg) saturate(3)`;
        peluche3.style.filter = `hue-rotate(210deg) saturate(3)`;
      }
      else if (pos_ini > 300 && pos_ini <= 360) {
        /* Morado */
        ninosFestejando.play();
        peluche.style.filter = `hue-rotate(0deg) saturate(5)`;
        peluche2.style.filter = `hue-rotate(0deg) saturate(5)`;
        peluche3.style.filter = `hue-rotate(0deg) saturate(5)`;
      }
    }

  }
}

/*Stepform nivel 1,2,3 y 4*/
const steps = Array.from(document.querySelectorAll("section .step"));
const nextBtn = document.querySelectorAll("section .btn-step-next");
const prevBtn = document.querySelectorAll("section .btn-step-prev");
const audioClick = new Audio("https://denflores.github.io/yolitia/assets/audio/click.mp3");

nextBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("next");
  });
});

prevBtn.forEach((button) => {
  button.addEventListener("click", () => {
    changeStep("prev");
  });
});

function changeStep(btn) {
  audioClick.play();
  let index = 0;
  const active = document.querySelector("section .activo");
  index = steps.indexOf(active);
  steps[index].classList.remove("activo");
  steps[index].classList.add("d-none");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    osoAzul.style.display = "flex";
    perro.style.display = "flex";
    osoCafe.style.display = "flex";
    conejo.style.display = "flex";
    index--;
  }
  steps[index].classList.add("activo");
  steps[index].classList.remove("d-none");
}
/* Parte 4 validación del formulario */
const confirmarButton = document.querySelector('#confirmar');
confirmarButton.addEventListener("click", confirmacionCompra);
const nombre = document.querySelector('#nombre');
const aplausos = new Audio("https://denflores.github.io/yolitia/assets/audio/publico.mp3");
const congratsModal = document.querySelector('#congratsModal');

nombre.addEventListener("change", verificarNombre);

function verificarNombre(e) {
  if (e.target.value) {
    confirmarButton.disabled = false;
  }
  else if (!e.target.value) {
    confirmarButton.disabled = true;
  }
}

function confirmacionCompra(e) {
  console.log(nombre.value);
  if (nombre.value) {
    fetch('http://localhost:8080/api/personalizacion', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ modelo:peluche.src, color: peluche.style.filter,sombrero:sombreroN3.src,monio:monio.src})
})
.then(res => res.json())
.then(res=> {
      console.log(res);
});
    aplausos.play();
    function randomize(collection) {
      var randomNumber = Math.floor(Math.random() * collection.length);
      return collection[randomNumber];
    }

    function confetti() {
      $(".confetti").remove();
      var $confettiItems = $('<div class="confetti"></div>'),
        colors = ["#3b5692", "#f9c70b", "#00abed", "#ea6747"],
        height = 6.6,
        width = 6.6;

      var scale, $confettiItem;

      for (var i = 0; i < 100; i++) {
        scale = Math.random() * 1.75 + 1;
        $confettiItem = $(
          "<svg class='confetti-item' width='" +
          width * scale +
          "' height='" +
          height * scale +
          "' viewbox='0 0 " +
          width +
          " " +
          height +
          "'>\n  <use transform='rotate(" +
          Math.random() * 360 +
          ", " +
          width / 2 +
          ", " +
          height / 2 +
          ")' xlink:href='#svg-confetti' />\n</svg>"
        );
        $confettiItem.css({
          animation:
            Math.random() +
            2 +
            "s " +
            Math.random() * 2 +
            "s confetti-fall ease-in both",
          color: randomize(colors),
          left: Math.random() * 100 + "vw"
        });
        $confettiItems.append($confettiItem);
      }
      $("body").append($confettiItems);
    }

    $("#congratsModal").on("shown.bs.modal", function () {
      confetti();
    });

  } else {
    e.preventDefault();
  }
}

/* mover accesorios a través de la pantalla*/
sombreroN3.addEventListener("mousedown", mousedownSombrero);
monioN3.addEventListener("mousedown",mousedownMonio);
monio.addEventListener("mousedown",mousedownMonio4);
gorro.addEventListener("mousedown",mousedownGorro);

sombreroN3.addEventListener("touchstart", touchStartSombrero);
monioN3.addEventListener("touchstart",touchStartMonio3);
monio.addEventListener("touchstart",touchStartMonio4);
gorro.addEventListener("touchstart",touchStartGorro);

function mousedownSombrero(e) {
  window.addEventListener("mousemove", mousemoveSombrero);
  window.addEventListener("mouseup", mouseupSombrero);

  const coords = sombreroN3.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function mousemoveSombrero(e) {
    let m = e.pageY ;
    let n = e.pageX ;
  
    let t = m - j;
    let l = n - k;
    sombreroN3.style.top = t + "%"; // agregando px a los numeros
    sombreroN3.style.left = l + "%";
  }

  function mouseupSombrero() {
    window.removeEventListener("mousemove", mousemoveSombrero);
    window.removeEventListener("mouseup", mouseupSombrero);
  }
}

function mousedownMonio(e) {
  window.addEventListener("mousemove", mousemoveMonio);
  window.addEventListener("mouseup", mouseupMonio);

  const coords = monioN3.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function mousemoveMonio(e) {
    let m = e.pageY ;
    let n = e.pageX ;
  
    let t = m - j;
    let l = n - k;
    monioN3.style.top = t + "%"; // agregando px a los numeros
    monioN3.style.left = l + "%";
  }

  function mouseupMonio() {
    window.removeEventListener("mousemove", mousemoveMonio);
    window.removeEventListener("mouseup", mouseupMonio);
  }
}

function mousedownMonio4(e) {
  window.addEventListener("mousemove", mousemoveMonio4);
  window.addEventListener("mouseup", mouseupMonio4);

  const coords = monio.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function mousemoveMonio4(e) {
    let m = e.pageY ;
    let n = e.pageX ;
  
    let t = m - j;
    let l = n - k;
    monio.style.top = t + "%"; // agregando px a los numeros
    monio.style.left = l + "%";
  }

  function mouseupMonio4() {
    window.removeEventListener("mousemove", mousemoveMonio4);
    window.removeEventListener("mouseup", mouseupMonio4);
  }
}

function mousedownGorro(e) {
  window.addEventListener("mousemove", mousemoveGorro);
  window.addEventListener("mouseup", mouseupGorro);

  const coords = gorro.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function mousemoveGorro(e) {
    let m = e.pageY ;
    let n = e.pageX ;
  
    let t = m - j;
    let l = n - k;
    gorro.style.top = t + "%"; // agregando px a los numeros
    gorro.style.left = l + "%";
  }

  function mouseupGorro() {
    window.removeEventListener("mousemove", mousemoveGorro);
    window.removeEventListener("mouseup", mouseupGorro);
  }
}

function touchStartSombrero(e) {
  window.addEventListener("touchmove", touchMoveSombrero);
  window.addEventListener("touchend", touchEndSombrero);

  const coords = sombreroN3.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function touchMoveSombrero(e) {
    let m = e.touches[0].pageY;
    let n = e.touches[0].pageX ;
  
    let t = m - j;
    let l = n - k;
    sombreroN3.style.top = t + "%"; // agregando px a los numeros
    sombreroN3.style.left = l + "%";
  }

  function touchEndSombrero() {
    window.removeEventListener("touchmove", touchMoveSombrero);
    window.removeEventListener("touchend", touchEndSombrero);
  }
}

function touchStartMonio3(e) {
  window.addEventListener("touchmove", touchMoveMonio);
  window.addEventListener("touchend", touchEndMonio);

  const coords = monioN3.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function touchMoveMonio(e) {
    let m = e.touches[0].pageY;
    let n = e.touches[0].pageX;
  
    let t = m - j;
    let l = n - k;
    monioN3.style.top = t + "%"; // agregando px a los numeros
    monioN3.style.left = l + "%";
  }

  function touchEndMonio() {
    window.removeEventListener("touchmove", touchMoveMonio);
    window.removeEventListener("touchend", touchEndMonio);
  }
}

function touchStartMonio4(e) {
  window.addEventListener("touchmove", touchMoveMonio4);
  window.addEventListener("touchend", touchEndMonio4);

  const coords = monio.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function touchMoveMonio4(e) {
    let m = e.touches[0].pageY;
    let n = e.touches[0].pageX;
  
    let t = m - j;
    let l = n - k;
    monio.style.top = t + "%"; // agregando px a los numeros
    monio.style.left = l + "%";
  }

  function touchEndMonio4() {
    window.removeEventListener("touchmove", touchMoveMonio4);
    window.removeEventListener("touchend", touchEndMonio4);
  }
}

function touchStartGorro(e) {
  window.addEventListener("touchmove", touchMoveGorro);
  window.addEventListener("touchend", touchEndGorro);

  const coords = gorro.getBoundingClientRect();
  const j = coords.top; // estamos obteniendo la posicion top en numero
  const k = coords.left;
  function touchMoveGorro(e) {
    let m = e.touches[0].pageY;
    let n = e.touches[0].pageX;
  
    let t = m - j;
    let l = n - k;
    gorro.style.top = t + "%"; // agregando px a los numeros
    gorro.style.left = l + "%";
  }

  function touchEndGorro() {
    window.removeEventListener("touchmove", touchMoveGorro);
    window.removeEventListener("touchend", touchEndGorro);
  }
}