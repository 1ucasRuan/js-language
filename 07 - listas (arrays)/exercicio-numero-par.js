function encontrarPar(numeros){
    for (let i = 0; i < numeros.length; i++) {
        //const element = array[i];
        if((numeros[i] % 2) === 0){
            console.log(`${numeros[i]} é par`);
            //console.log(numeros[i]);
        }        
    }
}

const numeros = [];

numeros.push(5);
numeros.push(7);
numeros.push(8);
numeros.push(2);
numeros.push(5);
numeros.push(12);

encontrarPar(numeros);