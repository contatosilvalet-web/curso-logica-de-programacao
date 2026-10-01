# Crie um assistente de contagem de cartas
- No jogo de cassino Blackjack, um jogador pode determinar se tem vantagem sobre a casa na próxima mão, acompanhando a quantidade relativa de cartas altas e baixas restantes no baralho. Isso se chama contagem de cartas.

Ter mais cartas altas restantes no baralho favorece o jogador. Quando a contagem for positiva, o jogador deve apostar alto. Quando a contagem for zero ou negativa, o jogador deve apostar baixo.

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário
- Você deve usar **let** para declarar uma variável global chamada counte atribuir a ela o valor 0.
- Você deveria ter uma função chamada **cardCounter**.
- A cardCounterfunção deve receber um cardparâmetro que pode ser um número ou uma string.

Para valores entre 2-1 e 2 10, o cardparâmetro será um número.
Para todos os outros valores, o cardparâmetro será uma string.

- A **cardCounter** função deve modificar a countvariável global com base em determinados critérios.
- A **countvariável** global deve ser incrementada em 1para os cartões 2, 3, 4, 5, ou6
- A **countvariável** global deve permanecer inalterada para os cartões 7, 8, 9.
- A **countvariável** global deve ser diminuída em 1para os cartões 10, "J", "Q", "K","A"
- A **cardCounter** função deve retornar uma string com a contagem atual e outra string Betcaso a contagem seja positiva.
- A **cardCounter** função deve retornar uma string com a contagem atual e a string Holdse a contagem for menor ou igual a 0.
- Na saída da função, a contagem atual e a decisão do jogador (Betou Hold) devem ser separadas por um espaço. Por exemplo, -3 Hold.

## Testes
**Esperando :1.** Você deve usar letpara declarar uma variável global chamada counte atribuir a ela o valor 0.
**Esperando :2.** Você deve ter uma função chamada cardCounter.
**Esperando :3.** Sua função deve retornar o valor de counte o texto ( Betou Hold) com um caractere de espaço entre eles.
**Esperando :4.** Depois dos cartões 2, 3, 4, 5, a chamada cardCounter(6)deve retornar a string 5 Bet.
**Esperando :5.** Depois dos cartões 7, 8, a chamada cardCounter(9)deve retornar a string 0 Hold.
**Esperando :6.** Depois dos cartões 10, "J", "Q", "K", a chamada cardCounter("A")deve retornar a string -5 Hold.
**Esperando :7.** Depois dos cartões 3, 7, "Q", 8, a chamada cardCounter("A")deve retornar a string -1 Hold.
**Esperando :8.** Depois dos cartões 2, "J", 9, 2, a chamada cardCounter(7)deve retornar a string 1 Bet.
**Esperando :9.** Depois dos cartões 2, 2, a chamada cardCounter(10)deve retornar a string 1 Bet.
**Esperando :10.** Depois dos cartões 3, 2, "A", 10, a chamada cardCounter("K")deve retornar a string -1 Hold.