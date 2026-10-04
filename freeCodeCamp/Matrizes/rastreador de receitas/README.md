# Workshop: Rastreador de Receitas

## Etapa 1
Neste workshop, você criará um rastreador de receitas usando objetos JavaScript.

Comece criando um array vazio chamado `recipes`. Este é o array no qual você inserirá os objetos de receita posteriormente.

## Etapa 2
Crie um objeto chamado `recipe1`. Dentro do objeto `recipe1`, crie uma propriedade `name` com o valor `"Spaghetti Carbonara"`.

Dentro do objeto `recipe1`, crie também uma propriedade `ingredients` com um array como valor. O array deve conter os valores `"spaghetti"`, `"Parmesan cheese"`, `"pancetta"` e `"black pepper"`.

## Etapa 3
Adicione as seguintes propriedades ao objeto `recipe1`:

| Chave | Valor |
|---|---|
| `cookingTime` | `22` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

As propriedades com valores `null` e strings vazias serão atualizadas posteriormente, após o cálculo.

## Etapa 4
Crie um objeto `recipe2` com as seguintes propriedades e valores:

| Chave | Valor |
|---|---|
| `name` | `"Chicken Curry"` |
| `ingredients` | `["chicken breast", "coconut milk", "curry powder", "onion", "garlic"]` |
| `cookingTime` | `42` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

## Etapa 5
Crie um objeto `recipe3` com as seguintes propriedades e valores:

| Chave | Valor |
|---|---|
| `name` | `"Vegetable Stir Fry"` |
| `ingredients` | `["broccoli", "carrot", "bell pepper"]` |
| `cookingTime` | `15` |
| `totalIngredients` | `null` |
| `difficultyLevel` | `""` |

## Etapa 6
Antes de prosseguir, você deve praticar como acessar as propriedades de um objeto. Você pode usar a notação de ponto (`.`) ou de colchetes (`[]`) para fazer isso. Aqui está um exemplo:

```javascript
const person = {
  name: "John",
  age: 30,
  job: "Software Engineer"
};

console.log(person.name); // John
console.log(person['age']);  // 30 
```
Acesse a propriedade name de recipe1, e atribua-a à variável recipe1Name.

Em seguida, acesse a propriedade cookingTime de recipe2 e atribua-a à variável recipe2CookingTime.

Finalmente, acesse a propriedade ingredients de recipe3 e atribua-a à variável recipe3Ingredients.

Certifique-se de que todas as variáveis ​​que você criou sejam registradas no console.

## Etapa 7
Agora você deve adicionar os três objetos à matriz recipes. Para fazer isso, você pode usar o método push().

Use o método push() para adicionar todos os objetos de receita ao array recipes. Certifique-se de adicionar recipe1, recipe2, e recipe3 nessa ordem.

Exclua também as variáveis recipe1Name, recipe2CookingTime e recipe3Ingredients, bem como as instruções console.log que registram essas variáveis.

## Etapa 8
Crie uma função getTotalIngredients que receba um único argumento, representando um array com ingredientes, e retorne a quantidade de ingredientes presentes no array passado para a função.

## Etapa 9
Crie uma função getDifficultyLevel que receba como parâmetro um número que indica o tempo de cozimento.

Se o tempo de cozimento for menor ou igual a 30, a função deve retornar "easy". Se for menor ou igual a 60, a função deve retornar "medium". Caso contrário, a função deve retornar "hard".

## Etapa 10
Chegou a hora de testar cada uma das funções. Você pode usar qualquer uma das receitas para isso, mas este tutorial começará com a primeira recipe1.

Crie duas novas variáveis: recipe1TotalIngredients e recipe1DifficultyLevel. Atribua valores a elas chamando a função correspondente para cada variável e passando a propriedade de recipe1 apropriada.

Por fim, registre cada variável no console para ver os resultados.

## Etapa 11
Agora você pode preencher cada item da matriz recipes com valores para as propriedades totalIngredients e difficultyLevel.

Por enquanto, acesse os valores de totalIngredients e difficultyLevel de recipe1 e defina-os com os resultados apropriados das chamadas de função e argumentos.

## Etapa 12
Repita o processo para as propriedades totalIngredients e difficultyLevel de recipe2 e recipe3.

## Etapa 13
Agora, registre o array recipes no console para ver todos os seus itens preenchidos com os valores atualizados.

Com isso, seu projeto de controle de receitas está concluído!