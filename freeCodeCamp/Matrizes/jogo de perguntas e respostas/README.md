# Crie um jogo de perguntas e respostas

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário:
Você deve criar um array chamado questions.
O questionsarray deve conter pelo menos cinco objetos, cada um com as chaves category, question, choices, e answer.
A categorychave deve ter o valor de uma string que representa uma categoria de pergunta.
A questionchave deve ter o valor de uma string que representa uma pergunta.
A choiceschave deve ter o valor de um array contendo três strings, que são respostas alternativas para a pergunta.
A answerchave deve conter o valor de uma string, representando a resposta correta para a pergunta. Além disso, o valor de `value` answerdeve ser incluído no choicesarray.
Você deve ter uma função chamada `query` getRandomQuestionque receba um array de perguntas como parâmetro e retorne um objeto de pergunta aleatório desse array.
Você deve ter uma função chamada `random` getRandomComputerChoiceque receba como parâmetro um array com as opções disponíveis e retorne uma resposta aleatória para a pergunta selecionada.
Você deve ter uma função chamada `question` getResultsque receba o objeto da pergunta como primeiro parâmetro e a resposta escolhida pelo computador como segundo parâmetro. A função deve retornar `true` The computer's choice is correct!se a resposta estiver correta. Caso contrário, ela retorna `true` The computer's choice is wrong. The correct answer is: <correct-answer>, onde `true` <correct-answer>é o valor da resposta correta para a pergunta escolhida.

## Testes:
Aguardando :
1. Você deve criar um array chamado questions.
Aguardando :
2. O questionsarray deve conter pelo menos cinco objetos, cada um com as chaves category, question, choices, e answer.
Aguardando :
3. A categorychave deve ter o valor de uma string que representa uma categoria de pergunta.
Aguardando :
4. A questionchave deve ter o valor de uma string que representa uma pergunta.
Aguardando :
5. A choiceschave deve ter o valor de uma matriz contendo três strings diferentes entre si.
Aguardando :
6. A answerchave deve ter o valor de uma string.
Aguardando :
7. O valor de answerdeve ser incluído na choicesmatriz.
Aguardando :
8. Você deve ter uma função chamada getRandomQuestionque recebe um array de perguntas como parâmetro e retorna um objeto de pergunta aleatório do array.
Aguardando :
9. Você deve ter uma função chamada getRandomComputerChoiceque recebe como parâmetro um array com as opções disponíveis e retorna uma resposta aleatória para a pergunta selecionada.
Aguardando :
10. Você deve ter uma função chamada getResults.
Aguardando :
11. Sua getResultsfunção deve receber o objeto da pergunta como primeiro parâmetro e a escolha do computador como segundo parâmetro.
Aguardando :
12. Se a opção do computador corresponder à resposta, getResultsdeve retornarThe computer's choice is correct!
Aguardando :
13. Se a opção escolhida pelo computador não corresponder à resposta, getResultsdeve retornar The computer's choice is wrong. The correct answer is: <correct-answer>, onde <correct-answer>é o valor da resposta correta para a pergunta escolhida.
Aguardando :
14. Sua getResultsfunção deve usar comparação de igualdade exata, não correspondência de substrings.