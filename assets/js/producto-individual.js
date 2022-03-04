var sumar = document.getElementById("mas");
var restar = document.getElementById("menos");
var cantidad = document.getElementById("cantidad");
var importe = document.getElementById("importe");
var valorBase = 499.00;
var prevValue;
function calcular() {
    var value = cantidad.value;
    var isValid = /^[1-9][0-9]*$/.test(value);

    if (!isValid) {
      cantidad.value = prevValue;
    } else {
      prevValue = value;
    }

    importe.value = "$"+ Number.parseFloat(cantidad.value * valorBase).toFixed(2) +"MXN"; 
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
  
  img1.addEventListener("mouseover", function(){
    img1.style.backgroundImage = "url(../assets/img/producto-individual/gorro.png";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorro.png)";

  });

  img2.addEventListener("mouseover", function(){
    img2.style.backgroundImage = "url(../assets/img/producto-individual/gorrito1.jpg.png)";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorrito.jpg.png)";

  })

  img3.addEventListener("mouseover", function(){
    img3.style.backgroundImage = "url(../assets/img/producto-individual/gorrito3.png)";
    console.log(img1.style.backgroundImage);
    imagen.style.backgroundImage = "url(../assets/img/producto-individual/gorrito3.png)";

  })
  


















