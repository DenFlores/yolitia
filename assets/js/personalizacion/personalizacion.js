/*Nivel 1 movimiento de palanca giratoria y seleccion de peluche*/

const ball = document.querySelector("#ball")
const palanca = document.querySelector(".move-palanca");
const brazo=document.querySelector("#brazo");
const btnleft=document.querySelector(".btn-left");
const btnright=document.querySelector(".btn-right");

ball.addEventListener("mousedown",mousedown)

function mousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = e.clientX;
        
        /* console.log(newX) */
        let angulo = Math.tan(newX/220) * 10;
        console.log(angulo)
        if(Math.abs(angulo) < 45){
            palanca.style.transform = `rotate(${angulo}deg)`
        }
        
        prevX = e.clientX;
        prevY = e.clientY;
      }

    function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
    }
}

/* Nivel uno movimiento arriba y abajo brazo robotico */

btnleft.addEventListener("click",bajarBrazo);

function bajarBrazo(e){
console.log(e);
const audioBajarBrazo=new Audio("/assets/audio/bajar-brazo.mp3");
audioBajarBrazo.play();
brazo.style.height="100%";
}

btnright.addEventListener("click",subirBrazo);

function subirBrazo(e){
    console.log(e);
    const audioSubirBrazo=new Audio("/assets/audio/subir-brazo.mp3");
    audioSubirBrazo.play();
    brazo.style.height="auto";
}

/* Nivel 2 cambio de colores */

let colores = document.getElementById('colores');
let peluche = document.getElementById('peluche');

colores.addEventListener("click",(e)=>{
    const selectionAudio = new Audio("/assets/audio/selection.mp3")
    console.log(e.clientX + " " + e.clientY);
     if((e.clientX<=1060 && e.clientX>=1030) && (e.clientY<=240&&e.clientY>=99)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(70deg)`;
    } 
    else if((e.clientX<=990 && e.clientX>=903)&&(e.clientY>=146&&e.clientY<=303)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(20deg)`;
    }
    else if ((e.clientX<=1185 && e.clientX>=1080)&&(e.clientY>=169&&e.clientY<=306)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(120deg) saturate(3)`;
    }
    else if ((e.clientX<=1192 && e.clientX>=1110)&&(e.clientY>=316&&e.clientY<=470)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(120deg) brightness(200%) saturate(100%)`;
    }
    else if ((e.clientX<=1117 && e.clientX>=990)&&(e.clientY>=471&&e.clientY<=537)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(150deg) saturate(3)`;
    }
    else if ((e.clientX<=1000 && e.clientX>=900)&&(e.clientY>=314&&e.clientY<=450)){
        selectionAudio.play();
        peluche.style.filter=`hue-rotate(270deg) saturate(3)`;
    }
});

/*Stepform nivel 2,3 y 4*/
const steps = Array.from(document.querySelectorAll("section .step"));
const nextBtn=document.querySelectorAll("section .btn-step-next");
const prevBtn=document.querySelectorAll("section .btn-step-prev");
const audioClick=new Audio("/assets/audio/click.mp3");

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
      index--;
    }
    steps[index].classList.add("activo");
    steps[index].classList.remove("d-none");
  }

