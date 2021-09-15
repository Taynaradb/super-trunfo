const naruto = {
    nome:"Naruto",
    imagem:"img/naruto.png",
    atributos:{
        ataque: 7,
        defesas: 6,
        magia: 2
    }
};

const batman ={
    nome:"Batman",
    imagem:"img/batman.jpg",
    atributos:{
        ataque: 6,
        defesas: 8,
        magia: 0
    }
};

const caitlyn ={
    nome: "Caitlyn",
    imagem: "img/caitlyn.jpg",
    atributos:{
        ataque: 7,
        defesa: 5,
        magia: 1
    }
};

const harry = {
    nome: "Harry Potter",
    imagem: "img/harry.jpg",
    atributos:{
        ataque: 7,
        defesa: 5,
        magia: 10
    }
};

const capita = {
    nome: "Capitã Marvel",
    imagem: "img/capita.jpg",
    atributos:{
        ataque: 9,
        defesa: 8,
        magia: 8
    }
};

const darthvader = {
    nome: "Darth Vader",
    imagem: "img/darthvader.jpg",
    atributos:{
        ataque: 7,
        defesa: 6,
        magia: 6
    }
};

const cartas = [naruto , batman, caitlyn, harry, capita, darthvader]; 
let cartaJogador, cartaMaquina;

function SortearCarta(){
    const numeroDeCartas = 6;
    let numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    let numeroCartaMaquina = parseInt(Math.random()*numeroDeCartas);
    while(numeroCartaJogador == numeroCartaMaquina){
        numeroCartaJogador = parseInt(Math.random()*numeroDeCartas);
    }
    cartaJogador = cartas[numeroCartaJogador];
    cartaMaquina = cartas[numeroCartaMaquina];
}

function ExibirCartaJogador(){
    console.log(cartaJogador);
    let divCartaJogador = document.querySelector("#carta-jogador");
    // divCartaJogador.style.backgroundImage = 'url(' + cartaJogador.imagem + ')';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    document.querySelector(".nome-personagem-jogador").innerText = cartaJogador.nome;
    let listaDeAtributosDaCarta = document.querySelector(".atributos-jogador");
    listaDeAtributosDaCarta.innerHTML = PegarAtributos(cartaJogador.atributos);
}

function ExibirCartaMaquina(){
    let divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    document.querySelector(".nome-personagem-maquina").innerText = cartaMaquina.nome;
    let listaDeAtributosDaCarta = document.querySelector(".atributos-maquina");
    listaDeAtributosDaCarta.innerHTML = PegarAtibutosMaquina(cartaMaquina.atributos);
}

function PegarAtibutosMaquina(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio = "";
    for(let atributo in atributosDaCarta){
        botaoRadio = `<input type="radio" name="atributo" value="${atributo}">`;
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]}</li>`;
    }

    return listaDeAtributos;
}

function PegarAtributos(atributosDaCarta){
    let listaDeAtributos = "", botaoRadio = "";
    for(let atributo in atributosDaCarta){
        botaoRadio = `<input type="radio" name="atributo" value="${atributo}">`; 
        listaDeAtributos += `<li>${atributo} : ${atributosDaCarta[atributo]} ${botaoRadio}</li>`;
    }

    return listaDeAtributos;
}

const btnSortear = document.querySelector("#btnSortear");
btnSortear.onclick = () =>{
    SortearCarta();
    ExibirCartaJogador();

    document.querySelector("#btnJogar").disabled = false;
};

const btnJogar = document.querySelector("#btnJogar");
btnJogar.onclick = () =>{
    ExibirCartaMaquina();
    let atributoEscolhido = document.querySelector("input[name='atributo']:checked").value;
    let atributoJogador = cartaJogador.atributos[atributoEscolhido];
    let atributoMaquina = cartaMaquina.atributos[atributoEscolhido];

    if(atributoJogador == atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<h1>EMPATE</h1>";
    }else if(atributoJogador > atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<h1>JOGADOR VENCEU!</h1>";
    }else if(atributoJogador < atributoMaquina){
        document.querySelector("#resultado").innerHTML = "<h1>MÁQUINA VENCEU!</h1>";
    }
};