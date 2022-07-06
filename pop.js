//removendo itens de um array com o método pop;
// retira sempre o ultimo elemento do array;
// não aceita parâmetros;

const notasAluno = [3, 5, 8, 10, 9];
let somaNotas = 0;
let media;

notasAluno.pop();

console.log(notasAluno);

for (let i = 0; i < notasAluno.length; i++) {

    somaNotas = somaNotas + notasAluno[i]

}

media = somaNotas / notasAluno.length

console.log(`A média é ${media}`);
