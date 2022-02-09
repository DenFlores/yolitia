let $cantidad = document.querySelector('#cantidad');
let $mas = document.querySelector('#mas');
let $menos = document.querySelector('#menos');
let $precio = document.queryCommandValue('#precio');
let $preciotot = document.querySelector('#preciotot');

$mas.addEventListener('click', () => {
    $cantidad.value++;    
    //$preciotot.value = ($cantidad.value * $precio.value); 
});

$menos.addEventListener('click', () => {
    $cantidad.value--;     
    //$preciotot.value = ($cantidad.value * $preciotot.value); 
});


class Producto {
    constructor (id, img, nombre, descripcion, cantidad, precio) {
        this.id = id;
        this.img = img;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

const Producto1 = new Producto(1, 'Producto 1', 'Descripción', 0, 200);