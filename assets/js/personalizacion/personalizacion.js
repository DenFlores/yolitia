/* Creacion del modelo para todos los niveles */
class ModeloPeluche {
  modelo;
  color;
  sombrero;
  monio;
  constructor(modelo, color, sombrero, monio) {
    this.modelo = modelo;
    this.color = color;
    this.sombrero = sombrero;
    this.monio = monio;
  }
}

/*Nivel 1 movimiento de palanca giratoria y seleccion de peluche*/

const ball = document.querySelector("#ball")
const palanca = document.querySelector(".move-palanca");
const brazo = document.querySelector("#brazo");
const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
let defaultState = 45;

const osoAzul=document.querySelector("#osoAzul");
const perro=document.querySelector('#perro');
const osoCafe=document.querySelector('#osoCafe');
const conejo=document.querySelector('#conejo');
/* Nivel 2,3 y 4 declaración de ids y clases para trabajar con ellas */
const colores = document.querySelector('#colores');
const peluche = document.querySelector('#peluche');
const peluche2 = document.querySelector('.peluche2');
const peluche3 = document.querySelector('.peluche3');
const monio = document.querySelector('.monio');
const gorro = document.querySelector('.gorro');
/* Declaración de los gadgets a elegir del carrousel desde sombreros a moños */
const gadget1=document.querySelector('#gadget-1');
const gadget2=document.querySelector('#gadget-2');
const gadget3=document.querySelector('#gadget-3');
const gadget4=document.querySelector('#gadget-4');
const gadget5=document.querySelector('#gadget-5');
const gadget6=document.querySelector('#gadget-6');
/* Anexar los distintos gadgets a los ids sombrero y monio */
const sombreroN3 = document.querySelector(".sombrero-n3");
const monioN3 = document.querySelector(".monio-n3");

gadget1.addEventListener("click",seccionOne);
function seccionOne(){
  sombreroN3.src="/assets/img/personalizacion/nivel3/Rectangle 148.png";
  gorro.src="/assets/img/personalizacion/nivel3/Rectangle 148.png";
}

gadget2.addEventListener("click",seccionDos);
function seccionDos(){
  sombreroN3.src="/assets/img/personalizacion/nivel3/gorro1-removebg-preview.png";
  gorro.src="/assets/img/personalizacion/nivel3/gorro1-removebg-preview.png";
}

gadget3.addEventListener("click",seccionTres);
function seccionTres(){
  sombreroN3.src="/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.34_PM-removebg-preview.png";
  gorro.src="/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.34_PM-removebg-preview.png";
}

gadget4.addEventListener("click",seccionCuatro);
function seccionCuatro(){
  monioN3.src="/assets/img/personalizacion/nivel3/Rectangle 149.png";
  monio.src="/assets/img/personalizacion/nivel3/Rectangle 149.png";
}

gadget5.addEventListener("click",seccionCinco);
function seccionCinco(){
  monioN3.src="/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.33_PM__3_-removebg-preview.png";
  monio.src="/assets/img/personalizacion/nivel3/WhatsApp_Image_2022-02-02_at_5.37.33_PM__3_-removebg-preview.png";
}

gadget6.addEventListener("click",seccionSeis);
function seccionSeis(){
  monioN3.src="/assets/img/personalizacion/nivel3/monios-removebg-preview.png";
  monio.src="/assets/img/personalizacion/nivel3/monios-removebg-preview.png";
}
/* Comienza la lógica de los eventos para lograr los efectos deseados */

const movimientoHorizontal = new Audio("/assets/audio/horizontal.mp3");
ball.addEventListener("mousedown", mousedown)

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

/* Nivel uno movimiento arriba y abajo brazo robotico */

btnleft.addEventListener("click", bajarBrazo);

