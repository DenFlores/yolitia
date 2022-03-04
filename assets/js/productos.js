
/* function Productos (nombre, precio, imagen){
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.disponibilidad = true;
}

const producto1 = new Productos("Llavero de pinguino", 500, 1);
const producto2 = new Productos("Llavero de osito", 500, 2);
const producto3 = new Productos("Llavero osito polar", 500, 3);
const producto4 = new Productos("Pantuflas peluche", 500, 4);
const producto5 = new Productos("Garras Oso", 500, 5);
const producto6 = new Productos("Gorro Oso", 500, 6);
const producto7 = new Productos("Pijama oso", 500, 7);
const producto8 = new Productos("Gorro conejo", 500, 8);
const producto9 = new Productos("Gorro conejo", 500, 9);




let paginaActual = 1;
let registrosPorPagina = 9;

function crearObjetosRandom () {
    let nombresDeProducto = ["Llavero de pinguino", "Llavero de osito", "Llavero osito polar", "Pantuflas peluche", "Garras Oso", "Gorro Oso", "Pijama oso", "Gorro conejo"];
    let nombreRandom = nombresDeProducto[Math.floor(Math.random()*nombresDeProducto.length)]
    let numeros = [1,2,3,4,5,6,7,8,9];
    let precios = [150,284,546,440,890,610];
    let numeroRandom = numeros[Math.floor(Math.random()*numeros.length)];
    let precioRandom = precios[Math.floor(Math.random()*precios.length)];
    const producto = new Productos(nombreRandom, precioRandom, numeroRandom);
    return producto;
}

for (let index = 0; index < 45; index++) {
    
    productos.push(crearObjetosRandom());
    
} */



//const productos = [ ];

const productoS = []
let contenedorDeProductos = $("#containerProductos");
contenedorDeProductos.html("");
let contenido ="";

window.addEventListener("load",()=>{
    fetch('http://localhost:8080/api/productos/allproductos',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json()).then(datos => {

    datos.forEach((dato)=>{
        //console.log(dato)
        let item = `<div class="col-12 col-md-4 my-3">
                        <div class="card h-100 color-cards m-4">
                            <img
                            src=${dato.imagen}
                            class="image-card img-fluid"
                            
                            />
                            <div class="card-body mr-auto ml-auto mb-3 color-card-info">
                            <h5 class="card-title text-center">${dato.nombre}</h5>
                            <p class="card-text text-center">$${dato.precio}.00 MXN</p>
                            <div class="btn-info-card">
                                <a class="btn-comprar-info" alt="${dato.id}" href="producto-individual.html">Comprar</a>
                            </div>
                            </div>
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





/* function configurarPaginador (productos, registrosPorPagina) {
    let cantidadDePaginas = Math.ceil(productos.length / registrosPorPagina);
    let paginador = "";
    
    for ( let i = 1; i < cantidadDePaginas + 1; i++) {
        let boton = `<li class="page-item" aria-current="page" data-pagina="${i}">
        <a href="#?page=${i}">
        <span class="page-link">${i}</span>
        </a>
        </li>
    `
    paginador += boton;
    }

    

    $("#paginador").html(paginador);


};

function pintarRegistros (productos) {
    let contenedorDeProductos = $("#containerProductos");
    contenedorDeProductos.html("");
    let contenido ="";

    productos.forEach(producto => {
        let item = `<div class="col-12 col-md-4 my-3">
        <div class="card h-100 color-cards m-4">
          <img
            src="../assets/img/productos/${producto.imagen}.png"
            class="image-card img-fluid"
            alt="..."
          />
          <div class="card-body mr-auto ml-auto mb-3 color-card-info">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center">$${producto.precio}.00 MXN</p>
            <div class="btn-info-card">
              <a class="btn-comprar-info" href="producto-individual.html">Comprar</a>
            </div>
          </div>
        </div>
      </div>  
        `
        contenido += item;
    });

    contenedorDeProductos.html(contenido);
};

function crearPagina (productos, registrosPorPagina, pagina) {
    let contenedorDeProductos = $("#containerProductos");
    contenedorDeProductos.html("");
    pagina--;
    let puntoDeInicio = registrosPorPagina * pagina;
    let puntoDeTermino = puntoDeInicio + registrosPorPagina;
    let elementosPaginados = productos.slice(puntoDeInicio, puntoDeTermino);
    pintarRegistros(elementosPaginados);
}

function get_url_param(param){
    let parametros = window.location.href
        parametros = parametros.split('#')[1]
        parametros = new URLSearchParams(parametros)

    return parametros.get(param)
}

window.addEventListener("popstate", function(event){

    crearPagina(productos, registrosPorPagina, get_url_param("page"));
})


if(get_url_param("page") == null) {
    crearPagina(productos, registrosPorPagina, 1);
} else {
    crearPagina(productos, registrosPorPagina, get_url_param("page"));
}

configurarPaginador(productos, registrosPorPagina); */