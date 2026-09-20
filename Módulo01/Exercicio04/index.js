/* Exercício 04: Dobro, triplo e metade
Leia um número real e mostre o dobro, o triplo e a metade dessse valor.
Exemplos: 12, 8, 2,5 e -4.

VERIFICAÇÃO FINAL: Use um valor decimal e confirme que dobro, triplo e metade foram calculados sempre a partir da entrada original. 
*/

const numero1 = 12;

const dobroNumero1 = numero1 * 2;
const triploNumero1 = numero1 * 3;
const metadeNumero1 = numero1 / 2;

console.log(`Número: ${numero1}`);
console.log(`Dobro: ${dobroNumero1}`);
console.log(`Triplo: ${triploNumero1}`);
console.log(`Metade: ${metadeNumero1}`);

const numero2 = 8;

const dobroNumero2 = numero2 * 2;
const triploNumero2 = numero2 * 3;
const metadeNumero2 = numero2 / 2;

console.log(`\nNúmero: ${numero2}`);
console.log(`Dobro: ${dobroNumero2}`);
console.log(`Triplo: ${triploNumero2}`);
console.log(`Metade: ${metadeNumero2}`);

const numero3 = 2.5;
const dobroNumero3 = numero3 * 2;
const triploNumero3 = numero3 * 3;
const metadeNumero3 = numero3 / 2;

console.log(`\nNúmero: ${numero3}`);
console.log(`Dobro: ${dobroNumero3}`);
console.log(`Triplo: ${triploNumero3}`);
console.log(`Metade: ${metadeNumero3}`);

const numero4 = -4;
const dobroNumero4 = numero4 * 2;
const triploNumero4 = numero4 * 3;
const metadeNumero4 = numero4 / 2;

console.log(`\nNúmero: ${numero4}`);
console.log(`Dobro: ${dobroNumero4}`);
console.log(`Triplo: ${triploNumero4}`);
console.log(`Metade: ${metadeNumero4}`);

const numero5 = 3.7;
const dobroNumero5 = numero5 * 2;
const triploNumero5 = numero5 * 3;
const metadeNumero5 = numero5 / 2;

console.log(`\nNúmero: ${numero5}`);
console.log(`Dobro: ${dobroNumero5.toFixed(1)}`);
console.log(`Triplo: ${triploNumero5.toFixed(1)}`);
console.log(`Metade: ${metadeNumero5.toFixed(1)}`);

// OUTRO EXEMPLO 

function calcularOperacoes(numero) {
  const dobro = numero * 2;
  const triplo = numero * 3;
  const metade = numero / 2;

  console.log(`\nNúmero: ${numero}`);
  console.log(`Dobro: ${Number.isInteger(dobro) ? dobro : dobro.toFixed(2)}`);
  console.log(`Triplo: ${Number.isInteger(triplo) ? triplo : triplo.toFixed(2)}`);
  console.log(`Metade: ${Number.isInteger(metade) ? metade : metade.toFixed(2)}`);
}

const exemplos = [12, 8, 2.5, -4, 3.7];
exemplos.forEach(calcularOperacoes);