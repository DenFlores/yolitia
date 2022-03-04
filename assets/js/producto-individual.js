var sumar = document.getElementById("mas");
var restar = document.getElementById("menos");
var cantidad = document.getElementById("cantidad");
var importe = document.getElementById("importe");
var gorro1 = document.querySelector('#titulo');
var descrip = document.querySelector('#descripcion');
var precio = document.querySelector('#importe');
var gorrito_cafe = document.querySelectorAll('#gorritoCafe');

var prevValue;
const gorro = {
  name: "Gorro",
  description : "Gorrito de peluche especial para temporada de frio o cualquier ocasión que desees...",
  valorBase: 499.33,
  imagen: "https://res.cloudinary.com/uniquegeneration/image/upload/v1646366152/gorroConejo_brel6s.png"
}

/*gorro1.innerHTML = gorro.name;
descrip.innerHTML = gorro.description;
precio.innerHTML = gorro.price;


for(let i=0; i<gorrito_cafe.length; i++){
 gorrito_cafe[i].style.backgroundImage = `url(${gorro.imagen})`

}*/

function calcular() {
    var value = cantidad.value;
    var isValid = /^[1-9][0-9]*$/.test(value);

    if (!isValid) {
      cantidad.value = prevValue;
    } else {
      prevValue = value;
    }

    importe.value = "$"+ Number.parseFloat(cantidad.value * gorro.valorBase).toFixed(2) +"MXN"; 
  }

  sumar.onclick = function() {
    cantidad.value = Number(cantidad.value) + 1;
    calcular();
  };

  restar.onclick = function() {
    cantidad.value = Number(cantidad.value) - 1;
    calcular();
  };

  cantidad.onchange = function() {
    calcular();
  };

  cantidad.onkeyup = function() {
    if (cantidad.value === "") {
      return;
    }
    calcular();
  };

  calcular();







  const img1 = document.querySelector(".img1")
  const img2 = document.querySelector(".img2")
  const img3 = document.querySelector(".img3")
  const imagen = document.querySelector(".imagen1")
  
 /* img1.addEventListener("mouseover", function(){
    img1.style.backgroundImage = "url(../assets/img/producto-individual/gorro.png";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorro.png)";
    

  });

  img2.addEventListener("mouseover", function(){
    img2.style.backgroundImage = "url(../assets/img/producto-individual/gorrito1.jpg.png)";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorrito1.jpg.png)";
    

  })

  img3.addEventListener("mouseover", function(){
    img3.style.backgroundImage = "url(../assets/img/producto-individual/gorrito3.png)";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorrito3.png)";
    
  })*/


  const productoS1 = JSON.parse(localStorage.getItem('productoS'));
  console.log(productoS1)


  const btncarrito = document.querySelector(".boton-confirmar")

  btncarrito.addEventListener("click",()=>{
    if (localStorage.getItem('carrito') !== null){
      carrito = JSON.parse(localStorage.getItem('carrito'))
    }
    carrito.push(productoS1[0])
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito));

  })

  let direccion = 'http://localhost:8080/api/productos/' + productoS1[0]
  console.log(direccion)
 fetch(direccion,{
   method: 'GET',
   headers:{
    'Content-Type': 'application/json'
  }

 })
 .then(res => res.json())
  .then(response =>{
    console.log('Success11:', response)
    gorro1.innerHTML = response.nombre;
    descrip.innerHTML = response.descripcion;
    precio.innerHTML = response.precio;


for(let i=0; i<gorrito_cafe.length; i++){
 gorrito_cafe[i].style.backgroundImage = `url(${response.imagen})`

}
      
});
 
 /* const peluche = {
    nombre: "Peluchin",
    descripcion: "Osito de peluche bonito",
    precio: 429.00,
    return "nombre" + "descripcion" + "precio";
  }
  */
  //document.getElementById('gorritoCafe') + innerHTML.peluche;

    //crear objeto y pintarlo en producto individual.


  
  
  /*console.log("localhost:8080/api/productos/" + productoS1[0])
  titulo = document.querySelector(".Titulo")
  des = document.querySelector(".des")
  im = document.querySelector(".im")

  fetch("localhost:8080/api/productos/" + productoS1[0]).then()
  .then(resp =>{
    titulo.innerHTML =  resp.titulo;
    des.innerHTML =  resp.descripcion;
    im.style.backgroundImage = `url(${ resp.imagen})`;

    resp.precio 
    ;
   })*/














