// não pode ser nomeada;
// parênteses nos parâmetros somente nos casos em que dois ou mais parâmetros forem declarados;
// () => (quando não são declarados parâmetros na função);
// só colocar chaves e return se houver mais de uma linha de instrução;


const nomeArrowFunction = nome => `Meu nome é ${nome}`;

const divisao = (numero1, numero2) => numero1 / numero2;

const boasVindas = () => `Olá, seja bem vindo!`

const somaNumerosPequenos = (numero1, numero2) => { 

    if (numero1 || numero2 > 10) { 
        return `somente números de 1 à 9`
    } else { 
        return numero1 + numero2
    }
}



