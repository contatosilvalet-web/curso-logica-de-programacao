# 🤖 Workshop MathBot (JavaScript Math Object)

Neste workshop, construímos o **MathBot**, um script interativo de console que demonstra na prática o funcionamento dos principais métodos do objeto global `Math` em JavaScript.

---

## 📋 Passo a Passo do Projeto

### Passo 1: Inicialização do Bot
- Crie uma variável `botName` com o valor `"MathBot"`.
- Crie uma variável `greeting` com a mensagem:  
  `"Hi there! My name is [botName] and I am here to teach you about the Math object!"`  
  *(Use template literals ou concatenação com `+`)*.
- Registre `greeting` no console.

### Passo 2: Introdução ao `Math.random()`
- Exiba no console a mensagem explicativa:  
  `"The Math.random() method returns a pseudo random number greater than or equal to 0 and less than 1."`

### Passo 3: Gerando um Número Pseudoaleatório
- Crie uma variável `randomNum` e atribua a ela o retorno de `Math.random()`.
- Registre `randomNum` no console.

### Passo 4: Definindo um Intervalo
- Exiba no console a mensagem:  
  `"Now, generate a random number between two values."`
- Crie a variável `min` com o valor `1`.
- Crie a variável `max` com o valor `100`.

### Passo 5: Número Flutuante no Intervalo
- Gere um número decimal entre `min` e `max` usando a fórmula:  
  ```javascript
  Math.random() * (max - min) + min;