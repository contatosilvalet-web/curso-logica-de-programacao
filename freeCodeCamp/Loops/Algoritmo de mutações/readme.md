# Implemente o algoritmo de mutações.

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário:

Crie uma função chamada mutationque receba um array como argumento.
mutationDeve retornar verdadeiro truese a string no primeiro elemento do array contiver todas as letras da string no segundo elemento do array, e falsefalso caso contrário. Por exemplo:
mutation(["hello", "Hello"]), deve retornar trueporque todas as letras da segunda string estão presentes na primeira, ignorando maiúsculas e minúsculas.
mutation(["hello", "hey"])deve retornar falseporque a string hellonão contém um y.
mutation(["Alien", "line"]), deve retornar trueporque todas as letras em lineestão presentes em Alien.

## Testes:
Esperando :1. mutation(["hello", "hey"])deve retornar false.
Esperando :2. mutation(["hello", "Hello"])deve retornar true.
Esperando :3. mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])deve retornar true.
Esperando :4. mutation(["Mary", "Army"])deve retornar true.
Esperando :5. mutation(["Mary", "Aarmy"])deve retornar true.
Esperando :6. mutation(["Alien", "line"])deve retornar true.
Esperando :7. mutation(["floor", "for"])deve retornar true.
Esperando :8. mutation(["hello", "neo"])deve retornar false.
Esperando :9. mutation(["voodoo", "no"])deve retornar false.
Esperando :10. mutation(["ate", "date"])deve retornar false.
Esperando :11. mutation(["Tiger", "Zebra"])deve retornar false.
Esperando :12. mutation(["Noel", "Ole"])deve retornar true.