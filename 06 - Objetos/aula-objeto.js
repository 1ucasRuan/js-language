const pessoa = {
    nome : 'Lucas Ruan da Silva de Carvalho',
    idade : 24,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

//console.log(pessoa);

pessoa.descrever();

console.log(pessoa['nome'], pessoa['idade']);
