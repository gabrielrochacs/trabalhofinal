// index.js
const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/consulta-dados', (req, res) => {
    db.query('SELECT * FROM exemplo', (err, results) => {
        if (err) {
            console.error('Erro ao consultar os dados:', err);
            res.status(500).send('Erro ao consultar os dados');
            return;
        }
        res.json(results);
    });
});

app.get('/liveness', (req, res) => {
    res.status(200).send('Testando se está viva');
});

app.get('/readiness', (req, res) => {
    db.query('SELECT 1', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar o banco de dados');
            return;
        }
        res.status(200).send('OK');
    });
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});
