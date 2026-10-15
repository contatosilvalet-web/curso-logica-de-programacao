# Crie um detector de letras desaparecidas

## Objetivo
Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

## Histórias de Usuário:

Você deve ter uma função chamada fearNotLetter.
A fearNotLetterfunção deve aceitar um argumento: uma string representando um intervalo de letras em ordem alfabética, podendo faltar uma única letra.
A função deve encontrar a letra que falta no intervalo de letras fornecido e retorná-la.
Se todas as letras estiverem presentes no intervalo, a função deverá retornar undefined.

## Testes:
Esperando :1. Você deve ter uma fearNotLetterfunção.
Esperando :2. fearNotLetter("abce")deve retornar a string d.
Esperando :3. fearNotLetter("abcdefghjklmno")deve retornar a string i.
Esperando :4. fearNotLetter("stvwx")deve retornar a string u.
Esperando :5. fearNotLetter("bcdf")deve retornar a string e.
Esperando :6. fearNotLetter("abcdefghijklmnopqrstuvwxyz")deve retornar undefined.