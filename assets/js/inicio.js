window.addEventListener("load",function(){
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
});