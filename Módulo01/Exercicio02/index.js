/* Exercício 02 - Média de duas notas
Leia duas notas reais, calcule a média aritmética e mostre o resultado com uma casa decimal. 

REGRA: Média = (nota 1 + nota 2) / 2. 
Exemplos: nota 1: 8,0 e nota 2: 6,0; nota 1: 5,5 e nota 2: 7,5; nota 1: 10,0 e nota 2: 9,0; nota 1: 0,0 e nota 2: 4,0. 

VERIFICAÇÃO FINAL: Confira um caso cujo média tenha mais de uma casa decimal e aplique a formatação de uma casa somente na saída. */

const nota1 = 8.0; 
const nota2 = 6.0;

const media = (nota1 + nota2) / 2;
console.log(`Média: ${media.toFixed(1)}`);

const nota3 = 5.5;
const nota4 = 7.5;

const media2 = (nota3 + nota4) / 2;
console.log(`Média: ${media2.toFixed(1)}`);

const nota5 = 10.0;
const nota6 = 9.0;  

const media3 = (nota5 + nota6) / 2;
console.log(`Média: ${media3.toFixed(1)}`);

const nota7 = 0.0;
const nota8 = 4.0;  

const media4 = (nota7 + nota8) / 2;
console.log(`Média: ${media4.toFixed(1)}`);

const nota9 = 7.3333;
const nota10 = 8.6667;  

const media5 = (nota9 + nota10) / 2;
console.log(`Média: ${media5.toFixed(1)}`);