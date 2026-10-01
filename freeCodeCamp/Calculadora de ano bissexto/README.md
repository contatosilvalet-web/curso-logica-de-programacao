# Crie uma calculadora de ano bissexto
Um ano bissexto é um ano divisível por 4, exceto os anos que são divisíveis por 100e não são divisíveis por 400. Por exemplo, 2000é um ano bissexto, mas 1900não é. Além disso, um ano bissexto tem um dia extra em fevereiro, que é o dia 29 do mês.

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário
- Defina uma função chamada isLeapYearque receba um número como argumento.
- Fora da função, declare uma variável yearque armazene o valor do ano que você deseja verificar.
- Dentro da função, use uma if/ elseinstrução condicional ou um operador ternário para verificar se o ano é bissexto.

### Para verificar se o ano é bissexto, cumpra as seguintes condições
- Se o ano for divisível por 4, então é um ano bissexto.
- A menos que o ano também seja divisível por 100, então não é um ano bissexto.
- A menos que o ano também seja divisível por 400, então é um ano bissexto.
- Se o ano for bissexto, retorne [year] is a leap year.. Caso contrário, retorne [year] is not a leap - year.. Você substituirá [year]pelo parâmetro definido na isLeapYearfunção.
- Você deve chamar a isLeapYearfunção com yearcomo argumento e atribuir o resultado a uma variável chamada result.
- Você deve exibir a resultvariável no console usando console.log().

## Testes
**Esperando :1.** Você deve definir uma função chamada isLeapYear.
**Esperando :2.** A isLeapYearfunção deve ter um parâmetro.
**Esperando :3.** Você deve declarar uma variável yeare atribuir um valor a ela para verificar se é um ano bissexto.
**Esperando :4.** A yearvariável não deve estar vazia.
**Esperando :5.** Com 2024o valor da yearvariável definido, o resultado resultdeve ser2024 is a leap year.
**Esperando :6.** Com 2000o valor da yearvariável definido, o resultado resultdeve ser2000 is a leap year.
**Esperando :7.** Com 1900o valor da yearvariável definido, o resultado resultdeve ser1900 is not a leap year.
**Esperando :8.** Você deve chamar a isLeapYearfunção e passar yearcomo parâmetro.
**Esperando :9.** Você deve declarar uma resultvariável.
**Esperando :10.** Você deve armazenar o resultado da chamada da isLeapYearfunção em uma variável chamada result.
**Esperando :11.** Você deve exibir a saída resultno console usando console.log().