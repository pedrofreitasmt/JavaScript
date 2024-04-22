alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 10;
console.log(numeroSecreto)
let opcao = prompt('Escolha um número entre 1 e 30');

// se a opção for igual ao número secreto
if (numeroSecreto == opcao) {
    alert(`Você descobriu o número secreto! (${numeroSecreto})`);
} else {
    alert('Você errou!');
}

