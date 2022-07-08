// altera a array original;

// parâmetros:
// 1º número do indice onde irá começar a remoção;
// 2º quantidade de elementos que serão removidos;
// 3º inserir novo elemento;


const listadeChamada = [ "Gabriela", " Ingrid", " Caroline", " Fernanda", " Sandra", " Eduarda", " Natielli", " Letícia", " Milena", " Vitória", " Veridiana", " Glauce"];

//removendo e acrescentando novo elemento no lugar;
listadeChamada.splice(8, 1, " Camila");

//acrescentando novo elemento sem remover outro;
listadeChamada.splice(1, 0, " Milena")

console.log(`Lista de chamada: ${listadeChamada}`);