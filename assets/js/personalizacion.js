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
      angulo++;
      brazo.style.right = defaultState + "%";
    }
    while (angulo > 0 && defaultState >= 0) {
      defaultState = defaultState - 0.05;
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
    peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
    peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
    peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
    gorro.style.left = "29%";
    gorro.style.top = "-10%";
    monio.style.left = "-6%";
    monio.style.top = "109%";
    monioN3.style.left = "-170%";
    monioN3.style.top = "360%";
    sombreroN3.style.left = "-24%";
    sombreroN3.style.top = "252%";
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
    peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
    peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
    peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
    gorro.style.left = "27%";
    gorro.style.top = "-49%";
    monio.style.left = "-8%";
    monio.style.top = "79%";
    monioN3.style.left = "-180%";
    monioN3.style.top = "337%";
    sombreroN3.style.left = "-40%";
    sombreroN3.style.top = "218%";
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
    peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
    peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
    peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
    gorro.style.left = "29%";
    gorro.style.top = "-11%";
    monio.style.left = "-8%";
    monio.style.top = "97%";
    monioN3.style.left = "-170%";
    monioN3.style.top = "351%";
    sombreroN3.style.left = "-28%";
    sombreroN3.style.top = "241%";
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
    peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
    peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
    peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
    gorro.style.left = "30%";
    gorro.style.top = "-42%";
    monio.style.left = "-7%";
    monio.style.top = "90%";
    monioN3.style.left = "-170%";
    monioN3.style.top = "335%";
    sombreroN3.style.left = "-28%";
    sombreroN3.style.top = "200%";
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
    function getOffset(el) {
      let _x = 0;
      let _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
      }
      return { top: _y, left: _x };
    }
    var x = getOffset(brazo).left;
    var y = getOffset(brazo).top;
    console.log("x: " + x);
    console.log("y: " + y);

    if (x >= 1387 && y >= 490) {
      console.log('oso azul');
      osoAzul.style.display = "none";
      changeStep("next");
      peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
      peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
      peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
      monio.style.left = "29%";
      monio.style.top = "85%";
      gorro.style.left = "53%";
      gorro.style.top = "0%";
      monioN3.style.left = "-79%";
      monioN3.style.top = "220%";
      sombreroN3.style.left = "32%";
      sombreroN3.style.top = "5%";
    }
    else if (x >= 1077 && y >= 490) {
      console.log('perro');
      perro.style.display = "none";
      changeStep("next");
      peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
      peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
      peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
      monio.style.left = "29%";
      monio.style.top = "95%";
      gorro.style.left = "53%";
      gorro.style.top = "15%";
      monioN3.style.left = "-79%";
      monioN3.style.top = "245%";
      sombreroN3.style.left = "32%";
      sombreroN3.style.top = "60%";
    }
    else if (x >= 743 && y >= 490) {
      console.log('oso cafe');
      osoCafe.style.display = "none";
      changeStep("next");
      peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
      peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
      peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
      monio.style.left = "27%";
      monio.style.top = "80%";
      gorro.style.left = "51%";
      gorro.style.top = "0%";
      monioN3.style.left = "-83%";
      monioN3.style.top = "210%";
      sombreroN3.style.left = "28%";
      sombreroN3.style.top = "5%";
    }
    else if (x >= 429 && y >= 490) {
      console.log('conejo');
      conejo.style.display = "none";
      changeStep("next");
      peluche.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
      peluche2.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
      peluche3.src = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";
      monio.style.left = "30%";
      monio.style.top = "100%";
      gorro.style.left = "53%";
      gorro.style.top = "30%";
      monioN3.style.left = "-78%";
      monioN3.style.top = "250%";
      sombreroN3.style.left = "33%";
      sombreroN3.style.top = "80%";
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
/* const opcion1 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
const opcion2 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
const opcion3 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
const opcion4 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png"; */

/* Solo usar para pruebas locales */
const opcion1 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoAzul.png";
const opcion2 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/perro.png";
const opcion3 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/osoCafe.png";
const opcion4 = "https://denflores.github.io/yolitia/assets/img/personalizacion/models/conejo.png";

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