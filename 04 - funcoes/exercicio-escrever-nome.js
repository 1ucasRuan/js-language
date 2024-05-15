function escreverNome(nome){
    console.log('Meu nome é: ' + nome);
    verificarIdade(idade);
}

function verificarIdade(idade){
    if (idade >= 18) {
        console.log('Maior de idade');
    } else {
        console.log('Menor de idade');
    }
}

let idade = 25;
escreverNome('Lucas Ruan da Silva de Carvalho');