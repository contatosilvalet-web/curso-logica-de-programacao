# 🧪 Laboratório: Verificação de Primitivo Booleano (`booWho`)

Neste desafio, o objetivo é criar uma função em JavaScript para validar se um determinado valor pertence ao tipo primitivo **booleano** (`true` ou `false`).

---

## 🎯 Objetivo

Implementar a função de acordo com as histórias de usuário e garantir a aprovação em todos os testes unitários.

---

## 📋 Histórias de Usuário

1. O sistema deve declarar uma função chamada `booWho` que aceite um argumento (por exemplo, `bool`).
2. Se o argumento recebido for estritamente um primitivo booleano (`true` ou `false`), a função deve retornar `true`.
3. Se o argumento recebido for qualquer outro valor ou tipo de dado, a função deve retornar `false`.

---

## 🧪 Casos de Teste

| # | Chamada / Entrada | Retorno Esperado | Motivo / Tipo |
|---|-------------------|:----------------:|---------------|
| 1 | Existência de `booWho` | `function` | A função deve estar declarada |
| 2 | `booWho(true)` | `true` | Primitivo booleano |
| 3 | `booWho(false)` | `true` | Primitivo booleano |
| 4 | `booWho([1, 2, 3])` | `false` | Array (`object`) |
| 5 | `booWho([].slice)` | `false` | Função (`function`) |
| 6 | `booWho({ "a": 1 })` | `false` | Objeto (`object`) |
| 7 | `booWho(1)` | `false` | Número (`number`) |
| 8 | `booWho(NaN)` | `false` | Valor especial numérico (`number`) |
| 9 | `booWho("a")` | `false` | String |
| 10 | `booWho("true")` | `false` | String contendo texto "true" |
| 11 | `booWho("false")` | `false` | String contendo texto "false" |

---