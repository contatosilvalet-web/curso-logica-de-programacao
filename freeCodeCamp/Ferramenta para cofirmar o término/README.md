# Criar uma ferramenta para confirmar o término
Neste laboratório, você implementará uma função que verifica se uma string termina com a string alvo fornecida.

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário
Você deve criar uma função chamada confirmEndingque receba dois parâmetros: a string a ser verificada e a string com a qual comparar.
A função deve retornar verdadeiro truese a primeira string terminar com a segunda string e falsefalso caso contrário.
Você não deve usar esse .endsWith()método; em vez disso, use um dos métodos de substring do JavaScript para conseguir isso.

## Testes
Esperando :1. Você deve criar uma função chamada confirmEnding.
Esperando :2. confirmEndingDeve receber 2 parâmetros.
Esperando :3. confirmEnding("Bastian", "n")deve retornar true.
Esperando :4. confirmEnding("Congratulation", "on")deve retornar true.
Esperando :5. confirmEnding("Connor", "n")deve retornar false.
Esperando :6. confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")deve retornar false.
Esperando :7. confirmEnding("He has to give me a new name", "name")deve retornar true.
Esperando :8. confirmEnding("Open sesame", "same")deve retornar true.
Esperando :9. confirmEnding("Open sesame", "sage")deve retornar false.
Esperando :10. confirmEnding("Open sesame", "game")deve retornar false.
Esperando :11. confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain")deve retornar false.
Esperando :12. confirmEnding("Abstraction", "action")deve retornar true.
Esperando :13. Seu código não deve usar o método integrado .endsWith()para resolver o exercício.