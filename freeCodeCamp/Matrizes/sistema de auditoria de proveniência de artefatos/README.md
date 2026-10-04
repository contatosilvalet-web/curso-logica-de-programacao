# Workshop: Sistema de Auditoria de Proveniência de Artefatos

Neste workshop, você vai construir um sistema de auditoria de proveniência de artefatos. Você armazenará artefatos de museu em um objeto e escreverá funções para pesquisá-los, etiquetá-los, movê-los entre galerias e resumir sua história.

---

## Etapa 1
Cada artefato é armazenado sob seu ID. Crie um objeto chamado `collection` e adicione uma entrada a ele. Defina a chave como `101` e o valor como um objeto com `title` "Golden Mask" e `category` "Ceremonial".

## Etapa 2
Cada artefato tem uma pessoa responsável por ele.
Adicione uma propriedade `curator` ao artefato armazenado sob a chave `101`, e defina seu valor para um objeto com um `id` de `201` e um `name` de "Earl Sinclair".

## Etapa 3
Cada artefato também registra por onde passou, como é descrito e se está em exibição.
Adicione mais três propriedades ao artefato armazenado em `101`:
* `locations`: uma matriz contendo dois objetos, `{ gallery: "Hall A", year: 2020 }` e `{ gallery: "Hall C", year: 2024 }`
* `tags`: um array contendo as strings `"gold"` e `"egypt"`
* `onDisplay`: o booleano `true`

## Etapa 4
O museu possui mais de um artefato registrado. Adicione um segundo artefato sob `collection` na legenda `102`, seguindo o mesmo formato do primeiro.

Use estes valores:

```javascript
{
  title: "Bronze Tablet",
  category: "Inscription",
  curator: {
    id: 202,
    name: "Robert Sinclair",
  },
  locations: [{ gallery: "Archive Wing", year: 2019 }],
  tags: ["bronze", "writing"],
  onDisplay: false,
}
``` 
## Etapa 5
A auditoria começa com a leitura do que já está registrado. Como cada artefato é armazenado sob seu ID, você pode acessar um colocando esse ID entre colchetes, como collection[101].

Chame console.log() com collection[101].title para registrar o título do primeiro artefato. Em seguida, chame console.log() com collection[101].curator.name para registrar o nome do curador.

## Etapa 6
A equipe consulta artefatos dezenas de vezes por dia, portanto, seu auditor precisa de uma pesquisa reutilizável. Os colchetes também podem receber uma variável, collection[id] retornando assim o artefato ao qual ela se refere.

Crie uma função chamada getArtifactTitle que receba um parâmetro id. Use-a para obter o artefato ( collection[id] ), armazene-o em uma variável chamada artifact e retorne artifact.title.

## Etapa 7
Às vezes, os funcionários solicitam um artefato que o museu não possui. Se nenhum artefato estiver armazenado naquele local id, collection[id] o valor será undefined e a leitura do .title dele gerará um erro.

Atualize a instrução de retorno para usar uma condicional. Retorne artifact.title se um artefato for encontrado e a string "Artifact not found" caso contrário.

## Etapa 8
A recepção precisa saber em qual categoria o artefato 102 está arquivado. Chame getArtifactTitle(102) dentro de console.log() para registrar o título devolvido.

## Etapa 9
Os curadores etiquetam os artefatos para facilitar a busca, e uma etiqueta nunca deve ser adicionada duas vezes. Antes de adicionar uma nova etiqueta, você pode usar o método .includes() para verificar se ela já existe, pois ele retorna true quando um array já contém um valor.

Crie uma função chamada addTag que receba os parâmetros id e tag. Procure o artefato usando collection[id]. Se ele existir e seu array tags ainda não incluir a tag, adicione-a a artifact.tags.

## Etapa 10
Novas pesquisas confirmam que a Máscara Dourada pertenceu à realeza. Adicione a tag "royal" ao artefato com um valor de id de 101. Em seguida, chame console.log() no método collection[101].tags para registrar as tags desse artefato.

## Etapa 11
À medida que os artefatos se movem entre as galerias ao longo do tempo, cada movimento é registrado como uma nova entrada na matriz locations.

Crie uma função moveArtifact com os parâmetros id, gallery, e year. Encontre o artefato usando collection[id]. Se ele existir, adicione um novo objeto com os parâmetros gallery e year ao seu array locations.

## Etapa 12
Mova o artefato com o id 102 para "Hall B" no ano 2026. Em seguida, chame console.log() com collection[102].locations para registrar a matriz de localizações desse artefato.

## Etapa 13
Ao longo do tempo, os artefatos são frequentemente colocados e retirados de exposição.

Crie uma função toggleDisplayStatus que receba um parâmetro id. Procure o artefato usando collection[id]. Se ele existir, defina sua propriedade onDisplay com o valor oposto ao atual.

## Etapa 14
Verifique se a sua função de alternância funciona.

Primeiro, chame-a com console.log() em collection[102].onDisplay.

Em seguida, chame a função com toggleDisplayStatus(102).

Finalmente, chame console.log() novamente com collection[102].onDisplay.

## Etapa 15
À medida que seu museu cresce, a pessoa responsável por um artefato pode mudar.

Crie uma função updateCurator que receba id e name como parâmetros. Procure o artefato usando collection[id]. Se ele existir, atualize a propriedade name do objeto curator para o name fornecido.

## Etapa 16
Atualize o curador do artefato 101 para "Fran Sinclair". Em seguida, chame console.log() com collection[101].curator.name para registrar o nome do curador desse artefato.

## Etapa 17
Por fim, crie um resumo legível para cada artefato. Comece tratando do caso em que um artefato está ausente.

Crie uma função buildSummary que receba um parâmetro id. Use collection[id] para buscar o artefato e armazene-o em uma variável chamada artifact. Se o artefato não for encontrado, retorne a string "Artifact not found".

## Etapa 18
A galeria atual de um artefato é sua localização mais recente. Você pode encontrá-la verificando o último item em sua lista locations.

Declare uma variável currentLocation e atribua um valor a ela com artifact.locations[artifact.locations.length - 1]. Esta expressão utiliza a propriedade length do array para acessar seu último elemento.

## Etapa 19
Em seguida, retorne um modelo literal (Template Literal) que resuma o artefato. Coloque o título na primeira linha, seguido por uma linha para cada um dos seguintes itens: categoria, nome do curador, galeria atual e status de exibição. Use currentLocation.gallery para a galeria.

Por exemplo, se você chamar buildSummary(101), deverá retornar:

Plaintext
Golden Mask
Category: Ceremonial
Curator: Fran Sinclair
Current Gallery: Hall C
On Display: true
Etapa 20
Chame buildSummary(101) dentro de um console.log() para registrar o resumo retornado.

🎉 Parabéns! Você concluiu com sucesso o workshop de Auditor de Proveniência de Artefatos.