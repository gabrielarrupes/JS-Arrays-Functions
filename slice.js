// parâmetros do slice:
// 1º numero do índice onde iniciará o "corte".
// 2º numero do índice onde finalizará o "corte".

const listaAlunos = [ "Gabriela", " Ingrid", " Caroline", " Fernanda", " Sandra", " Eduarda", " Natielli", " Letícia", " Milena", " Vitória", " Veridiana", " Glauce"];

const turma1 = listaAlunos.slice(0, listaAlunos.length/2);
const turma2 = listaAlunos.slice(listaAlunos.length/2);

console.log(`Os alunos da primeira turma são: ${turma1}.`);
console.log(`Os alunos da segunda turma são: ${turma2}.`);

console.log(turma1.length);
console.log(turma2.length);