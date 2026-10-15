# Criar uma função de repetição de string
Neste laboratório, você criará uma função que repete uma determinada string um número específico de vezes. Para os fins deste laboratório, não utilize o método integrado .repeat().

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário:

Você deve criar uma função chamada repeatStringNumTimesque receba dois parâmetros: uma string e um número.
A função deve retornar a string repetida o número de vezes especificado.
Se o número for menor ou igual a zero, a função deverá retornar uma string vazia.
Testes:
Esperando :1. Você deve criar uma função chamada repeatStringNumTimes.
Esperando :2. repeatStringNumTimesDeve receber dois parâmetros.
Esperando :3. A função repeatStringNumTimesdeve sempre retornar uma string.
Esperando :4. repeatStringNumTimes("*", 3)deve retornar a string ***.
Esperando :5. repeatStringNumTimes("abc", 3)deve retornar a string abcabcabc.
Esperando :6. repeatStringNumTimes("abc", 4)deve retornar a string abcabcabcabc.
Esperando :7. repeatStringNumTimes("abc", 1)deve retornar a string abc.
Esperando :8. repeatStringNumTimes("*", 8)deve retornar a string ********.
Esperando :9. repeatStringNumTimes("abc", -2)deve retornar uma string vazia ( "").
Esperando :10. repeatStringNumTimes("abc", 0)deve retornar "".
Esperando :11. O método integrado repeat()não deve ser usado.