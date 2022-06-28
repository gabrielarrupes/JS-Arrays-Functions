// para cada elemento do array execute o que está dentro do bloco de código;
// forEach percorre a array sem necessidade de criar o for;

const notas = [10, 9, 7.5];

let somaDasNotas = 0;


notas.forEach( nota => { 
    somaDasNotas += nota
});

let media = somaDasNotas/notas.length

console.log(media);
