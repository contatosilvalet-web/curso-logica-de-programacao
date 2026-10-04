# Criar um Validador de Manifesto de Carga

Neste laboratório, você usará JavaScript para normalizar e validar manifestos de carga. Um manifesto de carga é um documento que geralmente lista as mercadorias que estão sendo transportadas (por exemplo, por navio ou trem) e inclui detalhes sobre essas mercadorias.

Cada manifesto de carga será representado como um objeto com as seguintes propriedades:
* `containerId`: um número inteiro positivo que identifica o contêiner de carga associado.
* `destination`: uma sequência de caracteres não vazia (após a remoção de espaços em branco) que indica o destino da carga.
* `weight`: um número positivo que representa o peso da carga.
* `unit`: uma sequência de caracteres que descreve a unidade da propriedade `weight` da carga (seja `"kg"` em quilogramas ou `"lb"` em libras).
* `hazmat`: um valor booleano que indica se o manuseio de materiais perigosos é necessário.

**Exemplo de objeto de manifesto de carga:**
```javascript
{
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: 831,
  unit: "lb",
  hazmat: false
}