# Trabalho final

Professor Não consegui fazer as consultas pelo navegador da atividade 4, não sei onde errei, peço que considere que pelo terminal é possível fazer as consultas e os dados segue como pode ser realizado.

As portas são:
Nodejs: 3000
mysql: 3306

"""alguns comandos basicos"""
npm install mysql@latest --save
npm install express mysql

1. Configuração do Banco de Dados
1.1. Executar o Banco de Dados MySQL
docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest

3.Publicação no GitHub
3.1. Comandos para Subir a Aplicação para o GitHub
cd trabalhofinal
git init
git add .
git commit -m "Primeira versão da aplicação"
git remote add origin <https://github.com/gabrielrochacs/trabalhofinal.git>
git push -u origin main

4.Criação e Publicação do Contêiner no Docker Hub
4.1. Build e Push da Imagem Docker
docker build -t gsrcordeiro/trabalhofinal:1.0 .
docker login -u gsrcordeiro
docker push gsrcordeiro/trabalhofinal:1.0

Execução da Aplicação via Docker
docker run -d --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_PASSWORD=passwd -e MYSQL_DATABASE=db_aula mysql/mysql-server:latest

docker run -d -p 3000:3000 --name trabalhofinal --link mysql:mysql gsrcordeiro/trabalhofinal:1.0

******************* PARA CONSULTAR OS DADOS DO BANCO PASSOS A SEGUIR ********************

1)docker exec -it mysql_db bash
2)mysql -u user -p
password: passwd
3)show databases;
4)USE db_aula;
5)SHOW TABLES;
6)SELECT * FROM exemplo;

LINK DO DOCKERHUB:
<https://hub.docker.com/repository/docker/gsrcordeiro/trabalhofinal/general>

LINK DO GITHUB:
<https://github.com/gabrielrochacs/trabalhofinal>
