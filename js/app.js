let amigosIncluidos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    if(amigosIncluidos.includes(amigo)){
        alert('Amigo já adicionado!');
        document.getElementById('nome-amigo').value = '';
        return;
    }
    if(amigo != ''){
        amigosIncluidos.push(amigo);
        alert(`${amigo} incluído no sorteio`);
        exibirNaTela('lista-amigos',amigosIncluidos);
        document.getElementById('nome-amigo').value = '';
    }
}

function sortear(){
    if(amigosIncluidos.length>=4){
        let amigoSorteado = Math.round(Math.random()*(amigosIncluidos.length-1));
        exibirNaTela('lista-sorteio',amigosIncluidos[amigoSorteado]);
    }else{
        alert('No mínimo 4 participantes!');
        return;
    }
}

function reiniciar(){
    exibirNaTela('lista-amigos','');
    exibirNaTela('lista-sorteio','');
    amigosIncluidos = [];
}

function exibirNaTela(id,texto){
    let campoAmigosIncluidos = document.getElementById(id);
    campoAmigosIncluidos.textContent = texto
}