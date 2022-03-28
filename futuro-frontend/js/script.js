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

$(document).ready(function () {
    // Função para imagens rotativas na área de " Nossos Trabalhos "
    let vtBanner = ["img/bannerjoao2.jpg", "img/bannerjoao.jpg","img/banner2.png","img/banner1.png", "img/banner5.png","img/GamerIndie-Br.png","img/banneroscar.jpg","img/banneroscar2.jpg"];
    let max = vtBanner.length - 1;
    let i = 0;

    $("#trocImg2").css("backgroundImage", "url(" + vtBanner[0] + ")");

    setInterval(() => troca(1), 3000)

    function troca(opr) {
        $("#trocImg2").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeOut(3000, function () {
            i += opr;
            if (i > max) {
                i = 0;
            } else if (i < 0) {
                i = max;
            }
            $("#trocImg2").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeIn(3000);
        });
    }
}) 

// FUNÇÃO PARA FILTRAR AS CATEGORIAS DEFINIDAS NO HTML, ATRIBUINDO O EVENTO DE CLICK AOS BOTÕES (.FILTER-BTN)
$(".filter-btn").on("click", function(){

    let type = $(this).attr("id");
    let boxes = $(".projet-box");

    $(".main-btn").removeClass("active");
    $(this).addClass("active");

    // QUANDO O BOTÃO REFERENTE FOR CLICADO CHAMARA AS IMAGENS COM A CLASSE REFERIDA, E ADICIONARA UMA NOVA CLASSE PARA ALTERAR SEU TAMANHO (COL-MD-6).
    if(type == "andre-btn"){
      eachBoxes("andre", boxes);
      boxes.addClass("col-md-6"); 
    
    } else if(type == "dionatam-btn"){
      eachBoxes("dionatam", boxes);
      boxes.addClass("col-md-6");

    } else if(type == "joao-btn"){
      eachBoxes("joao", boxes);
      boxes.addClass("col-md-6");

    } else if(type == "oscar-btn"){
      eachBoxes("oscar", boxes);
      boxes.addClass("col-md-6");

    } else {
      eachBoxes("all", boxes);
      boxes.removeClass('col-md-6');

    }
  });

  // FUNÇÃO QUE VAI FAZER A TROCA DAS IMAGENS FILTRADAS
  function eachBoxes(type, boxes){

    if(type == "all"){
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function(){
        if(!$(this).hasClass(type)){
          $(this).fadeOut("slow");
        } else {
          $(this).fadeIn();
        }
      })
    }
  }


// Função para que o nome da empresa que fica sobre a imagem seja escrito em looping
let j = 0;
let txt = "Futuro Front-End"

setInterval(() => {
    if (j < txt.length) {
        document.getElementById("nome").innerHTML += txt.charAt(j);
        j++;
    } else {
        j = 0;
        document.getElementById("nome").innerHTML = "";
    }
}, 300)

//Acessibilidade (Desenvolvido por @Dionata)
function fonte(e){
  var elemento = $(".acessibilidade");
  var fonte = elemento.css('fontSize');

  if(e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);
    
  
  } else if('d'){
    elemento.css("fontSize", parseInt(fonte) - 1);
    
  }
}