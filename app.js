let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function menssagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'escolha um número de 1 a 10');
}

menssagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute < numeroSecreto){
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('p', 'O número secreto é maior');
    } else if (chute > numeroSecreto){
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('p', 'O número secreto é menor');
    } else  {
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let menssagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', menssagemTentativas);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } 
    tentativas++;
    limparCampo();

}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarOJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    menssagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true)
}