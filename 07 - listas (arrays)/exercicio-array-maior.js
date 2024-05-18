function encontrarMaior(numeros){

    let maior = 0;
    for (let i = 0; i < numeros.length; i++) {
        
        if(maior < numeros[i]){
            maior = numeros[i];      
        }        
    }
    return maior;
}

const numeros = [24, 2, 11 , 4, 5, 25, 7, 8, 9, 10];//array com os elementos

console.log(encontrarMaior(numeros));
