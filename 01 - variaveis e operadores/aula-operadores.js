let precoEtanol = 5.79;
let precoGasolina = 6.66;
let combustivelKm = 10;
let distanciaKm = 100;
let tipoCombustivel = 'Gasolina';

if (tipoCombustivel === 'Etanol') {
    let valorGasto = (distanciaKm / combustivelKm) * precoEtanol ;
    console.log('O valor gasto foi ' + valorGasto.toFixed(2));
} 
else if (tipoCombustivel === 'Gasolina') {
    let valorGasto = (distanciaKm / combustivelKm) * precoGasolina ;
    console.log('O valor gasto foi ' + valorGasto.toFixed(2));
}




