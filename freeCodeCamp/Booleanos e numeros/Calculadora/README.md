# 🧮 Calculadora em JavaScript (Workshop de Funções)

Projeto didático com foco no aprendizado de conceitos essenciais de **funções em JavaScript**, desenvolvido passo a passo através de 19 etapas práticas. O projeto evolui desde a declaração básica de funções até a criação de rotinas reutilizáveis com tratamento de exceções matemáticas (*edge cases*).

---

## 🎯 Visão Geral

O objetivo deste repositório é documentar a construção de uma calculadora funcional em JavaScript, compreendendo:
- Como evitar repetição de código (princípio DRY).
- A diferença prática entre declaração estática e uso de **parâmetros/argumentos**.
- Como tratar divisões inválidas (evitando o retorno de `Infinity`).
- O uso de métodos matemáticos embutidos (`Math.pow`, `Math.sqrt`) e operadores modernos (`**`).

---

## 🧠 Conceitos Praticados

| Conceito | Descrição |
| :--- | :--- |
| **Declaração de Funções** | Uso de sintaxe tradicional `function` e funções seta (`arrow functions`). |
| **Retorno (`return`)** | Envio do resultado processado para fora do escopo da função. |
| **Invocação / Chamada** | Execução de rotinas e leitura de saídas no console (`console.log`). |
| **Parâmetros vs Argumentos** | Definição de marcadores de posição versus valores reais fornecidos na chamada. |
| **Edge Cases** | Verificação de divisão por zero antes do cálculo numérico. |
| **Objeto `Math` & Exponenciação** | Uso de `Math.sqrt()` e do operador `**` para potências e raízes. |

---

## 🗺️ Estrutura das Etapas

### Fase 1: Primeiros Passos e Refatoração (Passos 1 ao 5)
- **Passo 1 a 3:** Criação e invocação da função `addTwoAndSeven()`.
- **Passo 4:** Criação da função `addThreeAndFour()`.
- **Passo 5:** Identificação de código duplicado e limpeza para introdução de parâmetros.

### Fase 2: Operações Básicas Reutilizáveis (Passos 6 ao 12)
- **Passo 6 a 9:** Função de soma genérica `calculateSum(num1, num2)` e testes com diferentes valores.
- **Passo 10 e 11:** Função de subtração `calculateDifference(num1, num2)` com validações no console.
- **Passo 12:** Função de multiplicação `calculateProduct(num1, num2)`.

### Fase 3: Divisão e Tratamento de Exceções (Passos 13 ao 15)
- **Passo 13 e 14:** Implementação inicial de `calculateQuotient(num1, num2)` e observação do comportamento de divisão por zero (`Infinity`).
- **Passo 15:** Adição de condicional para retornar a mensagem `"Error: Division by zero"`.

### Fase 4: Potência e Raiz Quadrada (Passos 16 ao 19)
- **Passo 16 e 17:** Função `calculateSquare(num)` usando o operador de exponenciação (`**`).
- **Passo 18 e 19:** Função `calculateSquareRoot(num)` utilizando `Math.sqrt()`.

---