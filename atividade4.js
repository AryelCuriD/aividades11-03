function extrairVogais(frase ){
    let array = [];

    frase = frase.toLowerCase();

    for(let i = 0; i< frase.length; i++){
        if(frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u' ||
           frase[i] == 'A' || frase[i] == 'E' || frase[i] == 'I' || frase[i] == 'O' || frase[i] == 'U'){

            array.push(frase[i]);
        }
    }
    return array;
}

let frase = "Ola mundo";
console.log("Vogais presentes:", extrairVogais(frase))