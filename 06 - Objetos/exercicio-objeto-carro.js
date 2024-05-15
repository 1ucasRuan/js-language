class Carro {
    marca;
    cor;
    combustivelGastoKm;

    constructor(marca, cor, combustivelGastoKm){
        this.marca = marca;
        this.cor = cor;
        this.combustivelGastoKm = combustivelGastoKm;
    }

    calcularGastoPercurso(distanciaKm, preCombustivel){
        return (distanciaKm * this.combustivelGastoKm) * preCombustivel;        
    }
}



const veiculo = new Carro('FIAT', 'Vermelho', 1/12);
console.log(veiculo);

let preCombustivel = 5;
let distanciaKm = 70;

//veiculo.calcularGastoPercurso(70, 5);
let total = veiculo.calcularGastoPercurso(distanciaKm, preCombustivel);
console.log(total);

console.log(veiculo.calcularGastoPercurso(distanciaKm, preCombustivel));