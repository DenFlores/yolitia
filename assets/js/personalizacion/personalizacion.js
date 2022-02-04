/*Nivel 1 movimiento de palanca giratoria y seleccion de peluche*/
let brazo=document.querySelector("#brazo");
let btnleft=document.querySelector(".btn-left");
let btnright=document.querySelector(".btn-right");

btnleft.addEventListener("click",bajarBrazo);

function bajarBrazo(e){
console.log(e);
brazo.style.height="100%";
}

const ball = document.querySelector("#ball")
const palanca = document.querySelector(".move-palanca");


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
/*Stepform nivel 2,3 y 4*/
const steps = Array.from(document.querySelectorAll("section .step"));
const nextBtn=document.querySelectorAll("section .btn-siguiente");
const prevBtn=document.querySelectorAll("section .btn-regresar");

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
    let index = 0;
    const active = document.querySelector("section .activo");
    index = steps.indexOf(active);
    steps[index].classList.remove("activo");
    if (btn === "next") {
      index++;
    } else if (btn === "prev") {
      index--;
    }
    steps[index].classList.add("activo");
  }

