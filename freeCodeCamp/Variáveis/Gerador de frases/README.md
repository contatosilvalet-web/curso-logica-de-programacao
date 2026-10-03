# Desafio: Gerador de Frases (Mad Libs) em JavaScript

## Objetivo
Criar duas histórias distintas utilizando um mesmo modelo de frase (*template*), manipulando variáveis declaradas com `let`, reatribuição de valores de texto (*strings*) e concatenação/interpolação para exibição no console, atendendo a todos os critérios de teste do laboratório.

---

## Histórias de Usuário

- [x] Declarar com `let` as variáveis: `adjective`, `noun`, `verb`, `place`, `adjective2` e `noun2`.
- [x] Atribuir valores de texto (*strings*) à escolha para cada uma das variáveis acima.
- [x] Declarar a variável `firstStory`.
- [x] Montar a primeira história utilizando o modelo:  
  `"Once upon a time, there was a(n) [adjective] [noun] who loved to eat [noun2]. The [noun] lived in a [place] and had [adjective2] nostrils that blew fire when it was [verb]."` e atribuir à variável `firstStory`.
- [x] Exibir a primeira história no console no formato: `"First story: [firstStory]"`.
- [x] Reatribuir novos valores a todas as variáveis (`adjective`, `noun`, `verb`, `place`, `adjective2` e `noun2`).
- [x] Declarar a variável `secondStory`.
- [x] Montar a segunda história usando o mesmo modelo, atribuindo o resultado a `secondStory`.
- [x] Exibir a segunda história no console no formato: `"Second story: [secondStory]"`.
- [x] Garantir que `firstStory` e `secondStory` possuam conteúdos diferentes.

---

## Critérios de Aceitação e Testes

1. Declarar a variável `adjective`.
2. Declarar a variável `noun`.
3. Declarar a variável `verb`.
4. Declarar a variável `place`.
5. Declarar a variável `adjective2`.
6. Declarar a variável `noun2`.
7. Atribuir uma string a `adjective`.
8. Atribuir uma string a `noun`.
9. Atribuir uma string a `verb`.
10. Atribuir uma string a `place`.
11. Atribuir uma string a `adjective2`.
12. Atribuir uma string a `noun2`.
13. Declarar a variável `firstStory`.
14. Usar o formato de história correto para a primeira história (atenção rigorosa a espaços e pontuações).
15. Montar a primeira história utilizando as variáveis na ordem correta.
16. Registrar no console: `"First story: " + firstStory`.
17. Declarar a variável `secondStory`.
18. Reatribuir a variável `adjective` para a segunda história.
19. Reatribuir a variável `noun` para a segunda história.
20. Reatribuir a variável `verb` para a segunda história.
21. Reatribuir a variável `place` para a segunda história.
22. Reatribuir a variável `adjective2` para a segunda história.
23. Reatribuir a variável `noun2` para a segunda história.
24. Usar o formato de história correto para a segunda história.
25. Montar a segunda história utilizando as variáveis na ordem correta.
26. Registrar no console: `"Second story: " + secondStory`.
27. As variáveis `firstStory` e `secondStory` não devem possuir valores iguais.