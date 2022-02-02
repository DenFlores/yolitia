let colores = document.getElementById('colores');
let peluche = document.getElementById('peluche');

colores.addEventListener("mousedown",(e)=>{
    console.log(e.clientX + " " + e.clientY);
     if((e.clientX<=1060 && e.clientX>=1030) && (e.clientY<=270&&e.clientY>=99)){
        peluche.style.filter=`hue-rotate(70deg)`;
    } 
    else if((e.clientX<=990 && e.clientX>=903)&&(e.clientY>=146&&e.clientY<=303)){
        peluche.style.filter=`hue-rotate(20deg)`;
    }
    else if ((e.clientX<=1185 && e.clientX>=1061)&&(e.clientY>=169&&e.clientY<=306)){
        peluche.style.filter=`hue-rotate(120deg) saturate(3)`;
    }
    else if ((e.clientX<=1192 && e.clientX>=1110)&&(e.clientY>=316&&e.clientY<=470)){
        peluche.style.filter=`hue-rotate(196deg)`;
    }
})