// filtrando elementos em um array com o método filter;
// sempre retornará um booleano;

const nomes = ["Hugo", "Horácio", "Helga"];
const notas = [ 9, 4, 10];

const reprovados = nomes.filter((aluno, i) => notas[i] < 5); 

console.log(`Lista de reprovados: ${reprovados}.`);