# Workshop: Transformação de Strings com `replace()`, `replaceAll()` e `repeat()` em JavaScript

## Objetivo
Praticar a manipulação e transformação de textos em JavaScript explorando métodos nativos de substituição de substrings (`replace()` vs `replaceAll()`), repetição de padrões de texto (`repeat()`) e encadeamento de métodos (*method chaining*) com `trimEnd()`, reforçando o conceito de imutabilidade de strings.

---

## Conceitos Abordados

| Método / Conceito | Descrição |
| :--- | :--- |
| `str.replace(substr, newSubstr)` | Substitui **apenas a primeira ocorrência** de um padrão ou substring encontrada. |
| `str.replaceAll(substr, newSubstr)` | Substitui **todas as ocorrências** do termo informado na string. |
| `str.repeat(count)` | Retorna uma nova string contendo o texto original replicado o número de vezes especificado em `count`. |
| `str.trimEnd()` | Remove espaços em branco do final da string. |
| **Encadeamento de Métodos** | Capacidade de aplicar métodos em sequência direta (ex: `str.repeat(3).trimEnd()`). |
| **Imutabilidade** | Strings não são alteradas diretamente na memória; todo método de string devolve uma nova cadeia de caracteres. |

---

## Roteiro de Desenvolvimento

- [x] **Passos 1 a 4:** Declarar `originalString = "I love cats."`, aplicar `replace("cats", "dogs")` na variável `replacedString` e registrar os resultados no console.
- [x] **Passos 5 e 6:** Declarar `exampleSentence = "I love cats and cats are so much fun!"` e observar a limitação do `replace()`, que substitui apenas o primeiro `"cats"`.
- [x] **Passo 7:** Atualizar a substituição para `replaceAll("cats", "dogs")` em `dogsOnlySentence`, garantindo que todas as ocorrências sejam alteradas para `"dogs"`.
- [x] **Passo 8:** Declarar `learningSentence = "I love learning!"` e exibir no console.
- [x] **Passos 9 a 11:** Replicar palavras e encadear métodos:
  - Utilizar `"love ".repeat(3)` e encadear com `.trimEnd()` para remover o espaço residual do final em `repeatedLove`.
  - Montar a frase completa `newSentence = `I ${repeatedLove} learning.`` e exibir no console.