# Bora fazer um to-do-list com REACT!? :rocket:

A ideia é seguir este [prototipo](https://www.figma.com/file/ASGdL0f2JkiCZvBcDrE4HQ/To-Do-List-(Community)?node-id=1%3A2) para criar um aplicação web e integrar com a API feita no ultimo treinamento.

## Iniciando a aplicação

```bash
npx create-react-app to-do-list
//to-do-list é o nome da aplicação, poderia ser qualquer nome.
```

## Como gerenciar rotas?

Para isso utilizamos o [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) e instalamos ele no nosso projeto da seguinte forma:

Na raiz do nosso projeto, pelo terminal, executamos:

```sehll
yarn add react-router-dom
//ou
npm i react-router-dom
```

## Estilização 

Vamos usar uma lib chamada [styled-components](https://styled-components.com/docs/basics#getting-started)

Para instalar:

```shell
yarn add styled-components
//ou
npm i styled-components
```

Funciona da seguinte forma:

```react
// Podemos criar components dessa forma no styles.js
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// e utilizar ele assim la dentro da nossa pagina (no index.js).
[...]
    <Title>
      Hello World!
    </Title>
[...]
```

### ...continua

