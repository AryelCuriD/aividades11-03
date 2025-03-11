let compra = [];

function adicionarValor(valor) {
    compra.push(valor);
}

function removerValor(valor) {
    return compra = compra.filter(item => item !== valor);
}

function calcularTotal() {
    return compra.reduce((total, preco) => total + preco, 0);
}

adicionarValor(10.50);
adicionarValor(5.20);
adicionarValor(3.75);

console.log(compra);

removerValor(5.20);

console.log(compra);

console.log("Total da compra:", calcularTotal());


