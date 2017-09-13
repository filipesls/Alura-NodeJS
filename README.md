# Course NodeJS


## Aula 1 - Instalação do NodeJs


## Aula 2 - Coesão e Acoplamento, organizando o código


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


