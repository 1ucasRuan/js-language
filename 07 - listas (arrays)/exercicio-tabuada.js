function calcularTabuada(numero){
    for (let i = 1; i <= 10; i++) {
        tabuada = numero * i;
        
        console.log(`${numero} * ${i} = ${tabuada}`);        
    }
}

calcularTabuada(5);