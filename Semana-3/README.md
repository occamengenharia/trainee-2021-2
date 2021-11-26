# GUIA GIT / GITHUB :desktop_computer:

> Nesta aula voce ira aprender sobre como instalar e dar os primeiros passos com o git 





## Por que usar git :question:

> Git é um sistema de controle de versão de arquivos. Através deles podemos desenvolver projetos na qual diversas pessoas podem contribuir simultaneamente no mesmo, editando e criando novos arquivos e permitindo que os mesmos possam existir sem o risco de suas alterações serem sobrescritas. Isso faz do git uma ferramenta essencial para desenvolvimento de projetos.

#Instalaçao

## Linux

> Instalação no linux.

```shell
$ sudo apt-get install git
```

## Windows

> Instalação no Windows.

[Download](https://git-scm.com/) ou [Download](https://gitforwindows.org/)



> Para testar se a instalação foi realizada com sucesso abra o Git Bash:

```shell
$ git --version
```

> Deve retornar a versão instalada em sua máquina

# Configuração Básica

> No terminal ...

```shell
$ git config --global user.name ”Seu Nome"
```

```shell
$ git config --global user.email ”Seu Nome"
```

> Seu email do github de preferência

# Configurando Repositório Remoto Github

> Para gitlab o procedimento é o mesmo.



- Entre em sua conta em Profile - Settings - SSH Keys

- Para gerar sua chave SSH, vá no terminal e digite os seguintes comandos: 

  ```shell
  $ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
  ```

  > pressionar enter nos passos a seguir até gerar.

  ```shell
  $ eval "$(ssh-agent -s)"
  ```

  ```shell
  $ ssh-add ~/.ssh/id_rsa
  ```

  

- Para Copiar sua chave SSH para ser adicionado na sua conta do github/gitlab:

  - No **Linux** :purple_heart::100::

    - ```shell
      cat ~/.ssh/id_rsa.pub
      ```

      

  - No **Windows**:

    - ```shell
      $ clip < ~/.ssh/id_rsa.pub
      ```

# Commit

- Em ciência da computação e gerenciamento de dados, um commit é a realização de um conjunto de mudanças provisórias permanentes, marcando o fim de uma transação e proporcionando durabilidade às transações ACID.

- O registro de commits é chamado de log de commits.

### Para realizar um commit, existem três estágios:

- Primeiro estágio - **Untracked files**;

  - O primeiro estágio é quando os arquivos são criados na pasta, mas como o
    arquivo é novo, ele se encontra no estágio de Untracked Files, ou seja, ele é desconhecido pelo git.  
     Para verificar o status digite 

    ```shell
    $ git status
    ```

     Este comando irá listar todos os arquivos que estão na pasta e o git
    desconhece, assim como todos os arquivos que sofreram modificações
    desde o último commit.

- Segundo estágio - **Changes to be committed**;

  - Ao adicionar criar um novo arquivo no diretório em que o git está rodando, e o adicionando com o comando 

    ```shell
    $ git add arquivo.txt
    ```


    Nosso arquivo está no segundo estágio, que é conhecido como **_Changes
    to be committed_**, ou seja, os arquivos que estiverem neste estágio, estão
    prontos para serem commitados.

- Terceiro estágio - **Committed**.

  - Para realizar o commit:

    ```shell
    $ git commit -m ”Meu primeiro commit!
    ```

     Note que a flag ”-m” é utilizada para atribuir uma descrição ao commit.
    Ela deve ser muito explicativa, para quem ler, saber o que realmente foi
    feito naquele commit.

- Para acessar o histórico de commits realizados no repositório, utilizamos o
  comando:

  ```shell
  $ git log
  ```

# Comandos Básicos :

## Clonar Repositório Remoto

- `$git clone linkrepositorio`
  - se tiver ums chave ssh adicionada em sua conta, use a opção para clonar para autenticação ssh.

## Sincronização de Arquivos

- `$git push` ou `$git push origem nomeBranch` quando temos mais de uma branch.
  - Para mandar seus arquivos locais para repositório remoto. Antes deve ter sido feito um commit.
- `$git pull`
  - Para baixar atualizações do repositório.

## Branch
- ```$git branch``` 
  - Listar braches existentes.
- `$git checkout -b funcionalidade_x`
  - Cria uma nova branch e chamado funcionalidade_x e a seleciona.
- `$git checkout nomeBranch`
  - Seleciona a branch.
- `$git branch -d funcionalidade_x`
  - Deleta a branch.
- `$git merge nomeBranch`
  - Atualiza a branch que você escreveu no comando para a master passar a ter o conteúdo do branch.



# Comandos

> Comandos serão iguais em ambos os SO.

- [Comandos](./comandos/Comandos.md)


## Links Úteis

### Comandos mais utilizados disponíveis em :

[https://woliveiras.com.br/posts/comandos-mais-utilizados-no-git/](https://woliveiras.com.br/posts/comandos-mais-utilizados-no-git/)

[https://www.hostinger.com.br/tutoriais/comandos-basicos-de-git/](https://www.hostinger.com.br/tutoriais/comandos-basicos-de-git/)



# Extra: .gitignore

Quando estamos desenvolvendo algum projeto, geralmento temos arquivos, de dependências ou que se são gerados ao executar o programa, e não queremos que estes arquivos sejam versionados ou subam para o diretório remoto, então adicionamos um aquivos com o nome **_".gitgnore"_** na raiz do projeto, onde dentro deste arquivos iremos por todas as extensões ou pastas que queremos que o git ignore.

- Ex: `*.exe` irá ignorar todos os arquivos com a Extensão .exe, ou se quiseremos ignorar uma pasta, é só por o nome da pasta.
