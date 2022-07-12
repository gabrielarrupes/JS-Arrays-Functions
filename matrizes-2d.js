// matrizes ou lista de duas dimensões;


// 1º indice = se refere a array dentro da array listaAlunosENotas;
// 2º indice = se refere aos elemento da array referida no 1º indice;

const alunos = ["Dafne", "Douglas", "Dante"];
const medias = [ 10, 9, 8];

let listaAlunosENotas = [alunos, medias];

console.log(`${listaAlunosENotas[0][0]}, sua média é: ${listaAlunosENotas[1][0]}`)