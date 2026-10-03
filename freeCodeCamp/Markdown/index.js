/* Crie um conversor de Markdown para HTML
Crie um aplicativo que seja funcionalmente semelhante a este projeto de exemplo . Tente não copiar o projeto de exemplo; dê a ele seu próprio estilo pessoal.

Markdown é uma linguagem de marcação usada para adicionar elementos de formatação a documentos de texto simples. Para este laboratório, todo o HTML e CSS já foram fornecidos. Você usará JavaScript para completar o aplicativo Conversor de Markdown para HTML, de forma que ele possa lidar com a conversão de estruturas básicas de Markdown em elementos HTML.

Observação: O resultado final não será um conversor completo de Markdown para HTML, mas você pode adicionar funcionalidades extras, se desejar.

Objetivo: Cumprir as histórias de usuário abaixo e passar em todos os testes para concluir o laboratório.

Histórias de Usuário:

Você deve ter uma função chamada convertMarkdownque não receba parâmetros.
A convertMarkdownfunção deve usar expressões regulares para converter a entrada Markdown #markdown-inputem HTML e retornar uma string contendo o código HTML.
A convertMarkdownfunção deve converter cabeçalhos de nível um, dois e três nos elementos correspondentes <header> h1, h2<header> e <header> h3. Um cabeçalho em Markdown é indicado por tantos #caracteres quanto o seu nível, seguido por um espaço e o texto do cabeçalho. #Os caracteres <header> devem ser colocados no início da linha: pode haver espaços, mas nenhum outro caractere antes deles.
A convertMarkdownfunção deve converter o texto em negrito em strongelementos. O texto em negrito em Markdown é indicado por um par de asteriscos duplos ou um par de sublinhados duplos envolvendo o texto.
A convertMarkdownfunção deve converter texto em itálico em emelementos. O texto em itálico no Markdown é indicado por um par de asteriscos ou um par de sublinhados que envolvem o texto.
A convertMarkdownfunção deve converter imagens em imgelementos. Uma imagem em Markdown é indicada por `<img>` ![alt-text](image-source), onde `<img>` alt-texté o valor do altatributo `i` e ` image-sourcei` é o valor do srcatributo `href`.
A convertMarkdownfunção deve converter links em elementos de âncora. Um link em Markdown é indicado por `<a>` [link text](URL), onde link text`<a>` é o texto a ser incluído nas tags de âncora e `<a>` URLé o valor do hrefatributo `a`.
A convertMarkdownfunção deve converter aspas em blockquoteelementos. Uma citação em Markdown é indicada por um caractere `<quote>` >seguido de um espaço e o texto da citação. O >caractere `<quote>` deve ser colocado no início da linha: pode haver espaços, mas nenhum outro caractere antes dele.
Ao inserir texto dentro de #markdown-input, o código HTML bruto retornado por convertMarkdowndeve ser exibido dentro de #html-output.
Ao inserir texto dentro de #markdown-input, o código HTML retornado por convertMarkdowndeve ser renderizado dentro de #preview.
Observação: você deve trabalhar com o inputevento para este projeto.

Segue uma tabela contendo todos os códigos Markdown que convertMarkdowno programa deve ser capaz de processar e o HTML esperado após a conversão:

Markdown	HTML
# heading 1	<h1>heading 1</h1>
## heading 2	<h2>heading 2</h2>
### heading 3	<h3>heading 3</h3>
**bold text**ou__bold text__	<strong>bold text</strong>
*italic text*ou_italic text_	<em>italic text</em>
![alt-text](image-source)	<img alt="alt-text" src="image-source">
[link text](URL)	<a href="URL">link text</a>
> quote	<blockquote>quote</blockquote>
Observação: Certifique-se de incluir o link para o seu arquivo JavaScript no seu HTML.

Testes:
Esperando :1. Você deve ter uma função chamada convertMarkdown.
Esperando :2. Quando o valor de #markdown-inputfor # title 1, convertMarkdown()deve retornar <h1>title 1</h1>.
Esperando :3. Quando o valor de #markdown-inputfor # title 1, <h1>title 1</h1>deve ser exibido dentro de #html-output.
Esperando :4. Quando o valor de #markdown-inputfor # title 1, um h1elemento com o texto de title 1deve ser anexado como filho de #preview.
Esperando :5. Quando o valor de #markdown-inputfor some text # title 1, convertMarkdown()não deve ser convertido # title 1em um h1elemento.
Esperando :6. Quando o valor de #markdown-inputfor # title 1seguido por # alternate titleem uma nova linha, convertMarkdown()deve retornar <h1>title 1</h1><h1>alternate title</h1>.
Esperando :7. Quando o valor de #markdown-inputfor ## title 2, convertMarkdown()deve retornar <h2>title 2</h2>.
Esperando :8. Quando o valor de #markdown-inputfor ## title 2, <h2>title 2</h2>deve ser exibido dentro de #html-output.
Esperando :9. Quando o valor de #markdown-inputfor ## title 2, um h2elemento com o texto de title 2deve ser anexado como filho de #preview.
Esperando :10. Quando o valor de #markdown-inputfor some text ## title 2, convertMarkdown()não deve ser convertido ## title 2em um h2elemento.
Esperando :11. Quando o valor de #markdown-inputfor ## title 2seguido por ## title 2 altem uma nova linha, convertMarkdown()deve retornar <h2>title 2</h2><h2>title 2 alt</h2>.
Esperando :12. Quando o valor de #markdown-inputfor ### title 3, convertMarkdown()deve retornar <h3>title 3</h3>.
Esperando :13. Quando o valor de #markdown-inputfor ### title 3, <h3>title 3</h3>deve ser exibido dentro de #html-output.
Esperando :14. Quando o valor de #markdown-inputfor ### title 3, um h3elemento com o texto de title 3deve ser anexado como filho de #preview.
Esperando :15. Quando o valor de #markdown-inputfor some text ### title 3, convertMarkdown()não deve ser convertido ### title 3em um h3elemento.
Esperando :16. Quando o valor de #markdown-inputfor ### title 3seguido por ### third titleem uma nova linha, convertMarkdown()deve retornar <h3>title 3</h3><h3>third title</h3>.
Esperando :17. Quando o valor de #markdown-inputfor **this is bold**, convertMarkdown()deve retornar <strong>this is bold</strong>.
Esperando :18. Quando o valor de #markdown-inputfor **this is bold**, <strong>this is bold</strong>deve ser exibido dentro de #html-output.
Esperando :19. Quando o valor de #markdown-inputfor **this is bold**, um strongelemento com o texto de this is bolddeve ser anexado como filho de #preview.
Esperando :20. Quando o valor de #markdown-inputfor **this is bold**seguido por **this is also bold**em uma nova linha, convertMarkdown()deve retornar <strong>this is bold</strong><strong>this is also bold</strong>.
Esperando :21. Quando o valor de #markdown-inputfor __this is bold__, <strong>this is bold</strong>deve ser exibido dentro de #html-output.
Esperando :22. Quando o valor de #markdown-inputfor __this is bold__, um strongelemento com o texto de this is bolddeve ser anexado como filho de #preview.
Esperando :23. Quando o valor de #markdown-inputfor __this is bold__seguido por __this is also bold__em uma nova linha, convertMarkdown()deve retornar <strong>this is bold</strong><strong>this is also bold</strong>.
Esperando :24. Quando o valor de #markdown-inputfor *this is italic*, convertMarkdown()deve retornar <em>this is italic</em>.
Esperando :25. Quando o valor de #markdown-inputfor *this is italic*, <em>this is italic</em>deve ser exibido dentro de #html-output.
Esperando :26. Quando o valor de #markdown-inputfor *this is italic*, um emelemento com o texto de this is italicdeve ser anexado como filho de #preview.
Esperando :27. Quando o valor de #markdown-inputfor *this is italic*seguido por *this is also italic*em uma nova linha, convertMarkdown()deve retornar <em>this is italic</em><em>this is also italic</em>.
Esperando :28. Quando o valor de #markdown-inputfor _this is italic_, convertMarkdown()deve retornar <em>this is italic</em>.
Esperando :29. Quando o valor de #markdown-inputfor _this is italic_, <em>this is italic</em>deve ser exibido dentro de #html-output.
Esperando :30. Quando o valor de #markdown-inputfor _this is italic_, um emelemento com o texto de this is italicdeve ser anexado como filho de #preview.
Esperando :31. Quando o valor de #markdown-inputfor _this is italic_seguido por _this is also italic_em uma nova linha, convertMarkdown()deve retornar <em>this is italic</em><em>this is also italic</em>.
Esperando :32. Quando o valor de #markdown-inputfor # **title 1**ou # __title 1__, convertMarkdown()deve retornar <h1><strong>title 1</strong></h1>.
Esperando :33. Quando o valor de #markdown-inputfor # **title 1**ou # __title 1__, <h1><strong>title 1</strong></h1>deve ser exibido dentro de #html-output.
Esperando :34. Quando o valor de #markdown-inputfor # **title 1**ou # __title 1__, você define o HTML interno de #previewpara <h1><strong>title 1</strong></h1>.
Esperando :35. Quando o valor de #markdown-inputfor ![alt-text](image-source), convertMarkdown()deve retornar <img alt="alt-text" src="image-source">.
Esperando :36. Quando o valor de #markdown-inputfor ![alt-text](image-source), <img alt="alt-text" src="image-source">deve ser exibido dentro de #html-output.
Esperando :37. Quando o valor de #markdown-inputfor ![alt-text](image-source), <img alt="alt-text" src="image-source">deve ser anexado como filho de #preview.
Esperando :38. Quando o valor de #markdown-inputfor ![alt-text](image-source)seguido por ![alt-text-2](image-source-2)em uma nova linha, convertMarkdown()deve retornar <img alt="alt-text" src="image-source"><img alt="alt-text-2" src="image-source-2">.
Esperando :39. Quando o valor de #markdown-inputfor [link text](URL), convertMarkdown()deve retornar <a href="URL">link text</a>.
Esperando :40. Quando o valor de #markdown-inputfor [link text](URL), <a href="URL">link text</a>deve ser exibido dentro de #html-output.
Esperando :41. Quando o valor de #markdown-inputfor [link text](URL), <a href="URL">link text</a>deve ser anexado como filho de #preview.
Esperando :42. Quando o valor de #markdown-inputfor [link text](URL)seguido por [link text 2](URL2)em uma nova linha, convertMarkdown()deve retornar <a href="URL">link text</a><a href="URL2">link text 2</a>.
Esperando :43. Quando o valor de #markdown-inputfor > this is a quote, convertMarkdown()deve retornar <blockquote>this is a quote</blockquote>.
Esperando :44. Quando o valor de #markdown-inputfor > this is a quote, <blockquote>this is a quote</blockquote>deve ser exibido dentro de #html-output.
Esperando :45. Quando o valor de #markdown-inputfor > this is a quote, <blockquote>this is a quote</blockquote>deve ser anexado como filho de #preview.
Esperando :46. ​​Quando o valor de #markdown-inputfor > this is a quoteseguido por > this is another quoteem uma nova linha, convertMarkdown()deve retornar <blockquote>this is a quote</blockquote><blockquote>this is another quote</blockquote>.
Esperando :47. Quando o valor de #markdown-inputfor some text > not a quote anymore, convertMarkdown()não deve ser convertido > not a quote anymoreem um blockquoteelemento.
Esperando :48. Quando o valor de #markdown-inputfor > **this is a *quote***, convertMarkdown()deve retornar <blockquote><strong>this is a <em>quote</em></strong></blockquote>.
Esperando :49. Quando o valor de #markdown-inputfor > **this is a *quote***, <blockquote><strong>this is a <em>quote</em></strong></blockquote>deve ser exibido dentro de #html-output.
Esperando :50. Quando o valor de #markdown-inputfor > **this is a *quote***, você deve definir o HTML interno de #previewpara <blockquote><strong>this is a <em>quote</em></strong></blockquote>.
Esperando :script51. Seu HTML deve conter apenas um elemento. */ 