# Crie um mascarador de e-mail

Neste laboratório, você irá mascarar a parte do nome de usuário de um endereço de e-mail com asteriscos. Mascarar é um termo usado para ocultar ou substituir informações confidenciais por asteriscos ou outros caracteres.

Por exemplo, se o endereço de e-mail fosse myEmail@email.com, o endereço de e-mail mascarado seria m*****l@email.com.

---

## Objetivo

Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

---

## Histórias de Usuário

- Crie uma função chamada maskEmailque receba emailcomo argumento.
- Dentro da função, você deve mascarar o texto emaile adicionar o nome do domínio a ele. Lembre-se de que você pode usar métodos como `map` slice, repeat`filter` indexOfou até mesmo ` replacefilter` para te ajudar.
- Fora da função, declare uma variável com o nome emailpara armazenar o endereço de e-mail que você deseja mascarar.
- Chame a maskEmailfunção com a emailvariável e exiba o resultado no console.
   - `maskEmail("apple.pie@example.com")deve retornar "a*******e@example.com"."`
   - `maskEmail("freecodecamp@example.com")deve retornar "f**********p@example.com"."`
   - `maskEmail("info@test.dev")deve retornar "i**o@test.dev"."`
   - `maskEmail("user@domain.org")deve retornar "u**r@domain.org"."`

---

## Testes
| **01** | Esperando :1. Você deve definir uma função chamada maskEmail. |
| **02** | Esperando :2. A maskEmailfunção deve receber uma string emailcomo argumento. |
| **03** | Esperando :3. Fora da função, você deve ter uma emailvariável. |
| **04** | Esperando :4. Você deve atribuir um endereço de e-mail válido à sua emailvariável. |
| **05** | Esperando :5. maskEmail("apple.pie@example.com")deve retornar "a*******e@example.com". |
| **06** | Esperando :6. maskEmail("freecodecamp@example.com")deve retornar "f**********p@example.com". |
| **07** | Esperando :7. maskEmail("info@test.dev")deve retornar "i**o@test.dev". |
| **08** | Esperando :8. maskEmail("user@domain.org")deve retornar "u**r@domain.org". |
| **09** | Esperando :9. Você maskEmaildeve produzir o resultado correto. |
| **10** | Esperando :10. Você deve registrar a saída da chamada maskEmailcom emailo argumento. |
