# Workshop: Métodos de Manipulação e Formatação de Strings em JavaScript

## Objetivo
Praticar o tratamento e a formatação de textos em JavaScript utilizando métodos nativos de limpeza de espaços em branco (`trim()`, `trimStart()`, `trimEnd()`), alternância de caixa (`toUpperCase()`, `toLowerCase()`) e composição avançada com fatiamento (`slice()`), indexação e concatenação para conversão de termos em convenção *camelCase*.

---

## Métodos e Conceitos Explorados

| Método / Sintaxe | Descrição |
| :--- | :--- |
| `str.trim()` | Remove espaços em branco de ambas as extremidades da string. |
| `str.trimStart()` | Remove espaços em branco apenas do início (à esquerda). |
| `str.trimEnd()` | Remove espaços em branco apenas do final (à direita). |
| `str.toUpperCase()` | Converte todos os caracteres alfabéticos para maiúsculas. |
| `str.toLowerCase()` | Converte todos os caracteres alfabéticos para minúsculas. |
| `str.slice(start, end)` | Extrai um trecho da string do índice `start` até `end` (não incluso). Aceita índices negativos para contar a partir do final. |
| `str[index]` | Acessa o caractere situado na posição informada (base zero). |
| **Imutabilidade** | Strings em JavaScript não são modificadas diretamente pelos métodos; cada operação retorna uma nova string. |