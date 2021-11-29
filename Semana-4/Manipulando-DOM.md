## Manipulando a DOM do HTML

Como discutimos anteriormente, websites sem javascript são estáticos e não possuem muita interação com o usuário. Para adicionarmos essa dinâmica em nossos sites precisamos manipular a DOM (Modelo de Objeto de Documento) do nosso documento HTML.

Podemos pensar da DOM como a estrutura do nosso código em HTML, onde queremos alterala dinamicamente com a utilização do javascript.



## Tipos de dados fundamentais

Quando manipulamos a DOM do HTML temos que prestar atenção nos seguintes tipos de dados:

| Tipo do dado | Função                                                       |
| ------------ | ------------------------------------------------------------ |
| document     | É o próprio objeto raiz do html que estamos manipulando      |
| node         | É toda tag html dentro do documento                          |
| element      | Referencia qualquer elemento que acabou de ser criado na DOM |
| nodeList     | é um array de elementos comos os que são retornados pelo método `document.getElementsByTagName()` |



## Seletores

Para selecionar elementos na árvore de elementos do HTML utilizamos seletores, entre eles podemos citar:

```js
document.getElementById('id'); // Seleciona elemento pelo seu id
document.getElementByClassName('classe'); // Seleciona elemento pelo nome da sua classe
document.getByTagName('nome_da_tag_html'); // Seleciona elemento pelo nome da tag HTML

document.querySelector('seletor'); // Seleciona elemento através de um seletor específico
document.querySelectorAll('seletor'); // Seleciona todos os elemento através de um seletor específico
// '.seletor' para selecionar uma classe
// '#seletor' para selecionar um id
// 'seletor' para selecionar uma tag html
```



## Eventos

Podemos adicionar eventos para nossos elementos html, através da função `addEventListener`. Alguns comandos básicos desse método são:

```js
let button = document.querySelector('button');
let input = document.querySelector('input');

button.addEventListener('click', () => { /* lógica do clique */ }); // Evento de clique
button.addEventListener('mouseenter', () => { /* lógica de entrada do mouse */ }); // Evento quando usuário passa o mouse por cima
button.addEventListener('mouseout', () => { /* lógica de saída do mouse */ }); // Evento quando usuário deixa a área do botão
button.addEventListener('mouseout', () => { /* lógica de movimento do mouse */ }); // Evento quando usuário move o mouse na área do botão

input.addEventListener('change', () => { /* lógica da mudança */ }); // Evento de mudança no input
input.addEventListener('focus', () => { /* lógica quando o input está focado */ }); // Evento quando o usuário clica no input
input.addEventListener('blur', () => { /* lógica quando o input está desfocado */ }); // Evento quando o usuário deixa de focar no input

document.addEventListener('keypress', () => { /* lógica de aperto de tecla */ }) // Evento quando usuário aperta uma tecla
document.addEventListener('keydown', () => { /* lógica de aperto de tecla */ }) // Evento quando usuário mantém uma tecla apertada
document.addEventListener('keyup', () => { /* lógica de saída de tecla */ }) // Evento quando usuário deixa de apertar uma tecla
```



### Exemplo 1: Lista de afazeres

Com a manipulação da DOM podemos fazer uma lista de afazeres como mostrado abaixo:

```html
<!DOCTYPE html>

<html>
    <head>
        <title>Lista de afazeres</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <div class="container">
            <div class="todo_input">
                <input type="text" id="input">
                <button type="button" onclick="handleAddTodo()">
                    Adiconar
                </button>
            </div>
            
            <div class="todo-list">
                <h4>LISTA DE AFAZERES:</h4>
                <ul>
                </ul>
            </div>
        </div>
    </body>

    <script>
        function handleAddTodo() {
            // Selecionar elemento pelo id
            let input = document.getElementById('input');
            
            // Selecionar elemento pela tag html
            let btn = document.querySelector('button');
            let list = document.querySelector('ul');
			
            // Pegar o valor do input digitado pelo usuário
            let todo = input.value;
            
            // Criar um novo elemento na DOM
            let listItem = document.createElement("li");
            
            // Adicionar o texto do input dentro do elemento li
            listItem.innerHTML = todo;
            
            // Adicionar o elemento li no ul
            list.appendChild(listItem);
        }
    </script>
</html>
```



### Exemplo 2: Fazendo chamadas a uma api

Podemos utilizar o javascript também para fazermos requisições a servidores externos. Para isso precisamos utilizar uma **API**

(Interface de programação pública), que é uma interface que disponibiliza informações de um servidor (backend) para o lado do cliente (frontend). Com uma api a gente tem o poder de **listar, ver, criar, editar, excluir** informações e fazer transações entre o lado do cliente e servidor. Essas informações vem em formato de um JSON (Javascript Object Notation) dessa forma:

```json
{
    "id": 1,
    "name": "Joe Doe",
    "email": "example@example.com",
    "friends": [
        {
            "id": 1
            "name": "Foo"
        },
        {
            "id": 2
            "name": "Boo"
        }
    ]
}
```

O exemplo abaixo mostra uma implementação com uma api pública do github para geração de usuário aleatórios:

**index.html**

```html
<!DOCTYPE html>

<html>
    <head>
        <title>Usuários</title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <div class="container">
            <div class="profile_picture">
            </div>
            <div class="user_name">
            </div>
        </div>
    </body>

    <script src="script.js"></script>
</html>
```

**script.js**

```javascript
async function fetchData(){
    // Recuperar dados
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const result = data.results[0];

    // Formatar dados
    const name = result.name.first + ' ' + result.name.last;
    const picture = result.picture.large;

    // Adicionar a foto de perfil no HTML
    const imageContainer = document.querySelector('.profile_picture');
    const img = document.createElement('img');
    img.src = picture;
    imageContainer.appendChild(img);

    // Adicionar nome de usuário no HTML
    const usernameContainer = document.querySelector('.user_name');
    const username = document.createElement('p');
    username.innerText = name;
    usernameContainer.appendChild(username)
}

fetchData();
```

