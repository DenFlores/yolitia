let ball = document.getElementById('ball');
let tank = document.getElementById('tank');

ball.addEventListener("mousedown",(e)=>{
    console.log(e.clientX);
   
        ball.style.transformOrigin=`50% 0%`;
        ball.style.transform=`rotate(10deg)`;
   
})