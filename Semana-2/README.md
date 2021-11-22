# 📕 **Conceito HTML**

HTML ou *HyperText Markup Language* **(Linguagem de Marcação de Hipertexto),** é basicamente a estrutura fundamental de uma página, pode ser lido por qualquer navegador da web.

A organização do código em HTML se da por meio de tags, as tags indicam onde inicia e acaba um elemento, as tags podem ser de dois tipos:

Tags de abertura: <nome_da_tag>

Tags de fechamento: </nome_da_tag>

Algumas tags tem abertura e fechamento, outras apenas abertura. 

# ⚠️Principais tags no HTML

*<!DOCTYPE>: D*eve ser sempre a primeira a aparecer em uma página HTML para indicar ao browser qual versão da linguagem usada.

`<html></html>`: é a tag que delimita o documento. Por isso todas as demais tags da página devem estar nesse espaço.
`<head></head>`: Head é literamente a cabeça do documento, o que fica dentro dessa tag não fica visível na pagina.

`<meta>`: Representa vários tipos de metadados.São informações que descrevem o conteúdo do seu arquivo

`<title></title>`: Corresponde a tag de titulo, o título que fica visível na aba do navegador.

`<body></body>`: Essa tag é o corpo do documento, nele fica a estrutura da página, como links, imagens, títulos e subtítulos, etc.

`<h1></h1>`: As tags h, são utilizadas para textos e títulos o numero que acompanha é referente ao tamanho, sendo que o maior é 1 e o menor é o 6.

`<p></p>`: Essa tag é utilizada para parágrafos.

`<br>`: É utilizada como quebra de linha

<! - - > <! - - > : Tag utilizada para fazer comentários.

`<img></img>`: Tag utilizada para colocar uma imagem na página.

`<a></a>`: A tag a é  utilizada para links.

`<form></form>`: A tag form é utilizada para criação de formulários.

`<input>`:  A tag input é utilizada para inserir informações em uma caixa de texto.

`<button></button>`: Tag utilizada para inserir botões

`<div></div>`: é um elemento de nível de bloco.

`<span></span>`: é um elemento em linha.

# :monocle_face: Outras tags

- Tabelas no HTML: Para fazer tabelas no HTML são utilizadas 3 tags:
    - `<table></table>`: Delimita a tabela
    - `<td></td>`: Indica as linhas
    - `<tr></tr>`: Indica as colunas
    
    
- Listas no HTML: Para fazer listas no HTML são utilizadas as tags:
    - `<ol></ol>`: Caso queira criar listas ordenadas.
    - `<ul></ul>`: Listas não ordenadas.
    - `<li></li>`: São itens da lista, e são usados dentro do <ol></ol> ou do <ul></ul>
- Formatação de texto:
    - `<b></b> e <strong></strong>`: Texto em negrito.
    - `<i></i> e <em></em>`: Texto em itálico.
    - `<sub></sub> e <sup></sup>`: para sobrescrito e subscrito, respectivamente.
    - `<mark></mark>`: para texto destacado.
    - `<ins></ins> e <del></del>`: para indicar trechos que foram incluídos ou removidos.
    - `<small></small>`:  para textos menores que o padrão.

Há também tags paga inserção de audio, vídeo: <audio></audio> e <video></video>

# 📘 **Conceito CSS**

Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>

# 🖊️ Sintaxe

```html
p{
		color: blue;  //propriedade: valor;
		text-align: center;
}
```

Nesse exemplo p é o seletor, ele aponta para o elemento HTML se deseja estilizar.

Entre chaves '{ }' está o bloco de declaração que contém uma ou mais declarações nome da propriedade e valor, separadas por ponto e vírgula. 

Seletores de: ID, CLASS, * e agrupamento.

- ID : Se refere a um elemento. É exclusivo, não podendo haver mais de um id com o mesmo nome. Para utilizar um ID usa-se #

No CSS:

```css
 #fundo{
		/*bloco de declarações*/
}       
```

No HTML:

```html
<p id="fundo">Paragrafo estilizado.</p>
```

              

- Class: As classes identificam um grupo de elementos. Através delas, pode-se atribuir a estilização de vários elementos de uma vez só. Para utilizar uma classe usa-se .

No CSS:

```css
.fundo{
	/*bloco de declarações*/
}
```

No HTML:

```html
<p class="fundo">Paragrafo estilizado.</p>
```

- * : Seletor universal, afeta todos os elementos HTML da página, é utilizado quando todos os elementos terão o mesmo estilo. Para utilizar esse seletor usa-se *

No CSS:

```css
*{
	/*bloco de declarações*/
}
```

- Agrupamento: Quando alguns elementos tem a mesma estilização. Para utilizar usa-se o nome de cada seletor separado por virgula.

No CSS:

```css
h1, p, span{
	/*bloco de declarações*/
} 
```

Existem três maneiras de inserir uma folha de estilo:

- CSS Externo: uma folha de estilo externa, você pode alterar a aparência de um site inteiro alterando apenas um arquivo.

arquivo.css

```css
body {
  background-color: lightblue;
}

h1 {
  color: blue;
  margin-left: 20px;
}
```

Chamando no HTML:

```html
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="arquivo.css">      
        <title>Nome</title>
 </head>
```

- CSS Interno: pode ser usada se uma única página HTML tiver um estilo exclusivo.

Dentro do HTML:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
</head>
<body>

<h1>Título</h1>
<p>Paragrafo</p>

</body>
</html>
```

- CSS Inline: pode ser usado para aplicar um estilo único a um único elemento.

No documento HTML, na linha do seletor

```html
<!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">Título</h1>
<p style="color:red;">Paragrafo</p>

</body>
</html>
```

# ➡️Declarações

- Background: utilizado para por fundo(cor, imagem)
- Border: utilizado para colocar borda
- Margin: utilizado para colocar margem
- Padding: Utilizado para fazer preenchimento
- Height and Width: altura e largura
- Text: Para personalização de textos
- Font: utilizado para fontes
- Display: Especifica o tipo de caixa de renderização usada por um elemento

# :mag: Links 
[https://www.devchallenge.com.br/challenges/5f14f8d5130a5d78f89d9640/details](https://www.devchallenge.com.br/challenges/5f14f8d5130a5d78f89d9640/details)

[https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)

[https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)

# 🖥️ Mostre seu progresso

Preencha o formulario a seguir e nos mostre que concluiu as tarefas semanais [https://forms.gle/Y5RjGbbhdH1w13Kz8](https://forms.gle/Y5RjGbbhdH1w13Kz8)
