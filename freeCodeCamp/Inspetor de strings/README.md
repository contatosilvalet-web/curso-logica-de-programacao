# Laboratório: Explorando os Métodos `includes()` e `slice()` em JavaScript

## Objetivo
Praticar a inspeção e a extração de substrings em JavaScript através dos métodos nativos `String.prototype.includes()` e `String.prototype.slice()`, compreendendo o comportamento de *case-sensitivity*, indexação posicional (incluindo índices negativos) e interpolação de variáveis com *template literals*.

---

## Conceitos Abordados

- **`String.prototype.includes(substring)`**: Retorna um valor booleano (`true` ou `false`) indicando se a string consultada contém os caracteres informados. Faz distinção entre maiúsculas e minúsculas (*case-sensitive*).
- **`String.prototype.slice(startIndex, endIndex)`**: Extrai uma seção de uma string e retorna uma nova string sem modificar a original. 
  - `startIndex`: Índice onde inicia a extração (incluso).
  - `endIndex`: Índice onde termina a extração (excluído). Se omitido, extrai até o final.
  - Índices negativos: Permitem contar posições de trás para frente (ex: `-1` representa o último caractere).
- **Template Literals (`` `...` ``)**: Interpolação simplificada de variáveis com a sintaxe `${variavel}` sem a necessidade de operadores de concatenação (`+`).

---

## Roteiro de Etapas

- [x] **Passo 1:** Declarar a variável `fccSentence` com o valor `"freeCodeCamp is a great place to learn web development."`.
- [x] **Passo 2:** Exibir a mensagem informativa `"Here are some examples of the includes() method:"` no console.
- [x] **Passo 3:** Usar `.includes("freeCodeCamp")` em `fccSentence` e atribuir o resultado booleano à variável `hasFreeCodeCamp`.
- [x] **Passo 4:** Exibir a mensagem formatada: `fccSentence.includes("freeCodeCamp") returns <hasFreeCodeCamp> because the word "freeCodeCamp" is in the sentence.`.
- [x] **Passo 5:** Verificar se `fccSentence` contém `"JavaScript"` na variável `hasJavaScript` e exibir a mensagem informando que a palavra não está presente.
- [x] **Passo 6:** Avaliar a distinção de maiúsculas/minúsculas testando `"freecodecamp"` com a variável `hasLowercaseFCC` e exibir a explicação no console.
- [x] **Passo 7:** Declarar a variável `message` com `"Welcome to freeCodeCamp!"` e exibir a mensagem `"Here are some examples of the slice() method:"`.
- [x] **Passo 8:** Fatiar a palavra `"freeCodeCamp"` usando `message.slice(11, 23)` na variável `platform`.
- [x] **Passo 9:** Exibir a mensagem: `The word "<platform>" was sliced from the message.`.
- [x] **Passo 10:** Extrair a palavra `"Welcome"` usando `message.slice(0, 7)` na variável `greetingWord` e exibir `The first word is "<greetingWord>"`.
- [x] **Passo 11:** Extrair a pontuação final com índice negativo `message.slice(-1)` na variável `endPunctuation` e exibir `The ending punctuation mark is a "<endPunctuation>"`.
- [x] **Passo 12:** Exibir a mensagem de finalização do workshop no console: `"Workshop complete! You now know how to use includes() and slice()."`.