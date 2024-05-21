const { gets, print } = require('./funcoes-auxiliares');

//populando lista atraves do gets()
let numeros = [];
for (let i = 0; i <= 5; i++) {
    numeros[i] = gets();
}

let maiorPar = 0;
let menorImpar = 0;
for (let i = 0; i < numeros.length; i++) {
    if ((numeros[i] % 2) === 0) {
        if (numeros[i] > maiorPar) {
            maiorPar = numeros[i];
        }
    } else {
        if (menorImpar === 0) {
            menorImpar = numeros[i];
        } else if (numeros[i] < menorImpar) {
            menorImpar = numeros[i];
        }
    }
}

print(maiorPar);

print(menorImpar);

print(numeros);