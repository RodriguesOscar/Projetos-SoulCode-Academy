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