const { gets, print } = require("./funcoes-auxiliares");

const valorSalarioBruto = gets() + gets();

let desconto = 0;
if (valorSalarioBruto <= 1100) {
    desconto = valorSalarioBruto * 0.05;
}else if(valorSalarioBruto > 1100 && valorSalarioBruto <= 2500){
    desconto = valorSalarioBruto * 0.10; 
} else if(valorSalarioBruto > 2500){
    desconto = valorSalarioBruto * 0.15;
}

const valorSalarioLiquido = valorSalarioBruto - desconto;

print(valorSalarioBruto);
print(desconto);
print(valorSalarioLiquido);