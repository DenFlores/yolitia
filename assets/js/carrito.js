
let codigo1;
let codigo2;
let total = document.querySelector('.total');
let mensaje='No hay elementos';
let contenedorProducto = document.querySelector('.contenedorProducto');
window.addEventListener("load",getPersonalizaciones);


function getPersonalizaciones(){
fetch('http://localhost:8080/api/personalizacion/alldatos').
then(res=>res.json()).
then(productos=>{
    console.log(productos)
    let precios ;
    const preciosT = []
    for(let i=0;i<productos.length;i++){
        precios=productos[i].precio;
        preciosT.push(precios)
        codigo1=`<div class="row rounded seccion d-block d-lg-flex ">
       <div class="col" > <!--imagen del producto-->
           <div class="row fondoimg   rounded" >
               <img src="${productos[i].modelo!=undefined?productos[i].modelo:mensaje}" class="col-4 col-xl-4" alt="" style="filter:${productos[i].color};">
               <img src="${productos[i].monio!=undefined?productos[i].monio:mensaje}" class="col-4 col-xl-4" alt="">
               <img src="${productos[i].sombrero!=undefined?productos[i].sombrero:mensaje}" class="col-4 col-xl-4" alt="">
           </div>
       </div>
       <div class=" col-6 d-block d-lg-flex align-items-start flex-column mb-3"> <!--descripción y cantidad-->
           <p class="titulo">${productos[i].nombre!=undefined?productos[i].nombre:mensaje}</p>
           <p class="">Descripción:${productos[i].descripcion!=undefined?productos[i].descripcion:mensaje}</p>
           <div class="d-flex mt-auto" >
               <p>Cantidad:</p>
               <input id="cantidad" type="number" class="incantidad" value="1" min="1" max="10">
               <input id="menos" class="beliminar rounded-circle" type="button" value="-"> 
               <input id="mas" class="bagregar rounded-circle" type="button" value="+">                        
           </div>
           
       </div>
       <div class="col d-flex  align-items-end justify-content-center justify-content-lg-end "><!--Precio-->
           <p id="precio" class="precio rounded">${productos[i].precio!=undefined?productos[i].precio:mensaje}</p>
           
       </div>
       </div> 
       `;
       const espacio = document.createElement('div');
       espacio.innerHTML = codigo1;
       contenedorProducto.appendChild(espacio);
       
       codigo2=` <p class="titulo">Total </p>
       <!--<div class="linea"></div>-->
       <p>Productos: ${i!=undefined?i+1:0} <span id="preciototal" style="margin-left: 20px;"></span></p>

       <p>Envío: $100</p>
       <p id="totalPago">Total ${0}</p>

       <div class="row d-flex mt-auto w-100 justify-content-center">
           <div class="col-12 col-xl-12">
               <img class="img-fluid mb-4" src="../assets/img/carrito/carrito.png" alt="">
           </div>
           <div class="col-12 col-xl-12">
            
               <a class="btn w-100 h-100 bpagar rounded boton" href="pago.html">
               Confirmar pedido
               </a>
           </div>
                                         
       </div>`

        if(i==productos.length-1){
            const espacio2=document.createElement('div')
            espacio2.innerHTML=codigo2;
            total.appendChild(espacio2);
            const totatlD = preciosT.reduce((acc, val) => acc += val, 100)
            const totalPago = document.querySelector("#totalPago")
            totalPago.innerHTML = "Total: " + totatlD
        }

       }


          let mas = document.querySelectorAll('#mas');
       let cantidad = document.querySelectorAll('#cantidad');
       let precioCalculado=document.querySelectorAll('#precio');
        
       for(let j=0;j<10;j++){
           mas[j].addEventListener("click",()=>{
               cantidad[j].value++;
               precioCalculado[j].textContent=parseInt(cantidad[j].value)*parseInt(precioCalculado[j].textContent).toFixed(2)
           })
       }
})

}