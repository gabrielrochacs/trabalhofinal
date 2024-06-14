const express = require('express');
const db = require('./db');

const app = express();
const port = 3000;

app.get('/consulta-dados', (req, res) => {
    db.query('SELECT * FROM exemplo', (err, results) => {
        if (err) {
            res.status(500).send('Erro ao consultar os dados');
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Aplicação rodando em http://localhost:${port}`);
});