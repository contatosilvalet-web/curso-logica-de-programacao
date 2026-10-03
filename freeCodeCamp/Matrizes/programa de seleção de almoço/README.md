# Programa de Seleção de Almoço

Neste laboratório, você criará um programa que auxilia no gerenciamento de opções de almoço. Você trabalhará com um conjunto de opções de almoço, adicionando e removendo itens do conjunto e selecionando aleatoriamente uma opção de almoço.

**Objetivo:** Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

---

## 📋 Histórias de Usuário

- [ ] Você deve criar uma variável `lunches` e atribuir a ela um array vazio que será usado para armazenar os itens do almoço.
- [ ] Você deve criar uma função `addLunchToEnd` que receba um array como primeiro argumento e uma string como segundo argumento. A função deve:
  - Adicionar a string ao final da matriz.
  - Exibir a string `[Lunch Item] added to the end of the lunch menu.` no console, onde `[Lunch Item]` é a string passada para a função.
  - Retornar o array atualizado.
- [ ] Você deve criar uma função `addLunchToStart` que receba um array como primeiro argumento e uma string como segundo argumento. A função deve:
  - Adicionar a string ao início da matriz.
  - Exibir a string `[Lunch Item] added to the start of the lunch menu.` no console, onde `[Lunch Item]` é a string passada para a função.
  - Retornar o array atualizado.
- [ ] Você deve criar uma função `removeLastLunch` que receba um array como argumento. A função deve:
  - Remover o último elemento da matriz.
  - Se a remoção for bem-sucedida, registrar a string `[Lunch Item] removed from the end of the lunch menu.` no console, indicando onde `[Lunch Item]` é o elemento removido da matriz.
  - Se a matriz estiver vazia, registrar a string `"No lunches to remove."` no console.
  - Retornar o array atualizado.
- [ ] Você deve criar uma função `removeFirstLunch` que receba um array como argumento. A função deve:
  - Remover o primeiro elemento da matriz.
  - Se a remoção for bem-sucedida, registrar a string `[Lunch Item] removed from the start of the lunch menu.` no console, indicando onde `[Lunch Item]` é o elemento removido da matriz.
  - Se a matriz estiver vazia, registrar a string `"No lunches to remove."` no console.
  - Retornar o array atualizado.
- [ ] Você deve criar uma função `getRandomLunch` que receba um array como argumento. A função deve:
  - Selecionar um elemento aleatório da matriz.
  - Se a operação for bem-sucedida, registrar a string `Randomly selected lunch: [Lunch Item]` no console, onde `[Lunch Item]` é um elemento aleatório da matriz.
  - Se a matriz estiver vazia, registrar a string `"No lunches available."` no console.
- [ ] Você deve criar uma função `showLunchMenu` que receba um array como argumento e:
  - Se houver elementos na matriz, a string exibida é `Menu items: [Lunch Item], [Lunch Item]...` no console, onde cada elemento `[Lunch item]` representa um dos elementos da matriz, em ordem.
  - Se a matriz estiver vazia, registrar a string `"The menu is empty."` no console.

---

## 🧪 Testes

- [ ] **1.** Você deve declarar uma variável `lunches` e atribuir a ela um array vazio para armazenar os itens do almoço.
- [ ] **2.** Você deve definir uma função `addLunchToEnd`.
- [ ] **3.** A função `addLunchToEnd` deve ter dois parâmetros.
- [ ] **4.** `addLunchToEnd(lunches, "Tacos")` deve registrar a string `"Tacos added to the end of the lunch menu."` no console.
- [ ] **5.** `addLunchToEnd(["Pizza", "Tacos"], "Burger")` deve retornar `["Pizza", "Tacos", "Burger"]`.
- [ ] **6.** Você deve definir uma função `addLunchToStart`.
- [ ] **7.** A função `addLunchToStart` deve ter dois parâmetros.
- [ ] **8.** `addLunchToStart(lunches, "Sushi")` deve registrar a string `"Sushi added to the start of the lunch menu."` no console.
- [ ] **9.** `addLunchToStart(["Burger", "Sushi"], "Pizza")` deve retornar `["Pizza", "Burger", "Sushi"]`.
- [ ] **10.** Você deve definir uma função `removeLastLunch`.
- [ ] **11.** A função `removeLastLunch` deve ter um parâmetro.
- [ ] **12.** Quando o array de entrada estiver vazio, a função `removeLastLunch` deve registrar a string `"No lunches to remove."` no console.
- [ ] **13.** `removeLastLunch(["Stew", "Soup", "Toast"])` deve registrar a string `"Toast removed from the end of the lunch menu."` no console.
- [ ] **14.** `removeLastLunch(["Sushi", "Pizza", "Noodles"])` deve retornar `["Sushi", "Pizza"]`.
- [ ] **15.** Você deve definir uma função `removeFirstLunch`.
- [ ] **16.** A função `removeFirstLunch` deve ter um único parâmetro.
- [ ] **17.** Quando o array de entrada estiver vazio, a função `removeFirstLunch` deve registrar a string `"No lunches to remove."` no console.
- [ ] **18.** `removeFirstLunch(["Salad", "Eggs", "Cheese"])` deve registrar a string `"Salad removed from the start of the lunch menu."` no console.
- [ ] **19.** `removeFirstLunch(["Sushi", "Pizza", "Burger"])` deve retornar `["Pizza", "Burger"]`.
- [ ] **20.** `addLunchToEnd`, `addLunchToStart`, `removeLastLunch`, e `removeFirstLunch` devem retornar o mesmo array passado como argumento após atualizá-lo.
- [ ] **21.** Você deve definir uma função `getRandomLunch`.
- [ ] **22.** A função `getRandomLunch` deve ter um único parâmetro.
- [ ] **23.** Quando o array de entrada estiver vazio, a função `getRandomLunch` deve registrar a string `"No lunches available."` no console.
- [ ] **24.** Quando a matriz de entrada não estiver vazia, a função `getRandomLunch` deverá registrar uma string no formato `Randomly selected lunch: [Lunch Item]` no console.
- [ ] **25.** A função `getRandomLunch` não deve modificar o array que lhe foi passado como argumento.
- [ ] **26.** Você deve definir uma função `showLunchMenu`.
- [ ] **27.** A função `showLunchMenu` deve ter um único parâmetro.
- [ ] **28.** Quando o array de entrada estiver vazio, a função `showLunchMenu` deve registrar a string `"The menu is empty."` no console.
- [ ] **29.** `showLunchMenu(["Greens", "Corns", "Beans"])` deve registrar `"Menu items: Greens, Corns, Beans"` no console.
- [ ] **30.** `showLunchMenu(["Pizza", "Burger", "Fries", "Salad"])` deve registrar `"Menu items: Pizza, Burger, Fries, Salad"` no console.