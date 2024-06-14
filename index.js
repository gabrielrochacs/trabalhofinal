const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

// Endpoint para verificar se a aplicação está viva
app.get('/liveness', (req, res) => {
    res.status(200).send('Aplicação está viva');
});

// Endpoint para verificar se a aplicação está pronta para receber tráfego
app.get('/readiness', (req, res) => {
    // Você pode adicionar verificações adicionais aqui, se necessário
    res.status(200).send('Aplicação está pronta para receber tráfego');
});

// Endpoint para consultar dados do banco de dados
app.get('/consulta-dados', (req, res) => {
    db.query('SELECT * FROM exemplo', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar os dados');
            return;
        }
        res.json(results);
    });
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
