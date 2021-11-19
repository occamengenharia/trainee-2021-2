
# Hora de Codar! :computer:
### To do list :heavy_check_mark:

- [ ] Instalar Node na sua maquina
- [ ] Utilizar o yarn para inicializar o projeto
- [ ] Roteamento básico com Express 

## Instruções de instalação :arrow_down:

- Primeiro de tudo crie uma pasta para esse primeiro projeto


```
mkdir Atividade_Nodejs
```
- Lembre-se semre que executar algum comando é necessário estar no diretório certo

```
cd Atividade_Nodejs/
```
- Agora que estamos no diretório podemos começar as instalações

<details><summary>Ubuntu e Debian</summary>
<p>
 
```
 //Ubuntu
     curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash -
     sudo apt-get install -y nodejs

 //Deb
     curl -fsSL https://deb.nodesource.com/setup_17.x | bash -
     apt-get install -y nodejs
```
</p>
</details>



<details><summary>Windows</summary>
<p>
  
 ```
     instale Linux na sua maquina

 ```
</p>
</details>
<details><summary>NPM e yarn</summary>
<p>
  
```
     curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
     sudo apt install nodejs
```
- Espere terminar o processo e com o NPM baixe o yarn
``` 

 npm install --global yarn 
```
 </p>
</details>

- Sempre vale a pena conferir se realmente foi instalado corretamente
```
  npm -v
  yarn -v
```
## Incializando o projeto :play_or_pause_button:

- Com o poderoso yarn em suas mãos ,podemos inicializar o projeto
```
yarn init
```
- Ao rodar esse comando , o terminal vai pedir varias informaçoes para inicar o projeto
- Todas são opcionais , apenas aperte enter
- No final , vai surgir um arquivo de nome "package.json"
```
{
  "name": "trainee",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

```
- json é JavaScript Object Notation, é um formato compacto que permite troca de dados simples e rápida entre sistemas 
- "package.json" é  RG do seu projeto ai vão aparecer todas as dependencias do seu projeto, recomendo não mecher muito nele
- main: é o arquivo principal do nosso server, já já você vai enteder

### Express :station:

```
yarn add express
```
- Repare a mudança no arquivo "package.json"
```
{
  "name": "trainee",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```
- Todas as dependencias do seu projeto serão listadas nesse arquivo
- Apareceu também uma pasta "node_modules"
- Ela contém todas as bibliotecas , do framework que baixamos o express
- E toda vez que você baixar alguma biblioteca ou framework novo, ela ficara guardada nessa pasta

### .gitignore :no_entry_sign:
- Na Occam quando damos Commit , não queremos enviar a pasta "node_modules"
- Porque ela pode ser atualizada rapidamente com apenas um comando e poluiria o ambiente com informações desnecessárias
- Você pode criar um arquivo .gitignore arquivo no diretório-raiz do seu repositório para dizer ao Git quais arquivos e diretórios devem ser ignorados ao fazer um commit.
```
 touch .gitignore
```
- basta escrever node_modules na primeira linha e pronto , ignorado com sucesso
## index.js :card_index:

- Primeiro crie um arqivo chamado index.js
```
touch index.js
```
- Esse arquivo sera resposável pelo roteamento

> O Roteamento refere-se à determinação de como um aplicativo responde a uma solicitação do cliente por um endpoint específico, que é uma URI (ou caminho) e um método de solicitação HTTP específico (GET, POST, e assim por diante).

> Cada rota pode ter uma ou mais funções de manipulação, que são executadas quando a rota é correspondida.
- A definição de rotas aceita a seguinte estrutura

```
app.METHOD(PATH, HANDLER)
```
- app é uma instância do express.
- METHOD é um método de solicitação HTTP.
- PATH é um caminho no servidor.
- HANDLER é a função executada quando a rota é correspondida.

 - Apartir desse prototipo vamos fazer a o server responder as requisições

## Importando Express
- No arquivo index.js :
```
const express = require("express");
```
- Estamos criando uma constante chamada express 
- require() importa um Módulo , que contem funções , nesse caso o próprio express

<details><summary>Exemplo de exportação de Módulo</summary>
<p>
 
```
 function soma(a,b){
 return a+b;
 } 
 module.exports =soma;
```
 - Nesse exemplo , esse código se encontraria em outro arquivo.
 - Na ultima linha ele foi exportado 

```
 const soma = require("soma");
```
 - Supondo que desjamos usar essa função em outro script
 - Basta requerir o módulo
 - Isso impede a confusão de ter um arquivo sobrecarregado de código
 
</p>
</details>

```
const app = express()
```
- Inicializando o express, quando quisermos utilizar alguma função basta usar app.METHOD(PATH, HANDLER)

## Métodos HTTP :satellite:
> O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso
> Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP)
- Existem muitos métodos HTTP , mas para mater a simplicidade , aqui estão os quatro metodos mais comuns: 
- **GET**
> O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.
 
- **POST**
> O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

- **PUT**
> O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

- **DELETE**
> O método DELETE remove um recurso específico.

- Os métodos POST e PUT necessitam de um **Middleware**
> São metodos/functions/operações que são chamadas **ENTRE** uma requisição e uma resposta
- Nos metodos POST e PUT , você esta enviando dados para o server e você está pedindo para o server aceitar e guardar esses dados(Object) 
- Esse objeto precisa ter um tipo, uma estrutura, geralmente vem no formato .json(object)
- Por isso é necessario o middleware , para reconhcer esse objeto
```
app.use(express.json());
```
- app.use() , diz express vai usar () esse middleware
- Nesse caso express.json() que é responsável por reconhecer esses obejetos json

## Definindo uma Rota :incoming_envelope: :computer:

- Agora seu arquivo index.js vai estar assim :
```
const express = require('express');

const app = express();

app.use(express.json());
```
- Vamos definir uma rota com o método GET
```
app.get('/', function(request, response) {
    console.log('oii');
  
    return response.json({ok: true});
  })
```
- Dentro dos parenteses temos esse  '/' como primiero parametro  , essa é a própria rota 
- Se o usuário usar essa rota atraves do navegador podemos retornar um dado
- O segundo parametro pe a funcão a ser executada
- Nesse código vamos retornar apenas um json 
```
app.listen(3000, () => console.log('servidor rodando na porta 3000'));
```
- Essa função do express inicia um servidor e escuta a porta 3000 por conexões
- Se o servidor rodar o terminal mostrará a mensagem no parenteses

- Agora basta usar esse comando no terminal
```
node index.js
```
- No terminal deverá aparecer "servidor rodando na porta 3000"
- Entre no navegador e acesse a Rota : http://localhost:3000/
- Se apareceu : {"ok":true}
- **PARABÉNS** :tada: :clinking_glasses: seu primeiro servidor está rodando
