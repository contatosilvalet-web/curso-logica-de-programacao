# 🔮 Máquina de Adivinhação (Fortune Teller)

Neste laboratório em JavaScript, você construirá um gerador de previsões da sorte. O programa define cinco mensagens possíveis, seleciona aleatoriamente um número de 1 a 5 e exibe no console a mensagem correspondente.

---

## 🎯 Objetivo

Atender a todas as histórias de usuário e passar em todos os testes automatizados do laboratório.

---

## 📋 Histórias de Usuário

1. **Definição das Mensagens:** Inicialize cinco variáveis (`fortune1`, `fortune2`, `fortune3`, `fortune4` e `fortune5`) contendo strings com mensagens da sorte.  
   *Sugestões de frases:*
   - `"Your cat will look very cuddly today."`
   - `"The weather will be nice tomorrow."`
   - `"Be cautious of your new neighbors."`
   - `"You will find a new hobby soon."`
   - `"It would be wise to avoid the color red today."`

2. **Geração do Número Aleatório:** Gere um número inteiro aleatório entre **1 e 5** (inclusive) usando `Math.random()` e `Math.floor()`, e atribua-o à variável `randomNumber`.

3. **Seleção da Mensagem:** Crie a variável `selectedFortune` e atribua a ela a frase correspondente ao número sorteado:
   - Se `randomNumber === 1` ➔ atribua o valor de `fortune1`
   - Se `randomNumber === 2` ➔ atribua o valor de `fortune2`
   - Se `randomNumber === 3` ➔ atribua o valor de `fortune3`
   - Se `randomNumber === 4` ➔ atribua o valor de `fortune4`
   - Se `randomNumber === 5` ➔ atribua o valor de `fortune5`

4. **Saída:** Registre o valor de `selectedFortune` no console com `console.log()`.

---

## ✅ Critérios de Aceite (Testes)

| # | Critério de Teste |
|---|---|
| **01** | Inicializar `fortune1` com um valor do tipo string. |
| **02** | Inicializar `fortune2` com um valor do tipo string. |
| **03** | Inicializar `fortune3` com um valor do tipo string. |
| **04** | Inicializar `fortune4` com um valor do tipo string. |
| **05** | Inicializar `fortune5` com um valor do tipo string. |
| **06** | Usar o método `Math.random()` para gerar o valor aleatório. |
| **07** | Gerar um inteiro de 1 a 5 (inclusivo) e armazenar em `randomNumber`. |
| **08** | Declarar a variável `selectedFortune` dependente de `randomNumber`. |
| **09** | Fazer a correspondência correta entre `randomNumber` e a respectiva `fortune[N]`. |
| **10** | Exibir o valor de `selectedFortune` no console. |

---

## 💡 Dica de Implementação

Para gerar um número inteiro entre `1` e `5` (inclusive), combine `Math.floor()` e `Math.random()`:

```javascript
const randomNumber = Math.floor(Math.random() * 5) + 1;