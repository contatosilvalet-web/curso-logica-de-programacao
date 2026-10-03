# Implemente o algoritmo de truncamento de string.
Neste laboratório, você praticará o truncamento de uma string para um determinado comprimento.

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário
Você deve ter uma função truncateStringque aceite dois argumentos, sendo o primeiro uma string e o segundo um número.
Se o comprimento da string for maior que o número fornecido, a string deverá ser truncada para reduzir seu comprimento a um valor igual ao fornecido, e o valor ...deverá ser concatenado ao final da string truncada.
Se o comprimento da string for igual ou menor que o número fornecido, a string deverá ser retornada sem alterações.

## Testes
Esperando :1. truncateString("A-tisket a-tasket A green and yellow basket", 8)deve retornar a string A-tisket....
Esperando :2. truncateString("Peter Piper picked a peck of pickled peppers", 11)deve retornar a string Peter Piper....
Esperando :3. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)deve retornar a string A-tisket a-tasket A green and yellow basket.
Esperando :4. truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)deve retornar a string A-tisket a-tasket A green and yellow basket.
Esperando :5. truncateString("A-", 1)deve retornar a string A....
Esperando :6. truncateString("Absolutely Longer", 2)deve retornar a string Ab....