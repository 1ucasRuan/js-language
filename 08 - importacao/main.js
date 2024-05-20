//const funcoes = require('./funcoes-auxiliares');

//console.log(funcoes);

//console.log(funcoes.gets());

const {gets, print} = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    print(gets());
    const numeroSorteado = gets();   
    numerosSorteados.push(numeroSorteado); 
}

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado
    }
}

print(maiorValor);