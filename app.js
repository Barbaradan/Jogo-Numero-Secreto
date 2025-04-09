let listaNumerosSorteados = []; //array
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){ //function com parametros
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMsgInicial(){
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', 'Escolha entre 1 e 100');
}

exibirMsgInicial();

// função onclick 
function verificarChute(){ //function sem parametro
    let chute = document.querySelector('input').value; //value pega o valor que foi coloca no input

    if (chute == numeroSecreto){ //== compara se o chute é igual ao numero secreto
        exibirTexto('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTexto('p', msgTentativas);

        /*btn 2 do html */
        document.getElementById('reiniciar').removeAttribute('disabled'); //remove o atricuto disabled do btn 2
    } else {
        if(chute > numeroSecreto){
            exibirTexto('p', 'O número secreto é menor');
        } else {
            exibirTexto('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 3 + 1); //da retorno do math
    let qtdElementosNaLista = listaNumerosSorteados.length;

    if(qtdElementosNaLista == numeroLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){ //includes ve se esta incluido, nesse caso ve se esta incluido o numero escolhido na lista de numeros sorteados
        return gerarNumeroAleatorio(); 
    } else {
        listaNumerosSorteados.push(numeroEscolhido); //push coloca, nesse caso coloca o numero escolhido na lista
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio(); //gerar o numero 
    limparCampo(); //limpar o compo
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //o true indica que quero que o atributo disabled seja habilitado
}