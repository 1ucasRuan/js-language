//const funcoes = require('./funcoes-auxiliares');

const {gets, print} = require('./funcoes-auxiliares');

const qtdValores = gets();
let maiorValor = 0;

for (let i = 0; i < qtdValores; i++) {
    //print(gets());
    const numeroSorteado = gets();   
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);