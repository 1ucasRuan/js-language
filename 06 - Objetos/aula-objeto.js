
class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const lucas = new Pessoa();
lucas.nome = 'Lucas Ruan da Silva de Carvalho';
lucas.idade = 24;

console.log(lucas);
lucas.descrever();


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
