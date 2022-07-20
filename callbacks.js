// função callback recebe uma função como argumento.
/*  pode ser escrita da forma abaixo (criando função normal para inserir como argumento) ou
ou escrevendo a função diretamente no parâmetro (arrow) */

const names = ["Farrah", "Finn", "Fiona"];

names.forEach(printingNames);

function printingNames(name) {

    console.log(name);
    
}