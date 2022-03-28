        var x = 0

        function insert(num) {
            var numero = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = numero + num;
            x = numero + num
        }

        function clean() {
            document.getElementById('display').innerHTML = "";
            x = 0
        }

        function back() {
            var resultado = document.getElementById('display').innerHTML;
            document.getElementById('display').innerHTML = resultado.substring(0, resultado.length - 1);
            x = resultado.substring(0, resultado.length - 1)
        }

        function calcular() {
            var resultado = document.getElementById('display').innerHTML;
            if (resultado) {
                document.getElementById('display').innerHTML = eval(resultado);
            } else {
                document.getElementById('display').innerHTML = "Nada..."
            }
        }

        function pow2() {
            document.getElementById('display').innerHTML = Math.pow(eval(x), 2);
            x = Math.pow(eval(x), 2)
        }

        function pow3() {
            document.getElementById('display').innerHTML = Math.pow(eval(x), 3);
            x = Math.pow(eval(x), 3)
        }

        function sqrt1() {
            document.getElementById('display').innerHTML = Math.sqrt(eval(x));
            x = Math.sqrt(eval(x))
        }

        function cent() {
            document.getElementById('display').innerHTML = Math.sqrt(eval(x));

        }

        //Acessibilidade

        var elementH1 = document.querySelector('h1');
        var elementH4 = document.querySelector('h4');
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
        elementBtnIncreaseFont.addEventListener('click', function (event) {
            fontSize = fontSize + increaseDecrease;
            elementH1.style.fontSize = fontSize + '%';
            elementH4.style.fontSize = fontSize + '%';
            calculadora.style.fontSize = fontSize + '%'
            contato.style.fontSize = fontSize + '%'
            cursos.style.fontSize = fontSize + '%'
        });

        // Evento de click para diminuir a fonte
        elementBtnDecreaseFont.addEventListener('click', function (event) {
            fontSize = fontSize - increaseDecrease;
            elementH1.style.fontSize = fontSize + '%';
            elementH4.style.fontSize = fontSize + '%';
            calculadora.style.fontSize = fontSize + '%'
            contato.style.fontSize = fontSize + '%'
            cursos.style.fontSize = fontSize + '%'
        });

        function ligarDesligar() {
            if (document.getElementById("displayCalculadora-container").classList.contains("color-off")) {
                document.getElementById("displayCalculadora-container").classList.remove("color-off")
                document.getElementById("displayCalculadora-container").classList.add("color-on")
            } else {
                document.getElementById("displayCalculadora-container").classList.remove("color-on")
                document.getElementById("displayCalculadora-container").classList.add("color-off")
            }
        }

        function ativarCientifica() {
            if (document.getElementById("calCientifica").classList.contains("calc-desabilitada")) {
                document.getElementById("calCientifica").classList.add("calc-selecionada")
                document.getElementById("calCientifica").classList.remove("calc-desabilitada")
                document.getElementById("calComum").classList.add("calc-desabilitada")
                document.getElementById("calComum").classList.remove("calc-selecionada")
                document.getElementById("x3").style.display = "flex"
                document.getElementById("x2").style.display = "flex"
                document.getElementById("vx").style.display = "flex"
            } else {
                document.getElementById("calCientifica").classList.add("calc-desabilitada")
                document.getElementById("calCientifica").classList.remove("calc-selecionada")
                document.getElementById("calComum").classList.add("calc-selecionada")
                document.getElementById("calComum").classList.remove("calc-desabilitada")
                document.getElementById("x3").style.display = "none"
                document.getElementById("x2").style.display = "none"
                document.getElementById("vx").style.display = "none"
            }

        }