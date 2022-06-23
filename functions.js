// diferença principal: HOISTING;
// declaração de função e var são "listadas" para o topo;
// declaração de função pode ser chamada em qualquer parte do código;
// expressão de função será analisada em tempo de execução;


// declaração de função

function subtracao (numero1, numero2) {

    return numero1 - numero2
}

// expressão de função

const soma = function (numero1, numero2) { return numero1 + numero2};

console.log(soma(1,9));
