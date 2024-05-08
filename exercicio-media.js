let nota1 = 7;
let nota2 = 7;
let nota3 = 6;

const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('Aluno Reprovado');
}else if(media > 5 && media < 7){
    console.log('Aluno de Recuperação');
}else{
    console.log('Aluno Aprovado');
}