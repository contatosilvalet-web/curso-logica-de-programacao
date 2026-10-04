# Workshop: Rastreador de Vida Selvagem

Neste workshop, você construirá um rastreador de vida selvagem simples usando objetos JavaScript.

---

## Etapa 1
Neste workshop, você construirá um rastreador de vida selvagem simples usando objetos JavaScript.
Eis um exemplo de um objeto:

```javascript
const animal = {}; // empty object
```

Isso cria um objeto vazio.
Agora crie uma variável chamada `tiger` e atribua a ela um objeto vazio.

---

## Etapa 2
Para este rastreador de vida selvagem, você atualizará um objeto com novas propriedades.
Aqui está um exemplo de como criar um objeto com uma propriedade:

```javascript
const animal = {
  name: "Lion" // property: value
};
```

Agora atualize o objeto `tiger` para que ele inclua uma propriedade chamada `species`.
Defina seu valor como `"Tiger"`.

---

## Etapa 3
Agora atualize seu objeto `tiger` adicionando uma nova propriedade chamada `age`.
Defina a propriedade `age` com o valor `5`.

---

## Etapa 4
Agora adicione outra propriedade ao objeto `tiger` chamada `isEndangered`.
Defina a propriedade `isEndangered` como `true`.

---

## Etapa 5
Agora crie um segundo objeto chamado `elephant`.
Adicione as seguintes propriedades:
* `species` com o valor `"Elephant"`
* `age` com o valor `10`
* `isEndangered` com o valor `true`

---

## Etapa 6
Nesta etapa, você criará uma função para acessar a propriedade `species` de um objeto.
Aqui está um pequeno exemplo de como acessar uma propriedade de um objeto:

```javascript
const dog = {
  species: "Dog"
};

const getAnimalSpecies = (pet) => {
  return pet.species; // access species using dot notation
};

console.log(getAnimalSpecies(dog)); // Dog
```

Neste exemplo, a função recebe um objeto como parâmetro e retorna sua propriedade `species`.
Agora crie uma função chamada `getSpecies`.
A função deve receber um parâmetro chamado `animal`.
Retorne a propriedade `species` usando a notação de ponto no `animal`.
Após criar a função, use `console.log` para chamá-la `getSpecies(tiger)` e assim você poderá ver o resultado no console.

---

## Etapa 7
Nesta etapa, você criará uma função para acessar a propriedade `age` de um objeto.
Eis um exemplo:

```javascript
const cat = {
  age: 3
};

const getAnimalAge = (pet) => {
  return pet.age; // access age using dot notation
};

console.log(getAnimalAge(cat)); // 3
```

Neste exemplo, a função recebe um objeto como parâmetro e retorna sua propriedade `age`.
Agora crie uma função chamada `getAge`.
A função deve receber um parâmetro chamado `animal`.
Retorne a propriedade `age` usando a notação de ponto no `animal`.
Após criar a função, use `console.log` para chamá-la `getAge(tiger)` e assim você poderá ver o resultado no console.

---

## Etapa 8
Nesta etapa, você criará uma função que adiciona uma nova propriedade a um objeto.
Aqui está um exemplo de como adicionar uma propriedade dentro de uma função:

```javascript
const cat = {
  species: "Cat"
};

const addColor = (pet, color) => {
  pet.color = color; // add new property using dot notation
  return pet; // return the updated object
};

console.log(addColor(cat, "White")); 
// {
//   species: 'Cat',
//   color: 'White'
// }
```

Neste exemplo, a propriedade `color` é adicionada ao objeto `cat`.
Agora crie uma função chamada `addHabitat`. A função deve receber dois parâmetros: `animal` e `habitat`.
Dentro da função, adicione uma nova propriedade chamada `habitat` ao objeto `animal`. Defina seu valor como igual ao parâmetro `habitat`.
Retorne o objeto `animal` atualizado.
Após criar a função, use o `console.log` para chamar `addHabitat(tiger, "Rainforest")` e visualizar o objeto `tiger` atualizado no console.

