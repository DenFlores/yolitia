let $cantidad = document.querySelector('#cantidad');
let $mas = document.querySelector('#mas');
let $menos = document.querySelector('#menos');
let $precio = document.queryCommandValue('#precio');
let $preciotot = document.querySelector('#preciotot');
let $preciototal = document.querySelector('#preciototal');
let preciob = 499.00;

let $cantidad1 = document.querySelector('#cantidad1');
let $mas1 = document.querySelector('#mas1');
let $menos1 = document.querySelector('#menos1');
let $precio1 = document.queryCommandValue('#precio1');
let $preciotot1 = document.querySelector('#preciotot1');
let $preciototal1 = document.querySelector('#preciototal1');
let preciob1 = 199.00;

let $cantidad2 = document.querySelector('#cantidad2');
let $mas2 = document.querySelector('#mas2');
let $menos2 = document.querySelector('#menos2');
let $precio2 = document.queryCommandValue('#precio2');
let $preciotot2 = document.querySelector('#preciotot2');
let $preciototal2 = document.querySelector('#preciototal2');
let preciob2 = 255.00;

$mas.addEventListener('click', () => {    
    $cantidad.value++;       
    $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)} MXN`;     
    $preciototal.textContent = $preciotot.value;
});

$menos.addEventListener('click', () => {
    if($cantidad.value <= 1){
        $cantidad.value = null;
    } else {
        $cantidad.value--;             
    }
    $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)} MXN`;
    $preciototal.textContent = $preciotot.value;
    
});

$cantidad.oninput = function(){
    if($cantidad.value < 0){
        $cantidad.value = null;
    } else {
        $preciotot.value = `$${(cantidad.value * preciob).toFixed(2)} MXN`; 
        $$preciototal.textContent = $preciotot.value;       
    }    
}

$mas1.addEventListener('click', () => {
    $cantidad1.value++;       
    $preciotot1.value = `$${($cantidad1.value * preciob1).toFixed(2)} MXN`; 
    $preciototal1.textContent = $preciotot1.value;
});

$menos1.addEventListener('click', () => {
    if($cantidad1.value <= 1){
        $cantidad1.value = null;
    } else {
        $cantidad1.value--;             
    }
    $preciotot1.value = `$${(cantidad1.value * preciob1).toFixed(2)} MXN`;
    $preciototal1.textContent = $preciotot1.value;
});

$cantidad1.oninput = function(){
    if($cantidad1.value < 0){
        $cantidad1.value = null;
    } else {
        $preciotot1.value = `$${(cantidad1.value * preciob1).toFixed(2)} MXN`; 
        $preciototal1.textContent = $preciotot1.value;        
    }   
}

$mas2.addEventListener('click', () => {
    $cantidad2.value++;       
    $preciotot2.value = `$${(cantidad2.value * preciob2).toFixed(2)} MXN`; 
    $preciototal2.textContent = $preciotot2.value;
});

$menos2.addEventListener('click', () => {
    if($cantidad2.value <= 1){
        $cantidad2.value = null;
    } else {
        $cantidad2.value--;             
    }
    $preciotot2.value = `$${(cantidad2.value * preciob2).toFixed(2)} MXN`;
    $preciototal2.textContent = $preciotot2.value;
});

$cantidad2.oninput = function(){
    if($cantidad2.value < 0){
        $cantidad2.value = null;
    } else {
        $preciotot2.value = `$${(cantidad2.value * preciob2).toFixed(2)} MXN`; 
        $preciototal2.textContent = $preciotot2.value;        
    }   
}

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