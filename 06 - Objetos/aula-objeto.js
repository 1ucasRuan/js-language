const pessoa = {
    nome : 'Lucas Ruan da Silva de Carvalho',
    idade : 24,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

console.log(pessoa);
pessoa.nome = 'Joice';
pessoa.idade = 22;

pessoa.descrever();
console.log(lucas.nome);
console.log(lucas.idade);
console.log(lucas);
lucas.altura = 1.69;
delete lucas.nome;
console.log(lucas);