---

## Etapa 9
Nesta etapa, você criará uma função que atualiza uma propriedade de um objeto.
Aqui está um exemplo de como atualizar uma propriedade dentro de uma função:

```javascript
const dog = {
  age: 4
};

const changeAge = (pet, updatedAge) => {
  pet.age = updatedAge; // update existing property using dot notation
  return pet; // return the updated object
};

console.log(changeAge(dog, 6)); // { age: 6 }
```

Neste exemplo, a propriedade `age` é atualizada para um novo valor.
Agora crie uma função chamada `updateAge`. A função deve receber dois parâmetros: `animal` e `newAge`.
Dentro da função, atualize a propriedade `age` do objeto `animal` para `newAge`. Retorne o objeto `animal` atualizado.
Após criar a função, use o `console.log` para chamar `updateAge(elephant, 12)` e visualizar o objeto `elephant` atualizado no console.

---

## Etapa 10
Nesta etapa, você criará uma função que remove uma propriedade de um objeto.
Aqui está um exemplo de como remover uma propriedade usando `delete`:

```javascript
const bird = {
  species: "Parrot",
  canFly: true
};

const removeFlight = (pet) => {
  delete pet.canFly; // remove property using delete keyword
  return pet; // return the updated object
};

console.log(removeFlight(bird));
// { species: "Parrot" }
```

Neste exemplo, a propriedade `canFly` é removida do objeto `bird`.
Agora crie uma função chamada `removeEndangeredStatus`. A função deve receber um parâmetro chamado `animal`.
Dentro da função, remova a propriedade `isEndangered` do objeto `animal` usando a palavra-chave `delete`. Retorne o objeto `animal` atualizado.
Após criar a função, use o `console.log` para chamar `removeEndangeredStatus(tiger)` e visualizar o objeto atualizado no console.

---

## Etapa 11
Nesta etapa, você criará uma função que verifica se um objeto possui uma propriedade específica.
Aqui está um exemplo de uso do `hasOwnProperty`:

```javascript
const cat = {
  species: "Cat",
  color: "White"
};

const dog = {
  species: "Dog",
  weight: 50
};

const hasColor = (pet) => {
  return pet.hasOwnProperty("color"); // check if "color" property exists
};

console.log(hasColor(cat)); // true
console.log(hasColor(dog)); // false
```

Neste exemplo, a função `hasColor` é usada para verificar se a propriedade `color` existe em um objeto.
Agora crie uma função chamada `hasHabitat`. A função deve receber um parâmetro chamado `animal`.
Utilize o método `hasOwnProperty` para retornar `true` se o objeto `animal` possuir uma propriedade chamada `"habitat"` e `false` caso contrário.
Após criar a função, use `console.log` para chamar as funções `hasHabitat(tiger)` e `hasHabitat(elephant)`, assim você poderá ver ambos os resultados no console.

---

## Etapa 12
Nesta etapa final do workshop de Rastreamento de Vida Selvagem, você criará uma função que acessa uma propriedade de um objeto usando a notação de colchetes.
Aqui está um exemplo de como acessar uma propriedade usando a notação de colchetes:

```javascript
const cat = {
  species: "Cat",
  age: 3
};

const property = "species";

console.log(cat[property]); // "Cat"
```

Neste exemplo, a notação entre colchetes permite acessar uma propriedade usando uma variável.
Agora crie uma função chamada `getProperty`.
A função deve receber dois parâmetros: `animal` e `propertyName`.
Retorne o valor da propriedade usando a notação de colchetes.
Após criar a função, use `console.log` para chamá-la com `getProperty(tiger, "species")` e `getProperty(elephant, "age")`, assim você poderá ver os valores retornados no console.

**Com isso, o workshop de Rastreamento da Vida Selvagem está concluído!**