// acumulador = guarda os valores cada vez que a função é executada e no fim retorna o valor "acumulado";
// valorAtual = indice do elemento atual da array;
// valorInicial = valor inicial do acumulador (se não informado, o primeiro elemento do array será o valor inicial do acumulador);


const salaJava = [4, 5, 6.5, 8];
const salaJS = [2, 8, 9, 5.5];
const salaPHP = [ 10, 5, 7, 9];


function somaMediaSala (notasDaSala) { 

    let valorInicial = 0;
    let somaDasNotas = notasDaSala.reduce((acumulador, valorAtual) => valorAtual + acumulador, valorInicial)
    return somaDasNotas / notasDaSala.length 
}

console.log(`A média da Sala de Java é: ${somaMediaSala(salaJava)}`);
console.log(`A média da Sala de JavaScript é: ${somaMediaSala(salaJS)}`);
console.log(`A média da Sala de PHP é: ${somaMediaSala(salaPHP)}`);