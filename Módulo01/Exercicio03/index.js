/* Exercício 03: Antecessor e sucessor
Leia um número inteiro e mostre o seu antecessor e o seu sucessor.

EXEMPLO: número 9, antecessor 8, número 9 e sucessor 10. 

TESTE: entrada 1, entrada 0, entrada -7. 

VERIFICAÇÃO FINAL: Para qualquer entrada, a diferença entre o sucessor e o antecessor deve ser exatamente 2, inclusive com números negativos. */

const numero = 9;
const antecessor = numero - 1;
const sucessor = numero + 1;

console.log(`Número: ${numero}`);
console.log(`Antecessor: ${antecessor}`);
console.log(`Sucessor: ${sucessor}`);

const numero2 = 1;
const antecessor2 = numero2 - 1;
const sucessor2 = numero2 + 1;

console.log(`Número: ${numero2}`);
console.log(`Antecessor: ${antecessor2}`);
console.log(`Sucessor: ${sucessor2}`);  

const numero3 = 0;
const antecessor3 = numero3 - 1;
const sucessor3 = numero3 + 1;  

console.log(`Número: ${numero3}`);
console.log(`Antecessor: ${antecessor3}`);
console.log(`Sucessor: ${sucessor3}`);

const numero4 = -7;
const antecessor4 = numero4 - 1;
const sucessor4 = numero4 + 1;

console.log(`Número: ${numero4}`);
console.log(`Antecessor: ${antecessor4}`);
console.log(`Sucessor: ${sucessor4}`);
