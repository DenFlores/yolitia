/* const ball = document.querySelector("#ball")
const palanca = document.querySelector(".move-palanca");


ball.addEventListener("mousedown",mousedown)

function mousedown(e){
    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    let prevY = e.clientY;

    function mousemove(e) {
        let newX = e.clientX;
        
       
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
}  */

const brazo=document.querySelector("#brazo");
const btnleft=document.querySelector(".btn-left");
const btnright=document.querySelector(".btn-right");

btnleft.addEventListener("click",bajarBrazo);

function bajarBrazo(e){
console.log(e);
brazo.style.height="100%";
}
