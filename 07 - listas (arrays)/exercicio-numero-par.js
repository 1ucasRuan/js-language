function encontrarPar(numeros){
    for (let i = 0; i < numeros.length; i++) {
        //const element = array[i];
        if((numeros[i] % 2) === 0){
            console.log(`${numeros[i]} é par`);
            //console.log(numeros[i]);
        }        
    }
}

const numeros = [1, 2, 3 , 4, 5, 6, 7, 8, 9, 10];

numeros.push(11);
numeros.push(12);
numeros.push(13);
numeros.push(14);
numeros.push(15);
numeros.push(16);

encontrarPar(numeros);