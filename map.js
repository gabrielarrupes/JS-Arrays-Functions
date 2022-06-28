//acrescentando um ponto extra nas notas abaixo de 10;
// diferente do forEach a função map retorna o resultado em um novo array;

const notas = [9, 10, 8, 7, 4];
                                        // operador ternário
const notasAtualizadas = notas.map( nota => nota  === 10 ? nota : ++nota );

console.log(notasAtualizadas);