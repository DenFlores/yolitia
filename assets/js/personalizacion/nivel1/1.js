/* let ball = document.getElementById('ball');
let tank = document.getElementById('tank');

ball.addEventListener("mousedown",(e)=>{
    console.log(e.clientX);
   
        ball.style.transformOrigin=`50% 0%`;
        ball.style.transform=`rotate(10deg)`;
   
}) */

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
