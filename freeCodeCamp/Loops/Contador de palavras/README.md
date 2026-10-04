## Etapa 1
Neste workshop, você praticará o uso de for...ofloops construindo uma função que conta quantas vezes uma string aparece em um array de strings.
Antes de escrever essa função, você criará uma mais simples que registra cada caractere de uma string no console.
Comece definindo uma função vazia chamada printCharacterscom o parâmetro str.

## Etapa 2
Agora é hora de escrever seu primeiro for...oflaço de repetição. Nas lições anteriores, você aprendeu que pode usar um for...oflaço de repetição para iterar sobre valores de um iterável (por exemplo, strings ou arrays).
Aqui está um exemplo de um for...ofloop:
Código de exemplo
for (const num of [1, 2, 3]) {
  // code block to be executed
}

Adicione um for...oflaço com um bloco de código vazio dentro da sua função. Ele deve iterar sobre cada caractere do strargumento.

## Etapa 3
Agora, dentro do loop, registre a charvariável no console.
Etapa 4
Para ver como o loop interno printCharactersse comporta, chame-o com o argumento "hello".

## Etapa 5
Nos próximos passos, você criará uma função que conta quantas vezes uma string aparece em uma matriz de strings.
Para começar, defina uma função vazia getMatchedWordCountcom o nome especificado sentencee os parâmetros definidos matchnessa ordem.

## Etapa 6
Como a getMatchedWordCountfunção precisa retornar uma contagem numérica, você começará configurando uma variável contadora.
Crie uma variável chamada countusando a letpalavra-chave, inicialize-a com o valor 0, e adicione uma returninstrução que retorne a countvariável.

## Etapa 7
Para visualizar a saída da sua getMatchedWordCountfunção em seu estado atual, adicione uma console.loginstrução abaixo dela. Dentro da instrução console.log(), chame a função com o argumento ["I", "really", "really", "really", "like", "to", "code"]para o sentenceparâmetro e "really"para o matchparâmetro.

## Etapa 8
Ótimo, sua função retorna um 0, mas ainda não conta nada.
Para corrigir isso, dentro de getMatchedWordCount, crie um for...ofloop com um bloco de código vazio que itere sobre cada palavra em sentence.

## Etapa 9
Agora, dentro do loop, registre o seguinte template literal no console:Checking "word"against"{match}" | Running count: ${count}

## Etapa 10
Agora é hora de adicionar a lógica ao seu loop que incrementa countadequadamente.
Dentro do laço, use uma instrução condicional para incrementar o valor countde `i` 1se a variável `i` wordfor igual à variável `j` match. Caso contrário, deixe o valor de ` counti` inalterado.

## Etapa 11
Você terminou de trabalhar na sua getMatchedWordCountfunção!
Agora você vai testá-lo com dados diferentes para ver como ele se comporta.
Adicione uma nova console.loginstrução abaixo da existente que faça a chamada getMatchedWordCountcom esses parâmetros:
frase:["Do", "not", "fear", "the", "dandy", "lion"]
correspondência:"dandy"
Parabéns! Você concluiu este workshop.