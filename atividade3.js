function soma(numeros){
    let soma = 0;

    numeros.forEach(function(i){
        soma += i;
    });
    return soma;
}
var numeros = [1, 2, 3, 4, 5]
console.log(soma(numeros))
