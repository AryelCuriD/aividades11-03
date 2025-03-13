let compra = [];

function adicionarValor(valor, compra) {
    compra.push(valor);
}

function removerValor(valor, compra) {
    return compra.filter(item => item !== valor);
}

function calcularTotal(compra) {
    return compra.reduce((total, preco) => total + preco, 0);
}

adicionarValor(10.50, compra);
adicionarValor(5.20, compra);
adicionarValor(3.75, compra);
adicionarValor(4.75, compra);

console.log(compra);

compra = removerValor(5.20, compra);

console.log(compra);

console.log("Total da compra:", calcularTotal(compra));