function bajarBrazo(e) {
  console.log(e);
  const audioBajarBrazo = new Audio("/assets/audio/bajar-brazo.mp3");
  audioBajarBrazo.play();
  brazo.style.height = "100%";
  function getOffset( el ) {
    let _x = 0;
    let _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
    }
    return { top: _y, left: _x };
    }
  var x = getOffset(brazo).left;
  var y = getOffset(brazo).top;
  console.log("x: "+ x);
  console.log("y: "+ y);
 
  if (x >= 878 && x <=947 && y==377) {
    console.log('oso azul');
    osoAzul.style.display="none";
    changeStep("next");
    peluche.src="/assets/img/personalizacion/models/osoAzul.png";
    peluche2.src="/assets/img/personalizacion/models/osoAzul.png";
    peluche3.src="/assets/img/personalizacion/models/osoAzul.png";
  }
  else if(x>=677&&x<=735&&y==377){
    console.log('perro');
    perro.style.display="none";
    changeStep("next");
    peluche.src="/assets/img/personalizacion/models/perro.png";
    peluche2.src="/assets/img/personalizacion/models/perro.png";
    peluche3.src="/assets/img/personalizacion/models/perro.png";
  }
  else if(x>=454&&x<=517&&y==377){
    console.log('oso cafe');
    osoCafe.style.display="none";
    changeStep("next");
    peluche.src="/assets/img/personalizacion/models/osoCafe.png";
    peluche2.src="/assets/img/personalizacion/models/osoCafe.png";
    peluche3.src="/assets/img/personalizacion/models/osoCafe.png";
  }
  else if(x>=273&&x<=294&&y==377){
    console.log('conejo');
    conejo.style.display="none";
    changeStep("next");
    peluche.src="/assets/img/personalizacion/models/conejo.png";
    peluche2.src="/assets/img/personalizacion/models/conejo.png";
    peluche3.src="/assets/img/personalizacion/models/conejo.png";
  }
}

btnright.addEventListener("click", subirBrazo);

function subirBrazo(e) {
  console.log(e);
  const audioSubirBrazo = new Audio("/assets/audio/subir-brazo.mp3");
  audioSubirBrazo.play();
  brazo.style.height = "60px";
}

/* Nivel 2 cambio de colores */

