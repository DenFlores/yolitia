
function Productos (nombre, precio, imagen){
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


const productos = [ ];

let paginaActual = 1;
let registrosPorPagina = 9;

function crearObjetosRandom () {
    let nombresDeProducto = ["Llavero1", "Llavero2", "Pantuflas", "Pantuflas2", "Garras", "Garras1", "Garras2", "Gorro", "Gorro1", "Gorro2"];
    let nombreRandom = nombresDeProducto[Math.floor(Math.random()*nombresDeProducto.length)]
    let numeros = [1,2,3,4,5,6,7,8,9];
    let precios = [100,200,300,400,500,600];
    let numeroRandom = numeros[Math.floor(Math.random()*numeros.length)];
    let precioRandom = precios[Math.floor(Math.random()*precios.length)];
    const producto = new Productos(nombreRandom, precioRandom, numeroRandom);
    return producto;
}

for (let index = 0; index < 45; index++) {
    
    productos.push(crearObjetosRandom());
    
}

function configurarPaginador (productos, registrosPorPagina) {
    let cantidadDePaginas = Math.ceil(productos.length / registrosPorPagina);
    let paginador = "";
    /* paginador += primerBoton; */

    for ( let i = 1; i < cantidadDePaginas + 1; i++) {
        let boton = `<li class="page-item" aria-current="page" data-pagina="${i}">
        <a href="#?page=${i}">
        <span class="page-link">${i}</span>
        </a>
        </li>
    `
    paginador += boton;
    }

    /* paginador += ultimoBoton; */

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
            src="assets/img/productos/${producto.imagen}.png"
            class="image-card img-fluid"
            alt="..."
          />
          <div class="card-body mr-auto ml-auto mb-3 color-card-info">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center">$${producto.precio}.00 MXN</p>
            <div class="btn-info-card">
              <a class="btn-comprar-info" href="">Comprar</a>
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
    /* $("#") */
    /* console.log(get_url_param("page")); */
    crearPagina(productos, registrosPorPagina, get_url_param("page"));
})


if(get_url_param("page") == null) {
    crearPagina(productos, registrosPorPagina, 1);
} else {
    crearPagina(productos, registrosPorPagina, get_url_param("page"));
}

configurarPaginador(productos, registrosPorPagina);


/* const paginacion = [paginaUno, paginaDos, paginaTres, paginaCuatro, paginaCinco];
 */
/* btn1.addEventListener("click",() ==> [0]);
btn2.addEventListener("click",() ==> [1]);
btn3.addEventListener("click",() ==> [2]);
btn4.addEventListener("click",() ==> [3]);
btn5.addEventListener("click",() ==> [4]); */