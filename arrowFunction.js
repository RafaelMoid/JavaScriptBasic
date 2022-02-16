function apresentar(nome) {
    //Abaixo podemos ver uma template string
    //usando os simbolos `` para criar uma string
    //com capacidade de chamar parametros de forma
    //simples
    return `meu nome é ${nome}`;
}

//Criando uma arrow function \/\/\/\/
//Ordem palavra reservada cost + nome da function
// + simbolo de igualdade + arrow + a unica linha
//de código da arrowFunction
const apresentarArrow = nome => `meu nome é ${nome}`;

//Em casos de multiplos parametros o () é necessario
const soma = (num1 , num2) => num1+ num2;

//Arrow function com + de uma linha de codigo
const calculate = (num1, num2, num3) => {
    let calculo = ((num1+num2)*num3);
    if (calculo <= 5) {
        console.log(`O resultado de calculo é ${calculo},logo é menor ou igual a 5.`);  
    } else {
        console.log(`O resultado de calculo é ${calculo},logo é maior do que 5.`);
    }
}

calculate(10,20,10);
//para que servem as arrow functions?
// serve para diminuir a quantidade de linhas de código
// porém não possui nome para ser chamada novamente

