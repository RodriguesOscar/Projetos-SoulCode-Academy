// MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event){
  if(event.type === 'touchstart') event.preventDefault();


  const menuPrincipal = document.getElementById('menu-principal');

  menuPrincipal.classList.toggle('active');
  
  const active = menuPrincipal.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);
  if(active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar menu');
  
  } else{
    event.currentTarget.setAttribute('arial-label', 'Abrir menu');
  }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// FIM DO MENU MOBILE



    // ACESSIBILIDADE / ZOOM 
    function fonte(e){
      var elemento = $(".acessibilidade");
      var fonte = elemento.css('fontSize');
    
      if(e == 'a') {
        elemento.css("fontSize", parseInt(fonte) + 1);
        
      
      } else if('d'){
        elemento.css("fontSize", parseInt(fonte) - 1);
        
      }
    }



// CARDS FLIP
$(".card-container").on("click", function(){
  $(this).toggleClass('fliper');
})


// SCROLLSPY
var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#navbar'
})


// RELLAX, ANIMAÇÃO PARALLAX PARA A SEÇÃO QUEM SOMOS

var rellax = new Rellax('.mover', {
  // center: true,
  
  
});


// GOOGLE MAPS API
function inicializar(){
  var coordenadas = {
    lat: -13.38026, lng: -38.912536
  };
  
  var mapa = new google.maps.Map(document.getElementById("mapa"), {

    zoom: 16,
    center: coordenadas

  });
  
  var marcador = new google.maps.Marker({
    position: coordenadas,
    map: mapa,
    title: "Futuro Front End LTDA."
  
  });
  
}

