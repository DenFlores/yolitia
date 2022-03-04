let $cantidad = document.querySelector('#cantidad');
let $mas = document.querySelector('#mas');
let $menos = document.querySelector('#menos');
let $precio = document.queryCommandValue('#precio');
let $preciotot = document.querySelector('#preciotot');
let $preciototal = document.querySelector('#preciototal');
let preciob = 499.00;
$preciototal.textContent = `$${(preciob).toFixed(2)}`;


let $envio = document.querySelector('#envio');
let $totPagar = document.querySelector('#totPagar');
$totPagar.textContent = `$${((cantidad.value * preciob) + (cantidad1.value * preciob1) + (cantidad2.value * preciob2)).toFixed(2)}`;

$mas.addEventListener('click', () => {    
    $cantidad.value++;    
    $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)}`;
    $preciototal.textContent = $preciotot.value;
    $totPagar.textContent = `$${((cantidad.value * preciob) + (cantidad1.value * preciob1) + (cantidad2.value * preciob2)).toFixed(2)}`;
});

$menos.addEventListener('click', () => {
    if($cantidad.value <= 1){
        $cantidad.value = null;
    } else {
        $cantidad.value--;             
    }
    $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)}`;
    $preciototal.textContent = $preciotot.value;
    $totPagar.textContent = `$${((cantidad.value * preciob) + (cantidad1.value * preciob1) + (cantidad2.value * preciob2)).toFixed(2)}`;
});

$cantidad.oninput = function(){
    if($cantidad.value < 0){
        $cantidad.value = null;
    } else {
        $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)}`;
        $preciototal.textContent = $preciotot.value;   
        $totPagar.textContent = `$${((cantidad.value * preciob) + (cantidad1.value * preciob1) + (cantidad2.value * preciob2)).toFixed(2)}`;
    }    
}


const calcularTotPagar = () => {
    let suma = $preciotot.value + $preciotot1.value + $preciototal2.value;
    console.log(suma);
}

calcularTotPagar();


const carrito = JSON.parse(localStorage.getItem('carrito'));
console.log(carrito)

//const productoS = []
let contenedorDeProductos = $("#containerProductos");
contenedorDeProductos.html("");
let contenido ="";

window.addEventListener("load",()=>{
    /*fetch('http://localhost:8080/api/productos',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json()).then(datos => {*/

    datos.forEach((carrito)=>{
        //console.log(dato)
        let item = `<div class="row rounded seccion d-block d-lg-flex ">
        <div class="col" > <!--imagen del producto-->
            <div class=" fondoimg   rounded" >
                <img src=${dato.imagen} alt="">
            </div>
        </div>
        <div class=" col-6 d-block d-lg-flex align-items-start flex-column mb-3"> <!--descripción y cantidad-->
            <p class="titulo">${dato.nombre}</p>
            <p class="">${dato.descripcion}</p>
            <div class="d-flex mt-auto" >
                <p>Cantidad:</p>
                <input id="cantidad" type="number" class="incantidad" value="1" min="1" >
                <input id="menos" class="beliminar rounded-circle" type="button" value="-"> 
                <input id="mas" class="bagregar rounded-circle" type="button" value="+">                        
            </div>
            
        </div>
        <div class="col d-flex  align-items-end justify-content-center justify-content-lg-end "><!--Precio-->
            <input id="preciotot" type="text" class="precio rounded" value="${dato.precio}">
            
        </div>
    </div>    
                        `
            contenido += item;
        contenedorDeProductos.html(contenido);
    })

    botones = document.querySelectorAll(".btn-comprar-info");
    botones.forEach((btn)=>{
        btn.addEventListener("click",guardarDato)
        //btn.setAttribute
    })

    function guardarDato(evento){
        console.log(evento.target.getAttribute("alt"))
        productoS.push(evento.target.getAttribute("alt"))
        localStorage.setItem('productoS', JSON.stringify(productoS));
    }


    

  })
})
