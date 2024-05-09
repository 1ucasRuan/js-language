function calcularImc(peso, altura, imc) {
    let imcCalculado = peso / (altura * altura);
    console.log(classificarImc(imcCalculado));

    return imcCalculado;
    
    
}
function classificarImc(imc) {
    
    if (imc < 18.5) {
        return 'Abaixo do peso';

    }
    else if (imc > 18.5 && imc < 25) {
        return 'Peso normal';

    }
    else if (imc > 25 && imc < 30) {
        return 'Acima do peso';

    }
    else if (imc > 30 && imc < 40) {
        return 'Obeso';

    } else {
        return 'Obesidade grave';

    }
}

function main() {
    let peso = 60;
    let altura = 1.65;   
    let imc = calcularImc(peso, altura);
    console.log(imc);  

}
main();