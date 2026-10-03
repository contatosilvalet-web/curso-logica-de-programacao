# 🏦 Verificador de Qualificação para Empréstimos (Loan Qualification Checker)

Projeto prático desenvolvido para consolidar o uso de estruturas condicionais encadeadas (`if`, `else if`, `else`), operadores relacionais e lógicos em JavaScript.

O objetivo do script é avaliar se um solicitante tem direito a linhas de crédito para financiamento imobiliário (imóvel duplex, apartamento) e veicular (carro), considerando sua **renda anual** (`annualIncome`) e seu **score de crédito** (`creditScore`).

---

## 📋 Regras de Negócio e Requisitos

| Linha de Crédito | Renda Mínima Anual | Pontuação de Crédito Mínima | Benefícios Concedidos |
| :--- | :---: | :---: | :--- |
| **Duplex** | $60.000 | 700 | Qualifica para Duplex, Apartamento e Carro |
| **Apartamento (Condo)** | $45.000 | 680 | Qualifica para Apartamento e Carro |
| **Carro** | $30.000 | 650 | Qualifica apenas para Carro |
| **Nenhum** | Abaixo de $30.000 | Abaixo de 650 | Não qualifica para nenhum empréstimo |

---

## 🧠 Conceitos Praticados

- **Constantes (`const`):** Armazenamento de valores fixos que funcionam como parâmetros do sistema de aprovação.
- **Funções com múltiplos argumentos:** Recepção de dados (`annualIncome`, `creditScore`) e devolução da resposta com a diretiva `return`.
- **Operador lógico E (`&&`):** Exigência de que tanto a renda quanto o score atendam aos patamares mínimos simultaneamente.
- **Hierarquia de condições (`if / else if / else`):** Avaliação partindo da faixa mais restritiva para a mais acessível, prevenindo condições conflitantes.