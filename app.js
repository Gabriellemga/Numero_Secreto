let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeAleatorio();
let tentativas = 1;

function inserirTexto(tag, titulo){
    let texto = document.querySelector(tag);
    texto.innerHTML = (titulo);
    responsiveVoice.speak(titulo,'Brazilian Portuguese Male',{rate:1.2});
}

function exibirMensagemInicial(){

    inserirTexto ('h1', ' Descubra o número secreto');
    inserirTexto ('h1', '  número secreto');
    inserirTexto ('p', 'Escolha um numero entre 1 e 100');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    if(chute == numeroSecreto){
        inserirTexto('h1','Você acertou o numero secreto.');
        inserirTexto('p',`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            inserirTexto('p','O numero secreto é menor');}
            else{inserirTexto('p','O numero secreto é maior')}
            
    }
   tentativas++;
   limparCampo();

}

function gerarNumeAleatorio(){
        let numeroEscolhido = parseInt(Math.random() *numeroLimite + 10);
        let quantidadeElementosLista = listaDeNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
   chute = document.querySelector('input');
    chute.value = '';
}

   
function reiniciarJogo(){
    let numeroSecreto = gerarNumeAleatorio ();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}
