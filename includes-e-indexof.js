// includes = verifica se o "valor" informado no parâmetro consta dentro da referida lista;
// includes retorna um booleano;
// indexOf = informa o número do indice deste valor dentro da array;

const alunos = ["Elena", "Emília", "Emanuel"];

const medias = [7, 6, 10];

let listaAlunosENotas = [alunos, medias];

const mostraNomeENota = (nomeDoAluno) => {

    if (listaAlunosENotas[0].includes(nomeDoAluno)) {
       let i = listaAlunosENotas[0].indexOf(nomeDoAluno);

        return (`${listaAlunosENotas[0][i]}, sua média é: ${listaAlunosENotas[1][i]}`);

    } else { 

        return "Aluno não cadastrado!"
    }
}

console.log(mostraNomeENota("Elena"));