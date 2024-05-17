let valoProduto = 100;
let metodoPagamento = 'Parcelado';
let parcela = 1;
let total = 0;

if(metodoPagamento === 'Debito'){
    total = valoProduto - (valoProduto * 0.10);
    console.log('Valor a pagar será de: ' + total.toFixed(2));
}
else if(metodoPagamento === 'Pix' || metodoPagamento === 'Dinheiro'){
    total = valoProduto - (valoProduto * 0.15);
    console.log('Valor a pagar será de: ' + total.toFixed(2));
}
else if(metodoPagamento === 'Parcelado' && parcela <= 2){
    total = valoProduto;
    console.log('Valor a pagar será de: ' + total.toFixed(2));
}
else if(metodoPagamento === 'Parcelado' && parcela > 2){
    total = (valoProduto * 0.10) + valoProduto;
    console.log('Valor a pagar será de: ' + total.toFixed(2));
}
