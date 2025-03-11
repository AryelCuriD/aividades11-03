function menorNum(numeros){
    let menor = 999999999;

    numeros.forEach(function(i){
        if(i < menor){
            menor = i;
        }
    });
    console.log("O menor é: "+ menor);
}

let numeros = [1,2,3,-4,5,6,7,8,9]
menorNum(numeros)