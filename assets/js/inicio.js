
const proPopulares = document.querySelector("#productos-populares")

window.addEventListener("load",()=>{
  fetch('http://localhost:8080/api/peluche/alldatos',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json()).then(datos => {
    datos.forEach((dato)=>{
      const nombre = dato.nombre;
      const precio = dato.precio;
      const imagen = dato.imagen;

      const plantilla = `<div class="col mb-4">
                      <div class="card h-100 color-cards m-4">
                        <img
                          src=${imagen}
                          class="image-card h-100"
                          alt="..."
                        />
                        <div class="card-body mr-auto ml-auto mb-3 color-card-info">
                          <h5 class="card-title text-center">${nombre}</h5>
                          <p class="card-text text-center">$${precio} MXN</p>
                          <div class="btn-info-card">
                            <a class="btn-per-info" href="templates/personalizacion.html">Personalizar</a>
                            <a class="btn-comprar-info" href="templates/producto-individual.html">Comprar</a>
                          </div>
                        </div>
                      </div>
                    </div>`

      const elemento = document.createElement("div");
      elemento.innerHTML = plantilla;

      proPopulares.appendChild(elemento)


    })
    
  })
})

const cajaGrande = document.querySelector(".producto-principal");
const cajaPeque1 = document.querySelector(".caja-azul");
const cajaPeque2 = document.querySelector(".caja-roja");
const textos = document.querySelectorAll(".texto-animado-producto");

window.addEventListener("load",()=>{
  fetch("http://localhost:8080/api/productos/productosn",{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json()).then(datos=>{
    cajaGrande.style.backgroundImage = `url(${datos[0].imagen})`;
    cajaPeque1.style.backgroundImage = `url(${datos[1].imagen})`;
    cajaPeque2.style.backgroundImage = `url(${datos[2].imagen})`;
    textos.forEach((texto,i)=>{
      texto.innerHTML = datos[i].nombre;
    })


    console.log(datos)
    console.log(datos[0].imagen)
  })
})



let carouselLista = document.querySelector(".carousel__lista");

window.addEventListener("load",()=>{
  fetch('http://localhost:8080/api/resenias/all',{
    method: 'GET',
    headers: {
      'Content-type': 'application/json'
    }
  })
  .then(resp => resp.json()).then(datos => {
        for(let i=0;i<datos.length;i++){
          let texto = datos[i].texto;
          let imagen = datos[i].imagen;
          let nombre = datos[i].nombre;
          const colores = ["","azul-comentario","verde-comentario"]
          let vala;
          if(i%2 == 0){
            vala = colores[1]
          }
          else{
            vala = colores[2]
          }
        
          let plantilla = `<div class="carousel__elemento">
                              <div class="cuadro-comentario ${vala}">
                                <div class="alinear-cuadro-comentario">
                                  <p>${texto}</p>
                                  <div class="circulo">
                                    <img class="imagen-comentario" src="${imagen}" alt="">
                                  </div>
                                  <h5 class="mt-5">${nombre}</h5>
                                </div>
                              </div>
                            </div>`
          const elemento = document.createElement("div");
          elemento.innerHTML = plantilla;
        
          carouselLista.appendChild(elemento)
        }

        new Glider(document.querySelector(".carousel__lista"),{
        
          slidesToShow: 5,
          slidesToScroll: 1,
          draggable: false,
          dots: '.carousel__indicadores',
          arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
          },
          responsive: [
              {
                  breakpoint: 320,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                    
                  }
              },
              {
                  breakpoint: 576,
                  settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    
                    
                  }
              },
            {
                
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 1,
                
                
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
                
              }
            },{
              breakpoint: 1300,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                
                
            }
          }
          ]
      });
  })
})