colores.addEventListener("click", (e) => {
  const opcion1="http://127.0.0.1:5500/assets/img/personalizacion/models/osoAzul.png";
  const opcion2="http://127.0.0.1:5500/assets/img/personalizacion/models/perro.png";
  const opcion3="http://127.0.0.1:5500/assets/img/personalizacion/models/osoCafe.png";
  const opcion4="http://127.0.0.1:5500/assets/img/personalizacion/models/conejo.png";
  const selectionAudio = new Audio("/assets/audio/selection.mp3")
  console.log(e.clientX + " " + e.clientY);
  console.log(peluche.src);
  if(peluche.src==opcion1){
    /* Rojo */
    if((e.clientX<=1111&&e.clientX>=994)&&(e.clientY>=106&&e.clientY<=272)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(140deg) saturate(3)`;
      peluche2.style.filter=`hue-rotate(140deg) saturate(3)`;
      peluche3.style.filter=`hue-rotate(140deg) saturate(3)`;
    }
    /* Naranja */
    else if((e.clientX<=1180&&e.clientX>=1120)&&(e.clientY>=130&&e.clientY<=301)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(150deg) saturate(3)`;
      peluche2.style.filter=`hue-rotate(150deg) saturate(3)`;
      peluche3.style.filter=`hue-rotate(150deg) saturate(3)`;
    }
    /* Amarillo */
    else if((e.clientX<=1194&&e.clientX>=1075)&&(e.clientY>=321&&e.clientY<=486)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(200deg) brightness(200%) saturate(100%)`;
      peluche2.style.filter=`hue-rotate(200deg) brightness(200%) saturate(100%)`;
      peluche3.style.filter=`hue-rotate(200deg) brightness(200%) saturate(100%)`;
    }
    /* Verde */
    else if((e.clientX<=1095&&e.clientX>=979)&&(e.clientY>=336&&e.clientY<=510)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(210deg) saturate(3)`;
      peluche2.style.filter=`hue-rotate(210deg) saturate(3)`;
      peluche3.style.filter=`hue-rotate(210deg) saturate(3)`;
    }
    /* Azul */
    else if((e.clientX<=1032&&e.clientX>=910)&&(e.clientY>=316&&e.clientY<=462)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(30deg) saturate(100%)`;
      peluche2.style.filter=`hue-rotate(30deg) saturate(100%)`;
      peluche3.style.filter=`hue-rotate(30deg) saturate(100%)`;
    }
    /* Morado */
    else if((e.clientX<=1038&&e.clientX>=912)&&(e.clientY>=149&&e.clientY<=290)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(90deg) saturate(100%)`;
      peluche2.style.filter=`hue-rotate(90deg) saturate(100%)`;
      peluche3.style.filter=`hue-rotate(90deg) saturate(100%)`;
    }
   
  }
  else if(peluche.src==opcion2){
    if ((e.clientX <= 1060 && e.clientX >= 1030) && (e.clientY <= 240 && e.clientY >= 99)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(70deg)`;
      peluche2.style.filter = `hue-rotate(70deg)`;
      peluche3.style.filter = `hue-rotate(70deg)`;
    }
    else if ((e.clientX <= 990 && e.clientX >= 903) && (e.clientY >= 146 && e.clientY <= 303)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(20deg)`;
      peluche2.style.filter = `hue-rotate(20deg)`;
      peluche3.style.filter = `hue-rotate(20deg)`;
    }
    else if ((e.clientX <= 1185 && e.clientX >= 1080) && (e.clientY >= 169 && e.clientY <= 306)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(120deg) saturate(3)`;
      peluche2.style.filter = `hue-rotate(120deg) saturate(3)`;
      peluche3.style.filter = `hue-rotate(120deg) saturate(3)`;
    }
    else if ((e.clientX <= 1192 && e.clientX >= 1110) && (e.clientY >= 316 && e.clientY <= 470)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
      peluche2.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
      peluche3.style.filter = `hue-rotate(120deg) brightness(200%) saturate(100%)`;
    }
    else if ((e.clientX <= 1117 && e.clientX >= 990) && (e.clientY >= 471 && e.clientY <= 537)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(150deg) saturate(3)`;
      peluche2.style.filter = `hue-rotate(150deg) saturate(3)`;
      peluche3.style.filter = `hue-rotate(150deg) saturate(3)`;
    }
    else if ((e.clientX <= 1000 && e.clientX >= 900) && (e.clientY >= 314 && e.clientY <= 450)) {
      selectionAudio.play();
      peluche.style.filter = `hue-rotate(270deg) saturate(3)`;
      peluche2.style.filter = `hue-rotate(270deg) saturate(3)`;
      peluche3.style.filter = `hue-rotate(270deg) saturate(3)`;
    }
  }
  else if(peluche.src==opcion3){
    /* Rojo */
    if((e.clientX<=1111&&e.clientX>=994)&&(e.clientY>=106&&e.clientY<=272)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(350deg) saturate(5)`;
      peluche2.style.filter=`hue-rotate(350deg) saturate(5)`;
      peluche3.style.filter=`hue-rotate(350deg) saturate(5)`;
    }
    /* Naranja */
    else if((e.clientX<=1180&&e.clientX>=1120)&&(e.clientY>=130&&e.clientY<=301)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(15deg) brightness(100%) saturate(5)`;
      peluche2.style.filter=`hue-rotate(15deg) brightness(100%) saturate(5)`;
      peluche3.style.filter=`hue-rotate(15deg) brightness(100%) saturate(5)`;
    }
    /* Amarillo */
    else if((e.clientX<=1194&&e.clientX>=1075)&&(e.clientY>=321&&e.clientY<=486)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(30deg) brightness(200%) saturate(100%)`;
      peluche2.style.filter=`hue-rotate(30deg) brightness(200%) saturate(100%)`;
      peluche3.style.filter=`hue-rotate(30deg) brightness(200%) saturate(100%)`;
    }
    /* Verde */
    else if((e.clientX<=1095&&e.clientX>=979)&&(e.clientY>=336&&e.clientY<=510)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(60deg) brightness(100%) saturate(5)`;
      peluche2.style.filter=`hue-rotate(60deg) brightness(100%) saturate(5)`;
      peluche3.style.filter=`hue-rotate(60deg) brightness(100%) saturate(5)`;
    }
    /* Azul */
    else if((e.clientX<=1032&&e.clientX>=910)&&(e.clientY>=316&&e.clientY<=462)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(210deg) saturate(3)`;
      peluche2.style.filter=`hue-rotate(210deg) saturate(3)`;
      peluche3.style.filter=`hue-rotate(210deg) saturate(3)`;
    }
    /* Morado */
    else if((e.clientX<=1038&&e.clientX>=912)&&(e.clientY>=149&&e.clientY<=290)){
      selectionAudio.play();
      peluche.style.filter=`hue-rotate(270deg) saturate(2)`;
      peluche2.style.filter=`hue-rotate(270deg) saturate(2)`;
      peluche3.style.filter=`hue-rotate(270deg) saturate(2)`;
    }
   
  }
});

/* Nivel 3 manejo de eventos para ponerle los accesorios */


/*Stepform nivel 1,2,3 y 4*/
const steps = Array.from(document.querySelectorAll("section .step"));
const nextBtn = document.querySelectorAll("section .btn-step-next");
const prevBtn = document.querySelectorAll("section .btn-step-prev");
const audioClick = new Audio("/assets/audio/click.mp3");

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
    osoAzul.style.display="flex";
    perro.style.display="flex";
    osoCafe.style.display="flex";
    conejo.style.display="flex";
    index--;
  }
  steps[index].classList.add("activo");
  steps[index].classList.remove("d-none");
}

