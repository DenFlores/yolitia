let colores = document.getElementById('colores');
let peluche = document.getElementById('peluche');

colores.addEventListener("mousedown",(e)=>{
    console.log(e.clientX + " " + e.clientY);
     if((e.clientX<=1060 && e.clientX>=1030) && (e.clientY<=240&&e.clientY>=99)){
        peluche.style.filter=`hue-rotate(70deg)`;
    } 
    else if((e.clientX<=990 && e.clientX>=903)&&(e.clientY>=146&&e.clientY<=303)){
        peluche.style.filter=`hue-rotate(20deg)`;
    }
    else if ((e.clientX<=1185 && e.clientX>=1080)&&(e.clientY>=169&&e.clientY<=306)){
        peluche.style.filter=`hue-rotate(120deg) saturate(3)`;
    }
    else if ((e.clientX<=1192 && e.clientX>=1110)&&(e.clientY>=316&&e.clientY<=470)){
        peluche.style.filter=`hue-rotate(120deg) brightness(200%) saturate(100%)`;
    }
    else if ((e.clientX<=1117 && e.clientX>=990)&&(e.clientY>=471&&e.clientY<=537)){
        peluche.style.filter=`hue-rotate(150deg) saturate(3)`;
    }
    else if ((e.clientX<=1000 && e.clientX>=900)&&(e.clientY>=314&&e.clientY<=450)){
        peluche.style.filter=`hue-rotate(270deg) saturate(3)`;
    }
})