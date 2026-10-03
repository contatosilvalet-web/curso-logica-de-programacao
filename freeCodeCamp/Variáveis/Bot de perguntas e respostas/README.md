# Desafio: Bot de Curiosidades de Programação em JavaScript

## Objetivo
Desenvolver um script em JavaScript que simule um guia interativo de curiosidades sobre programação, aplicando conceitos de declaração de variáveis (`const` e `let`), concatenação de strings e manipulação de fluxo de saída via console para cumprir todos os requisitos do laboratório.

---

## Histórias de Usuário

- [x] Exibir a mensagem de boas-vindas: `"Hello! I'm your coding fun fact guide!"` no console.
- [x] Declarar as variáveis `botName`, `botLocation` e `favoriteLanguage` contendo, respectivamente, o nome do bot, sua localização/origem e sua linguagem de programação favorita.
- [x] Exibir no console a mensagem de apresentação: `"My name is <botName> and I live on <botLocation>."`.
- [x] Exibir no console a linguagem favorita: `"My favorite programming language is <favoriteLanguage>."`.
- [x] Declarar com `let` a variável `codingFact` contendo uma curiosidade que concatene a variável `favoriteLanguage`.
- [x] Registrar o valor de `codingFact` no console.
- [x] Reatribuir a variável `codingFact` com uma nova curiosidade contendo `favoriteLanguage` e exibi-la no console.
- [x] Reatribuir a variável `codingFact` pela terceira vez com outra curiosidade contendo `favoriteLanguage` e exibi-la no console.
- [x] Exibir a mensagem de despedida: `"It was fun sharing these facts with you. Goodbye! - <botName> from <botLocation>."`.

---

## Critérios de Aceitação e Testes

1. Exibir `"Hello! I'm your coding fun fact guide!"` no console.
2. Declarar a variável `botName` (respeitando o padrão *camelCase*).
3. A variável `botName` deve ser do tipo `string`.
4. Declarar a variável `botLocation`.
5. A variável `botLocation` deve ser do tipo `string`.
6. Declarar a variável `favoriteLanguage`.
7. A variável `favoriteLanguage` deve ser do tipo `string`.
8. Enviar ao console `"My name is <botName> and I live on <botLocation>."` com as variáveis concatenadas.
9. Enviar ao console `"My favorite programming language is <favoriteLanguage>."` com a variável concatenada.
10. Declarar a variável `codingFact` utilizando explicitamente a palavra-chave `let`.
11. Atribuir a `codingFact` um valor que concatene a variável `favoriteLanguage`.
12. Registrar `codingFact` no console.
13. Reatribuir `codingFact` com um novo valor contendo `favoriteLanguage` e registrá-lo no console.
14. Reatribuir `codingFact` pela terceira vez com novo conteúdo contendo `favoriteLanguage` e registrá-lo no console.
15. Enviar ao console `"It was fun sharing these facts with you. Goodbye! - <botName> from <botLocation>."`.