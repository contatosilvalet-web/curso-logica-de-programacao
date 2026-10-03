# Tradutor de Pontuação de Golfe

No golfe, cada buraco tem um `par`, que representa a média de tacadas (`strokes`) que um jogador precisa fazer para embocar a bola e completar a jogada. Dependendo de quão acima ou abaixo desse valor `par` você estiver, o buraco recebe um apelido diferente.

Neste laboratório, você escreverá uma função que converte o valor de `par` e de `strokes` em seus respectivos apelidos.

**Objetivo:** Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

---

## 📋 Histórias de Usuário

- [ ] Você deve criar uma função chamada `golfScore`.
- [ ] `golfScore` deve receber dois argumentos numéricos, que são o valor `par` e a quantidade de golpes (`strokes`) realizados.
- [ ] `golfScore` deve retornar uma string.
- [ ] `golfScore` deve retornar `"Hole-in-one!"` se `strokes` for 1.
- [ ] `golfScore` deve retornar `"Eagle"` se `strokes` for menor ou igual a `par` menos 2.
- [ ] `golfScore` deve retornar `"Birdie"` se `strokes` for igual a `par` menos 1.
- [ ] `golfScore` deve retornar `"Par"` se `strokes` for igual a `par`.
- [ ] `golfScore` deve retornar `"Bogey"` se `strokes` for igual a `par` mais 1.
- [ ] `golfScore` deve retornar `"Double Bogey"` se `strokes` for igual a `par` mais 2.
- [ ] `golfScore` deve retornar `"Go Home!"` se `strokes` for maior ou igual a `par` mais 3.

---

## 🧪 Testes

- [ ] **1.** Você deve criar uma função chamada `golfScore`.
- [ ] **2.** `golfScore` deve receber dois parâmetros.
- [ ] **3.** `golfScore` deve retornar uma string.
- [ ] **4.** `golfScore(1, 1)` deve retornar a string `"Hole-in-one!"`.
- [ ] **5.** `golfScore(3, 1)` deve retornar a string `"Hole-in-one!"`.
- [ ] **6.** `golfScore(4, 1)` deve retornar a string `"Hole-in-one!"`.
- [ ] **7.** `golfScore(5, 1)` deve retornar a string `"Hole-in-one!"`.
- [ ] **8.** `golfScore(4, 2)` deve retornar a string `"Eagle"`.
- [ ] **9.** `golfScore(5, 2)` deve retornar a string `"Eagle"`.
- [ ] **10.** `golfScore(3, 2)` deve retornar a string `"Birdie"`.
- [ ] **11.** `golfScore(4, 3)` deve retornar a string `"Birdie"`.
- [ ] **12.** `golfScore(5, 4)` deve retornar a string `"Birdie"`.
- [ ] **13.** `golfScore(3, 3)` deve retornar a string `"Par"`.
- [ ] **14.** `golfScore(4, 4)` deve retornar a string `"Par"`.
- [ ] **15.** `golfScore(5, 5)` deve retornar a string `"Par"`.
- [ ] **16.** `golfScore(3, 4)` deve retornar a string `"Bogey"`.
- [ ] **17.** `golfScore(4, 5)` deve retornar a string `"Bogey"`.
- [ ] **18.** `golfScore(5, 6)` deve retornar a string `"Bogey"`.
- [ ] **19.** `golfScore(3, 5)` deve retornar a string `"Double Bogey"`.
- [ ] **20.** `golfScore(4, 6)` deve retornar a string `"Double Bogey"`.
- [ ] **21.** `golfScore(5, 7)` deve retornar a string `"Double Bogey"`.
- [ ] **22.** `golfScore(3, 7)` deve retornar a string `"Go Home!"`.
- [ ] **23.** `golfScore(4, 8)` deve retornar a string `"Go Home!"`.
- [ ] **24.** `golfScore(5, 9)` deve retornar a string `"Go Home!"`.