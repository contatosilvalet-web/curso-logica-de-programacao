# Crie uma lista de compras

## Etapa 1
Neste workshop, você continuará aprendendo sobre matrizes (arrays) criando uma lista de compras de supermercado.

Comece adicionando um `setTimeout` ou `console.log` que registre a string `"Grocery shopping list"` no console.

---

## Etapa 2
Para esta lista de compras, você usará um array para representar os itens que precisa comprar.

Nas lições anteriores, você aprendeu como criar matrizes como esta:

```javascript
const fruits = ['apple', 'banana', 'orange'];
```

Nesta etapa, crie uma variável chamada `shoppingList` e atribua a ela um array vazio.

---

## Etapa 3
Nesta próxima parte da oficina, você praticará a adição de itens alimentares à lista de compras.

Comece usando `console.log` para registrar a mensagem `"It will be nice to have some fruit to eat."`.

---

## Etapa 4
Nas lições anteriores, você aprendeu como adicionar itens ao final de uma matriz usando o método `push` como este:

```javascript
fruits.push('pear');
```

Utilizando esse método `push`, adicione a string `"Apples"` ao array `shoppingList`.

---

## Etapa 5
Para visualizar a lista de compras atualizada, você precisará registrar a lista de compras atual e uma breve mensagem no console.

Como essa mensagem será usada repetidamente ao longo do workshop, é melhor criar uma função reutilizável.

Crie uma função `getShoppingListMsg` que receba um array como parâmetro e retorne a string `"Current Shopping List: "` seguida do conteúdo do array fornecido.

*Dica: Você pode usar literais de modelo (template literals) ou concatenação de strings com o operador `+` para combinar a string com o array passado para a função.*

---

## Etapa 6
Agora é hora de ver a mensagem registrada no console.

Adicione um `console.log` e chame a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro dele para ver a mensagem registrada no console.

---

## Etapa 7
Agora é hora de adicionar mais uma fruta à lista.

Utilizando o mesmo método de array de antes, adicione a string `"Grapes"` ao final do array `shoppingList`.

Em seguida, adicione um `console.log` chamando a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro dele para ver a lista atualizada registrada no console.

---

## Etapa 8
Agora é hora de começar a adicionar itens ao topo da lista de compras.

Comece adicionando um registro `console.log` que mostre a mensagem `"It looks like we need to get some cooking oil."` no console.

---

## Etapa 9
Nas lições anteriores, você aprendeu como adicionar elementos ao início de uma matriz usando o método `unshift()`.

Segue um lembrete de como usar o método `unshift()`:

```javascript
array.unshift(item1, item2, ..., itemX);
```

Utilize o método `unshift()` para adicionar a string `"Vegetable Oil"` ao início do array `shoppingList`.

---

## Etapa 10
Em seguida, adicione um `console.log` chamando a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro dele para ver a lista atualizada registrada no console.

---

## Etapa 11
Em etapas anteriores, você revisou como adicionar um item ao final da matriz usando o método `push`.

Mas o método `push` aceita múltiplos argumentos, então você pode adicionar vários itens ao final da matriz assim:

```javascript
array.push(item1, item2, item3);
```

Nesta etapa, utilize o método `push` para adicionar as strings `"Popcorn"`, `"Beef Jerky"`, `"Potato Chips"` ao array `shoppingList`.

*A ordem é importante, portanto, certifique-se de adicionar os itens na ordem em que estão listados.*

---

## Etapa 12
Agora é hora de registrar o array `shoppingList` atualizado no console.

Adicione outro `console.log` chamando a função `getShoppingListMsg` com o array `shoppingList` como argumento para ver a lista atualizada registrada no console.

---

## Etapa 13
Nesta próxima parte do workshop, você revisará como remover itens do final da matriz.

Comece adicionando um `console.log` que registre a mensagem `"This looks like too much junk food."`.

---

## Etapa 14
Nas lições anteriores, você aprendeu como remover itens do final de um array usando o método `pop`.

Segue um lembrete de como usar o método `pop`:

```javascript
let array = [1, 2, 3, 4, 5];
array.pop();

console.log(array); 
```

Utilize o método `pop` para remover o último item da matriz `shoppingList`.

---

## Etapa 15
Agora é hora de registrar o array `shoppingList` atualizado no console.

Adicione um `console.log` chamando a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro dele para ver a lista atualizada registrada no console.

---

## Etapa 16
Agora é hora de adicionar mais itens ao início da lista de compras.

Comece adicionando uma instrução `console.log` que registre a mensagem `"It might be nice to get a dessert."`.

Abaixo dessa declaração de console, use o método de array correto para adicionar a string `"Chocolate Cake"` ao início do array `shoppingList`.

Por fim, adicione um `console.log` chamando a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro dele para ver a lista atualizada registrada no console.

---

## Etapa 17
Nesta última parte do workshop, você revisará como remover um item do início de uma matriz.

Comece adicionando um `console.log` que registre a mensagem `"On second thought, maybe we should be more health conscious."`.

---

## Etapa 18
Nas lições anteriores, você aprendeu como remover um item do início da matriz usando o método `shift`.

Segue um lembrete de como usar o método `shift`:

```javascript
const array = [1, 2, 3, 4, 5];
array.shift();

console.log(array); 
```

Utilize o método `shift` para remover o primeiro item da matriz `shoppingList`.

---

## Etapa 19
A última alteração a fazer na lista de compras é atualizar o primeiro item da lista.

Nas lições anteriores, você aprendeu como atualizar um item usando a notação de colchetes e o índice do item que deseja atualizar.

Aqui está um lembrete de como atualizar um item em uma matriz:

```javascript
const array = [1, 2, 3, 4, 5];

array[0] = 10;
console.log(array); 
```

Atualize o primeiro item da matriz `shoppingList` para ser `"Canola Oil"`.

---

## Etapa 20
Nesta etapa final do workshop, registre a lista de compras final no console.

Para fazer isso, chame a função `getShoppingListMsg` com o array `shoppingList` como argumento dentro de `console.log`.

E com este último passo, sua lista de compras está completa!