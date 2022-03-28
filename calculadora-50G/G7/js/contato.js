//Acessibilidade

var calculadora = document.getElementById('calculadora')
var contato = document.getElementById('contato')
var cursos = document.getElementById('cursos')
var dadosText = document.getElementById('dados-text')
var localText = document.getElementById('local-text')
var contatoText = document.getElementById('contato-text')
var nomeLabel = document.getElementById('nome-label')
var cpfLabel = document.getElementById('cpf-label')
var dataLabel = document.getElementById('data-label')
var generoLabel = document.getElementById('genero-label')
var cepLabel = document.getElementById('cep-label')
var estadoLabel = document.getElementById('estado-label')
var cidadeLabel = document.getElementById('cidade-label')
var bairroLabel = document.getElementById('bairro-label')
var ruaLabel = document.getElementById('rua-label')
var telLabel = document.getElementById('tel-label')
var emailLabel = document.getElementById('email-label')
var mensagemLabel = document.getElementById('mensagem-label')
var elementBtnIncreaseFont = document.getElementById('zoom-in');
var elementBtnDecreaseFont = document.getElementById('zoom-out');
// Padrão de tamanho, equivale a 100% do valor definido no Body
var fontSize = 100;
// Valor de incremento ou decremento, equivale a 10% do valor do Body
var increaseDecrease = 10;

// Evento de click para aumentar a fonte
elementBtnIncreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize + increaseDecrease;
    dadosText.style.fontSize = fontSize + '%';
    localText.style.fontSize = fontSize + '%';
    contatoText.style.fontSize = fontSize + '%';
    nomeLabel.style.fontSize = fontSize + '%'
    cpfLabel.style.fontSize = fontSize + '%'
    dataLabel.style.fontSize = fontSize + '%'
    generoLabel.style.fontSize = fontSize + '%'
    cepLabel.style.fontSize = fontSize + '%'
    estadoLabel.style.fontSize = fontSize + '%'
    cidadeLabel.style.fontSize = fontSize + '%'
    bairroLabel.style.fontSize = fontSize + '%'
    ruaLabel.style.fontSize = fontSize + '%'
    telLabel.style.fontSize = fontSize + '%'
    emailLabel.style.fontSize = fontSize + '%'
    mensagemLabel.style.fontSize = fontSize + '%'
    calculadora.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});

// Evento de click para diminuir a fonte
elementBtnDecreaseFont.addEventListener('click', function (event) {
    fontSize = fontSize - increaseDecrease;
    dadosText.style.fontSize = fontSize + '%';
    localText.style.fontSize = fontSize + '%';
    contatoText.style.fontSize = fontSize + '%';
    nomeLabel.style.fontSize = fontSize + '%'
    cpfLabel.style.fontSize = fontSize + '%'
    dataLabel.style.fontSize = fontSize + '%'
    generoLabel.style.fontSize = fontSize + '%'
    cepLabel.style.fontSize = fontSize + '%'
    estadoLabel.style.fontSize = fontSize + '%'
    cidadeLabel.style.fontSize = fontSize + '%'
    bairroLabel.style.fontSize = fontSize + '%'
    ruaLabel.style.fontSize = fontSize + '%'
    telLabel.style.fontSize = fontSize + '%'
    emailLabel.style.fontSize = fontSize + '%'
    mensagemLabel.style.fontSize = fontSize + '%'
    calculadora.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});

//Validação CPF

function VerificaCPF() {
    if (vercpf(document.form.cpf.value)) {

        alert("Olá " + nome.value + ", seu login é " + email.value + " e pode usar o " + cpf.value + " como senha");
    } else {
        errors = "1";
        if (errors) alert('CPF NÃO VÁLIDO');
        document.retorno = (errors == '');
    }
}

function vercpf(cpf) {
    if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999")
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

// Valida formulário

function enviarDados() {
    //If para verificar se o campo nome do formulário fale está vazio ou com menos de dois caracteres.
    if (document.form.nome.value.length < 3) {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo nome corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.nome.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.cep.value.length < 8) {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo CEP corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.cep.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.estado.value.length == "") {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo Estado corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.estado.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.cidade.value.length == "") {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo Cidade corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.cidade.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.bairro.value.length == "") {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo Bairro corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.bairro.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.rua.value.length == "") {
        //Caixa trazendo a informação de que o campo não foi preenchido corretamente
        alert("Preencha campo Rua corretamente!");
        //Focus para setar para a caica de texto que não foi preenchida corretamente
        document.form.rua.focus();
        //Sem o return false, entra numa repetição de caixa de alert e perde a função do focus.
        return false;
    }

    if (document.form.email.value == "" || document.form.email.value.length < 3) {
        alert("Preencha campo e-mail corretamente!");
        document.form.email.focus();
        return false;
    }

    function validarData() {
        var data = document.getElementById("data").value; // pega o valor do input
        data = data.replace(/\//g, "-"); // substitui eventuais barras (ex. IE) "/" por hífen "-"
        var data_array = data.split("-"); // quebra a data em array

        // para o IE onde será inserido no formato dd/MM/yyyy
        if (data_array[0].length != 4) {
            data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remonto a data no formato yyyy/MM/dd
        }

        // comparo as datas e calculo a idade
        var hoje = new Date();
        var nasc = new Date(data);
        var idade = hoje.getFullYear() - nasc.getFullYear();
        var m = hoje.getMonth() - nasc.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

        if (idade < 1) {
            alert("Pessoas menores de 1 ano não podem se cadastrar.");
            return false;
        }

        if (idade > 129) {
            alert("Maiores de 130 anos não podem se cadastrar.");
            return false;
        }

        // se for maior que 1 ano e menor que 130 não vai acontecer nada!
        return true;
    }
    if (validarData() == false) {
        return false;
    }
    VerificaCPF()
}


//CEP
const apresentaDados = (resultado) => {
    for (let campo in resultado) {
        if (document.querySelector("#" + campo)) {
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo];
        }

    }
}

function consultaCep() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "1px solid red";
    } else {
        let cepProcurado = cepDigitado.value.replace("-", "");
        console.log(cepProcurado);
        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
            .then(response => {
                response.json()
                    .then(dados => console.log(apresentaDados(dados)))
            })
            .catch(x => console.log("CEP não encontrado!"))
    }
}