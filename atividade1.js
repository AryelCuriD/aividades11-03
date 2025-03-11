function mediaNotas(notas){

    let soma = 0;

    notas.forEach(function(i){
        soma += i;
    });

    let media = soma / notas.length;

    if(media >= 7){
        console.log("Aluno aprovado.");
    }else console.log("Aluno reprovado");

    return media.toFixed(2);
    
    
}

var notas = [0, 0, 10, 10];
console.log(mediaNotas(notas));