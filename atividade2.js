function parOuImpar(numeros){
    let pares = 0;
    let impares = 0;

    numeros.forEach(function(numeros){
        if(numeros%2 == 0){
            pares ++;
        }else impares ++;
    });

    console.log("Quantidade de pares: "+pares);
    console.log("Quantidade de impares: "+impares);

    
}

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
parOuImpar(numeros)