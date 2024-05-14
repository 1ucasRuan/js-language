
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log()
    }
}





//const lucas = new Pessoa('Lucas', 24);
//lucas.nome = 'Lucas Ruan da Silva de Carvalho';
//lucas.idade = 24;

//console.log(lucas);
//lucas.descrever();


/*const pessoa = {
    nome : 'Lucas Ruan da Silva de Carvalho',
    idade : 24,

    descrever: function (){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
};

//console.log(pessoa);

pessoa.descrever();

console.log(pessoa['nome'], pessoa['idade']);
*/
