# 🛠️ Laboratório: Depurar Erros de Coerção de Tipo em JavaScript

## 📋 Descrição do Projeto
Neste projeto, atuamos na depuração e refatoração de código com erros aritméticos causados por **coerção implícita de tipos** (*type coercion*) em JavaScript. Os desenvolvedores anteriores tentaram realizar cálculos simples misturando números com valores booleanos, cadeias de caracteres (*strings*) e `null`, gerando resultados imprevistos e código propenso a falhas.

O objetivo foi limpar todas as expressões aritméticas, garantindo que as operações ocorram estritamente entre valores numéricos primitivos (`number`), cumprindo todas as histórias de utilizador e testes unitários.

---

## 🎯 Histórias de Utilizador

1. **`firstResult`**: Deve somar corretamente os números `5` e `10`, produzindo o valor numérico `15`.
2. **`secondResult`**: Deve subtrair corretamente `5` de `8`, produzindo o valor numérico `3`.
3. **`thirdResult`**: Deve produzir o valor numérico `6` através da soma de dois números, substituindo qualquer booleano existente por um valor numérico.
4. **`fourthResult`**: Deve produzir o valor numérico `8` através da soma de dois números, substituindo qualquer booleano existente por um valor numérico.
5. **`fifthResult`**: Deve multiplicar corretamente dois números para obter o produto `20`, substituindo a *string* existente por um valor numérico.
6. **`sixthResult`**: Deve somar dois números para produzir o valor numérico `22`, substituindo o valor `null` por um número.

---

## 🧠 Conceito Teórico: Coerção de Tipos (*Type Coercion*)

No JavaScript, quando misturamos tipos diferentes em operações aritméticas, o motor da linguagem tenta converter os tipos automaticamente nos bastidores:

| Expressão Original (com bug) | Comportamento Implícito | Risco / Problema |
| :--- | :--- | :--- |
| `"5" + 10` | Concatena em texto (`"510"`) | O operador `+` prioriza *string* se um operando for texto. |
| `true + 5` | Converte `true` para `1` (`1 + 5 = 6`) | Código confuso e sem clareza semântica. |
| `false + 8` | Converte `false` para `0` (`0 + 8 = 8`) | Uso indevido de booleano em cálculo aritmético. |
| `"10" * 2` | Converte `"10"` para `10` (`10 * 2 = 20`) | Frágil: se a *string* tiver caracteres não numéricos, resulta em `NaN`. |
| `null + 22` | Converte `null` para `0` (`0 + 22 = 22`) | Mau uso de referências de ausência de valor em matemática. |

> **Boa Prática:** Operações aritméticas devem ser sempre realizadas diretamente entre valores do tipo primitivo `Number` explícitos para evitar surpresas em tempo de execução.