const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

console.log(notas.length);

let soma = 0;

for(let i = 0; i < notas.length; i++){
    soma = soma + notas[i];
    console.log(soma);
}

console.log(soma);
const media = soma / notas.length;
console.log(media);