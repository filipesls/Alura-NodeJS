# Course NodeJS


## Aula 1 - Instalação do NodeJs

### ATIVIDADES - 01 - Introdução e instalação do NodeJs


### ATIVIDADES - 02 - O que é o Node.js?


### ATIVIDADES - 03 - Rodando o primeiro código

```
bash

mkdir teste-node
cd teste-node/
```

```
node produtos.js
```

### ATIVIDADES - 04 - Criando um servidor web


### ATIVIDADES - 05 - Instalação e primeiros testes com o Node.js.

```
node produtos.js
```

### ATIVIDADES - 06 - Trabalhando com endereços diferentes


### ATIVIDADES - 07 - Utilizando o Express


### ATIVIDADES - 08 - O que é o npm e para que serve?


### ATIVIDADES - 09 - Gerenciando o projeto com npm e aplicando o Express.js.

```
npm -version
```

```
npm init
```

```
npm install express --save
```

```
node app.js
```


### ATIVIDADES - 10 - Utilizando o EJS


### ATIVIDADES - 11 - Instalação e uso do EJS.

```
npm install ejs --save
```

```
node app.js
```


### ATIVIDADES - 12 - Monitorando as mudanças e reiniciando o servidor com o Nodemon


### ATIVIDADES - 13 - Instalando e utilizando o nodemon.

```
sudo npm install -g nodemon
```


```
nodemon app
```


```

```



### ATIVIDADES - 14 - Projeto da Aula 1



## Aula 2 - Coesão e Acoplamento, organizando o código

### ATIVIDADES - 01 - Isolando as configurações do Express


### ATIVIDADES - 02 - O que é a CommonJS?


### ATIVIDADES - 03 - Isolando as configurações do express


### ATIVIDADES - 04 - Isolando o código das rotas


### ATIVIDADES - 05 - O que são as rotas?


### ATIVIDADES - 06 - Isolando as rotas


### ATIVIDADES - 07 - Consultando o banco de dados


### ATIVIDADES - 08 - Preparando o Banco de Dados para a aplicação.

```
mysql -u root
```

```
create database casadocodigo_nodejs;

use casadocodigo_nodejs;

CREATE TABLE produtos (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo varchar(255) DEFAULT NULL,
  descricao text,
  preco decimal(10,2) DEFAULT NULL);
```

```
insert into produtos(titulo, descricao, preco)
values ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90);

insert into produtos(titulo, descricao, preco)
values ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90);

insert into produtos(titulo, descricao, preco)
values ('Comecando com express', 'livro introdutório sobre express', 39.90);
```

### ATIVIDADES - 09 - Instalando o driver do MySQL e implementando a consulta no Node.

```
npm install mysql --save
```


### ATIVIDADES - 10 - Exibindo os dados do banco na tela


### ATIVIDADES - 11 - Exibindo na tela os dados do Banco.


### ATIVIDADES - 12 - Isolando a criação da conexão com o banco de dados


### ATIVIDADES - 13 - Isolando a criação da conexão com a ConnectionFactory


### ATIVIDADES - 14 - Carregamento automático dos módulos


### ATIVIDADES - 15 - Configurando o carregamento automático dos módulos.

```
npm install express-load --save
```


### ATIVIDADES - 16 - Isolando o acesso aos dados do banco


### ATIVIDADES - 17 - Criando um arquivo para isolar acesso a produtos no banco.


### ATIVIDADES - 18 - Recebendo a conexão como argumento


### ATIVIDADES - 19 - Evitando o this descontextualizado


### ATIVIDADES - 20 - Passando a connection como argumento para a Classe produtosNoBanco.


### ATIVIDADES - 21 - Prototype e o Data Access Object


### ATIVIDADES - 22 - Função produtora e o prototype


### ATIVIDADES - 23 - Projeto da Aula 2



## Aula 3 - Verbos http


## Aula 4 - Content negotiation


## Aula 5 - Respeitando o accept


## Aula 6 - Entendendo os detalhes


## Aula 7 - Testes de integração

### ATIVIDADES - 01 - Instalando o Mocha e executando testes


### ATIVIDADES - 02 - Instalação do Mocha e infra para testes


### ATIVIDADES - 03 - Testando a listagem de produtos


### ATIVIDADES - 04 - Melhorando as verificações de erro e acerto


### ATIVIDADES - 05 - Caso de teste para a listagem de produtos.


### ATIVIDADES - 06 - Lidando com o servidor nos testes


### ATIVIDADES - 07 - Executando o teste sem precisar subir o servidor


### ATIVIDADES - 08 - Testando o cadastro de produtos


### ATIVIDADES - 09 - Implementando o teste para o cadastro


### ATIVIDADES - 10 - Executando os testes em um banco exclusivo


### ATIVIDADES - 11 - Passando os erros para o Express e criando o banco de testes

```
mysql -u root -p
```

```
create database casadocodigo_nodejs_test;
```

```
use casadocodigo_nodejs_test;
```

```
CREATE TABLE produtos (id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,titulo varchar(255) DEFAULT NULL,descricao text,preco decimal(10,2) DEFAULT NULL);
```
or
```
CREATE TABLE produtos (
    id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(255) DEFAULT NULL,
    descricao text,
    preco decimal(10,2) DEFAULT NULL
);
```


### ATIVIDADES - 12 - Separando o banco de teste e o de desenvolvimento


### ATIVIDADES - 13 - Limpando a tabela antes da execução de cada caso de teste


### ATIVIDADES - 14 - Limpando o banco para cada caso de teste


### ATIVIDADES - 15 - O que são testes automatizados?


### ATIVIDADES - 16 - Quando utilizar testes automatizados.


### ATIVIDADES - 17 - Projeto da Aula 7



## Aula 8 - WebSockets com socket.io


## Aula 9 - Middlewares


## Aula 10 - Deploy


