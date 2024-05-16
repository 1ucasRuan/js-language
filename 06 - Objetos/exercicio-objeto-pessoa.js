class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calcularImc(){
        
        let imc = this.peso / (this.altura * this.altura);
        return imc;
    }
}

const pessoa = new Pessoa('Lucas', 70, 1.75);

console.log(pessoa.calcularImc());

console.log(pessoa);
