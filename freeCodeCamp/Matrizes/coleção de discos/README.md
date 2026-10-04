# Construa uma coleção de discos
Você está criando uma função que auxilia na manutenção de uma coleção de álbuns musicais. A coleção é organizada como um objeto que contém múltiplos álbuns, que também são objetos. Cada álbum é representado na coleção por um idnome de propriedade único. Dentro de cada objeto álbum, existem várias propriedades que descrevem informações sobre o álbum. Nem todos os álbuns possuem informações completas.
A updateRecordsfunção recebe 4 argumentos representados pelos seguintes parâmetros:
records- um objeto contendo vários álbuns individuais
id- um número que representa um álbum específico no recordsobjeto
prop- uma string representando o nome da propriedade do álbum a ser atualizada
value- uma string contendo as informações usadas para atualizar a propriedade do álbum

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário
Sua função deve sempre retornar o recordsobjeto inteiro.
Se valuefor uma string vazia, exclua a proppropriedade especificada do álbum.
Se propnão tracksfor valueuma string vazia, atribua o valor valueao desse álbum prop.
Se prop`is` trackse value`is` não forem strings vazias, mas o álbum não tiver uma trackspropriedade `is`, crie um array vazio e adicione elementos valuea ele.
Se `prop` for trackse valuenão for uma string vazia, adicione-a valueao final do tracksarray existente do álbum.

## Observação
Uma cópia do recordCollectionobjeto é usada para os testes. Sua função não deve se referir diretamente ao recordCollectionobjeto, apenas ao parâmetro da função.

## Testes:
Aguardando :
1. Você deve ter uma updateRecordsfunção.
Aguardando :
2. Depois updateRecords(recordCollection, 5439, "artist", "ABBA"), artistdeve ser a stringABBA
Aguardando :
3. Depois disso updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracksa string deve ser Take a Chance on Meo último e único elemento.
Aguardando :
4. Depois updateRecords(recordCollection, 2548, "artist", ""), artistnão deve ser definido.
Aguardando :
5. Depois disso updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracksa string deve ser Addicted to Loveo último elemento.
Aguardando :
6. Depois disso updateRecords(recordCollection, 2468, "tracks", "Free"), tracksa string deve ser 1999o primeiro elemento.
Aguardando :
7. Depois updateRecords(recordCollection, 2548, "tracks", ""), tracksnão deve ser definido.
Aguardando :
8. Depois updateRecords(recordCollection, 1245, "albumTitle", "Riptide"), albumTitledeve ser a stringRiptide