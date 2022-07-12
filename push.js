// adicionando itens em um array com o método push;
// push colocará o elemento adicionado em último no array;

const notasAluno = [3, 5, 8, 10];
let somaNotas = 0;
let media;

notasAluno.push(9);

console.log (notasAluno);

for (let i = 0; i < notasAluno.length; i++) {

    somaNotas = somaNotas + notasAluno[i]

}

media = somaNotas / notasAluno.length

console.log(media);



