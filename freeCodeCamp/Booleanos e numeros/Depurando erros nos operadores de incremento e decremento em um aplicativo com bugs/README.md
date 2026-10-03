# 🛠️ Laboratório: Depurando Operadores de Incremento e Decremento em JavaScript

## 📋 Descrição do Projeto
Neste projeto, auxiliamos na depuração e refatoração de código com comportamentos imprevistos causados pela diferença entre as formas **prefixada** e **pós-fixada** dos operadores de incremento (`++`) e decremento (`--`) em JavaScript.

O objetivo foi substituir atribuições literais diretas (*hardcoded*) pelo uso correto dos operadores sobre variáveis existentes, garantindo que o valor retornado no momento da atribuição coincida exatamente com os requisitos de cada caso de teste.

---

## 🎯 Histórias de Usuário

1. **`updatedCounter`**: Deve produzir o valor `11` utilizando a notação de incremento prefixado (`++counter`).
2. **`finalScore`**: Deve produzir o valor `8` utilizando a notação de incremento pós-fixado (`score++`).
3. **`updatedCoins`**: Deve produzir o valor `2` utilizando a notação de decremento prefixado (`--coins`).
4. **`newHealth`**: Deve produzir o valor `7` utilizando a notação de decremento pós-fixado (`health--`).

---

## 🧠 Conceito Teórico: Notação Prefixada vs. Pós-fixada

Os operadores unários `++` e `--` adicionam ou subtraem `1` de uma variável, mas o momento em que o valor é entregue na expressão depende do posicionamento do operador:

| Forma | Sintaxe | Momento da Atualização | Valor Retornado na Expressão |
| :--- | :--- | :--- | :--- |
| **Pré-incremento** | `++var` | Incrementa a variável **antes** de ler o valor. | Retorna o valor **já alterado**. |
| **Pós-incremento** | `var++` | Incrementa a variável **depois** de ler o valor. | Retorna o valor **original (anterior)**. |
| **Pré-decremento** | `--var` | Decrementa a variável **antes** de ler o valor. | Retorna o valor **já alterado**. |
| **Pós-decremento** | `var--` | Decrementa a variável **depois** de ler o valor. | Retorna o valor **original (anterior)**. |

### Exemplos Práticos:
```javascript
// Prefixado (++a): incrementa e depois entrega
let a = 10;
let b = ++a; // a vira 11, b recebe 11

// Pós-fixado (c++): entrega o valor atual e depois incrementa
let c = 8;
let d = c++; // d recebe 8, depois c vira 9