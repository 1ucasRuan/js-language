const {gets, print} = require('./funcoes-auxiliares');

if(gets() >= 7){
    print('Aprovado');
}else if(gets() >= 5 && gets() < 7){
    print('Recuperação')
}else{
    print('Reprovado')
}