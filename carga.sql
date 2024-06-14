CREATE DATABASE IF NOT EXISTS db_aula;
USE db_aula;

CREATE TABLE IF NOT EXISTS exemplo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT
);

INSERT INTO exemplo (nome, descricao) VALUES ('Exemplo 1', 'Descrição do Exemplo 1');
INSERT INTO exemplo (nome, descricao) VALUES ('Exemplo 2', 'Descrição do Exemplo 2');
INSERT INTO exemplo (nome, descricao) VALUES ('Produto Alpha', 'Descrição detalhada do Produto Alpha');
INSERT INTO exemplo (nome, descricao) VALUES ('Serviço Beta', 'Descrição detalhada do Serviço Beta');
INSERT INTO exemplo (nome, descricao) VALUES ('Ferramenta Gamma', 'Descrição detalhada da Ferramenta Gamma');
INSERT INTO exemplo (nome, descricao) VALUES ('Aplicativo Delta', 'Descrição detalhada do Aplicativo Delta');
INSERT INTO exemplo (nome, descricao) VALUES ('Sistema Epsilon', 'Descrição detalhada do Sistema Epsilon');
INSERT INTO exemplo (nome, descricao) VALUES ('Projeto Zeta', 'Descrição detalhada do Projeto Zeta');
INSERT INTO exemplo (nome, descricao) VALUES ('Programa Eta', 'Descrição detalhada do Programa Eta');
INSERT INTO exemplo (nome, descricao) VALUES ('Plataforma Theta', 'Descrição detalhada da Plataforma Theta');