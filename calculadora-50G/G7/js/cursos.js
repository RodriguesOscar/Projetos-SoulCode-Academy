//Acessibilidade

var elementH1 = document.querySelector('h1');
var elementH4 = document.querySelector('h4');
var label1 = document.getElementById('qual-calc')
var label2 = document.getElementById('gostaria-aprender')
var label3 = document.getElementById('forma')
var calculadora = document.getElementById('calculadora')
var contato = document.getElementById('contato')
var cursos = document.getElementById('cursos')
var elementBtnIncreaseFont = document.getElementById('zoom-in');
var elementBtnDecreaseFont = document.getElementById('zoom-out');
// Padrão de tamanho, equivale a 100% do valor definido no Body
var fontSize = 100;
// Valor de incremento ou decremento, equivale a 10% do valor do Body
var increaseDecrease = 10;

// Evento de click para aumentar a fonte
elementBtnIncreaseFont.addEventListener('click', function(event) {
    fontSize = fontSize + increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
    elementH4.style.fontSize = fontSize + '%';
    label1.style.fontSize = fontSize + '%';
    label2.style.fontSize = fontSize + '%';
    label3.style.fontSize = fontSize + '%';
    calculadora.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});

// Evento de click para diminuir a fonte
elementBtnDecreaseFont.addEventListener('click', function(event) {
    fontSize = fontSize - increaseDecrease;
    elementH1.style.fontSize = fontSize + '%';
    elementH4.style.fontSize = fontSize + '%';
    label1.style.fontSize = fontSize + '%';
    label2.style.fontSize = fontSize + '%';
    label3.style.fontSize = fontSize + '%';
    calculadora.style.fontSize = fontSize + '%'
    contato.style.fontSize = fontSize + '%'
    cursos.style.fontSize = fontSize + '%'
});

//___________Script cursos__________________________

class Produto{

    constructor(){
        this.id = 1;

        this.arrayProdutos =[];
        this.editId = null;
        
    }

    salvar(){

        let produto = this.lerDados();
           if(this.validaCampos(produto)){
                if(this.editId == null){
                    this.adicionar(produto);
                }else{
                    console.log(produto);
                    this.atualizar(this.editId);
                }
           }
        this.listaTabela();
        this.cancelar();

        console.log(this.arrayProdutos);
    }

    
    listaTabela(){
        let tbody = document.getElementById("tbody");

                tbody.innerText = "";
        
        for(let i = 0; i < this.arrayProdutos.length; i++){

            let newTr = tbody.insertRow();

            let td_id = newTr.insertCell();
            let td_inquiry1 = newTr.insertCell();
            let td_inquiry2 = newTr.insertCell();
            let td_inquiry3 = newTr.insertCell();
            let td_acoes = newTr.insertCell();

            td_id.innerText = this.arrayProdutos[i].id;
            td_inquiry1.innerText = this.arrayProdutos[i].primeiroInq;
            td_inquiry2.innerText = this.arrayProdutos[i].segundoInq;
            td_inquiry3.innerText = this.arrayProdutos[i].terceiroInq;


            td_id.classList.add("center");
            td_acoes.classList.add("center");

            let imgEdit = document.createElement("img");
            imgEdit.src = "img/edit.png"

            imgEdit.setAttribute("onclick","produto.preparaEdicao("+JSON.stringify(this.arrayProdutos[i]) + ")");

            let imgDelete = document.createElement("img");
            imgDelete.src = "img/delete.png"

            imgDelete.setAttribute("onclick","produto.deletar("+this.arrayProdutos[i].id+")");
            
            td_acoes.appendChild(imgEdit);
            td_acoes.appendChild(imgDelete);

        }
    }

    
    adicionar(produto){
        this.arrayProdutos.push(produto);
        this.id++;

    }

    preparaEdicao(dados){

        this.editId = dados.id;
        document.getElementById("inquiry1").value = dados.primeiroInq;
        document.getElementById("inquiry2").value = dados.segundoInq;
        document.getElementById("inquiry3").value = dados.terceiroInq;

        document.getElementById("salvar").innerText = "Atualizar";
    }

    atualizar(id){

        for(let i=0; i < this.arrayProdutos.length; i++){
            if(id == this.arrayProdutos[i].id){
                this.arrayProdutos[i].primeiroInq = document.getElementById("inquiry1").value;
                this.arrayProdutos[i].segundoInq = document.getElementById("inquiry2").value;
                this.arrayProdutos[i].terceiroInq = document.getElementById("inquiry3").value;

            }
        }

        this.editId = null;
       
    }

    lerDados(){

        let produto = {};

        produto.id = this.id;
        produto.primeiroInq = document.getElementById("inquiry1").value;
        produto.segundoInq = document.getElementById("inquiry2").value;
        produto.terceiroInq = document.getElementById("inquiry3").value;

        return produto;
    }

    validaCampos(produto){

        let msg = "";

        if(produto.primeiroInq == ""){
            msg += "- informe a calculadora que utiliza \n";
        }
        if(produto.segundoInq == ""){
            msg += "- informe o que gostaria de aprender \n";
        }
        if(produto.terceiroInq == ""){
            msg += "- informe como quer aprender \n";
        }
        if(msg != ""){
            alert(msg);
            return false;
        }

        return true;

    }

    cancelar(){

        document.getElementById("inquiry1").value = "";
        document.getElementById("inquiry2").value = "";
        document.getElementById("inquiry3").value = "";


        document.getElementById("salvar").innerText = "Salvar";
        this.editId = null;

    }

    deletar(idProcurado){

        if(confirm("Deseja realmente deletar o produto ID: " + idProcurado)){
            let tbody = document.getElementById("tbody");

            for(let i=0; i < this.arrayProdutos.length; i++){
                if(this.arrayProdutos[i].id == idProcurado){
                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
                }
            }
        }
        console.log(this.arrayProdutos);

    }
}

var produto = new Produto();
