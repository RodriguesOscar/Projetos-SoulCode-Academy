// MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');


function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();


  const menuPrincipal = document.getElementById('menu-principal');

  menuPrincipal.classList.toggle('active');

  const active = menuPrincipal.classList.contains('active');

  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('arial-label', 'Fechar menu');

  } else {
    event.currentTarget.setAttribute('arial-label', 'Abrir menu');
  }

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// FIM DO MENU MOBILE



// ACESSIBILIDADE / ZOOM 
function fonte(e) {
  var elemento = $(".acessibilidade");
  var fonte = elemento.css('fontSize');

  if (e == 'a') {
    elemento.css("fontSize", parseInt(fonte) + 1);


  } else if ('d') {
    elemento.css("fontSize", parseInt(fonte) - 1);

  }
}


function _cpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
function validarCPF(el) {
    if (!_cpf(el.value)) {
        // alert("CPF inválido ou preenchido incorretamente.");
        showModal("Erro!","CPF inválido ou preenchido incorretamente.")
        // apaga o valor
        el.value = "";
    }
}



//CEP - Validação de Rua, Bairro, Cidade e Estado (através da API ViaCep)
const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo]
        }
    }
}

function consultaCEP() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        cepDigitado.style.border = "";
        //Tira o valor do primeiro parâmetro e insere no segundo. CPF apaga ou é retirado
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);

        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(data => (apresentaDados(data)));
            })
            .catch(x => showModal("Erro!","CEP não encontrado!"));
            
    }
}




function enviarDados() {


    if (document.form1.nome.value == "" || document.form1.nome.value.length < 3) {
        // alert("Preencha campo Nome corretamente!");
        showModal("Erro!","Preencha campo Nome corretamente!")
        //propriedade focus setar para o input nome caso não seja preeenchido
        document.form1.nome.focus();
        //O Return false evita laço de repetição e perda da prorpiedade focus
        return false;
    }
    if (document.form1.sobrenome.value == "" || document.form1.sobrenome.value.length < 3) {
        // alert("Preencha campo Sobrenome corretamente!");
        showModal("Erro!","Preencha campo Sobrenome corretamente!")
        document.form1.sobrenome.focus();
        return false;
    }
    if (document.form1.ident.value == "" || document.form1.ident.value.length < 5) {
        // alert("Preencha campo CPF corretamente!");
        showModal("Erro!","Preencha campo CPF corretamente!")
        document.form1.ident.focus();
        return false;
    }
    if (document.form1.email.value == "" || document.form1.email.value.length < 3) {
        // alert("Preencha campo E-mail corretamente!");
        showModal("Erro!","Preencha campo E-mail corretamente!")
        document.form1.email.focus();
        return false;
    }
    if (document.form1.telefone.value == "" || document.form1.telefone.value.length < 10) {
        // alert("Preencha campo Telefone corretamente!");
        showModal("Erro!","Preencha campo Telefone corretamente!")
        document.form1.telefone.focus();
        return false;
    }
    
    

    if (document.form1.cep.value == "" || document.form1.cep.value.length <= 7 || document.form1.cep.value.length > 9 ) {
        // alert("Preencha o  campo CEP corretamente!");
        showModal("Erro!","Preencha o  campo CEP corretamente!")
        document.form1.cep.focus();
        return false;
    }
    if (document.form1.logradouro.value == "" || document.form1.logradouro.value.length < 5) {
        // alert("Preencha o campo Rua corretamente!");
        showModal("Erro!","Preencha o campo Endereço corretamente!")
        document.form1.logradouro.focus();
        return false;
    }
    if (document.form1.uf.value == "" || document.form1.uf.value.length < 1) {
        // alert("Preencha o campo Estado corretamente!");
        showModal("Erro!","Preencha o campo Estado corretamente!")
        document.form1.uf.focus();
        return false;
    }
    if (document.form1.localidade.value == "" || document.form1.localidade.value.length < 3) {
        // alert("Preencha o campo Cidade corretamente!");
        showModal("Erro!","Preencha o campo Cidade corretamente!");
        document.form1.localidade.focus();
        return false;
    }


    if (!(document.querySelector('[name="ckFuncao"]:checked'))) {
        // alert("Nenhum foi selecionado");
        showModal("Erro!","Escolha pelo menos um serviço para prosseguir!");
        console.log((document.querySelector('[name="ckFuncao"]:checked')))
        return false;
    }
    if (document.form1.email.validity.valid==false){
        
        showModal("Erro!","Preencha campo E-mail corretamente!");
        document.form1.email.focus();
        return false;
        
    }
    showModal("Formulário preenchido com sucesso!","Obrigado pela preferência. Entraremos em contato em breve!")
}


// showModal("Formulário preenchido com sucesso!","Obrigado pela preferência. Entraremos em contato em breve!");



var modalWrap = null;
const showModal = (
    titulo,
    descricao
)=>{
    if(modalWrap !== null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML = `
        <div class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header bg-light">
                    <h5 class="modal-title">${titulo}</h5>
                    <button type="button" id="teste" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                </div>
                <div class="modal-body">
                    <p>${descricao}</p>
                </div>
                <div class="modal-footer bg-light">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                </div>
                </div>
            </div>
        </div>
    `;
    document.body.append(modalWrap)
    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show();
}

