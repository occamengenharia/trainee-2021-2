
# Noções básicas NodeJs :hatching_chick:
### O que é :grey_question:
- Não é uma linguagem de programação nem um framework
- É na verdade uma Plataforma de aplicação
- Permite a execução de código JavaScript fora de um navegador, como:
   - A Google criou um interpretador de Javascript , chamado V8 e utilizado no próprio Google chrome
   - Ele ccompila o código para o formato nativo de maquina e então o executa

>Um framework em desenvolvimento de software, é uma abstração que une códigos comuns entre vários projetos de software provendo uma funcionalidade genérica*

### Possibilidades  :telescope:

- Fazer APIs, back-end de games, IoT, apps de mensagens, aplicações em tempo real, e aplicações serverless(cloud computing)
- Rotas e integrações, (regras de negócio, meios de pagamento, tratativa de dados)
- Você pode acabar se tornando a criatura mitológica conhecida como ***FULLSTACK***
     >[O que é uma API](https://medium.com/@rullyalves/o-que-s%C3%A3o-apis-e-requisi%C3%A7%C3%B5es-http-919238f48206)

### O grande diferencial do Node :arrows_counterclockwise:
- **Execução single-thread**

  - Uma thread é um pequeno programa que trabalha com um subsistema , ele é como se fosse a via onde passam as requisições e respostas
  - As outra tecnologias usam multi-threading(várias dessas vias), oque acaba utilizando mais recursos computacionais
  
- **Event-loop**

  - Nesse unico thread , um loop infinito fica  de olho nas requisições
  - É como se existisse uma fila de tarefas e o event loop ***não*** espera concluir uma  para começar a outra
  - Ou seja ,o node opera de forma assincrona
  - Possibilita abrir uma conexão que não se fecha, como uma sala de chat em tempo real(web.socket)
  - Isso se chama non-blocking I/O(input e output)
      >[Event Loop,Callbacks e assicronia](https://tipscode.com.br/event-loop-em-node-guia-completo)

### NPM e Yarn :minidisc:

- NPM = Node Package Manager
  - O maior repositório de bibliotecas do mundo
  - Todas as dependencias dos projetos são baixadas usando ele
  - Yarn = ?
- Mas por que eu deveria usar yarn, se eu nei sei oque significa?
  - 1) Facebook criou ele
  - 2) Yarn é capaz de paralelizar operações, maximizando a utilização de recursos e fazendo com que o processo de instalação seja mais rápido


### Frameworks :handbag:

- Para o primeiro projetinho , vamos usar o Express
    - Podemos começar de qualquer forma é bem flexivél
    - Facíl de aprender e para criar uma base sólida 
    - Micro-serviços (dividir uma aplicação grande em pequenas aplicações)


# ☑️ Mostre seu progresso

- Leia o seguinte artigo para discutirmos após as férias 
  -  https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke
