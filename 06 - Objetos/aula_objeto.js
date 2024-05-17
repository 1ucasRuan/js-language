
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
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    }else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const joice = new Pessoa('Joice', 22);
const lucas = new Pessoa('Lucas', 24);

compararPessoas(joice,lucas);

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
