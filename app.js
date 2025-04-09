/*let title = document.querySelector('h1');
title.innerHTML = 'Jogo fo número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha entre 1 e 10';*/

let numeroSecreto =  gerarNumeroAleatorio();
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
    return parseInt(Math.random() * 10 + 1); //vda retorno do math
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