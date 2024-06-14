const mysql = require('mysql');
require('dotenv').config(); // Se estiver usando variáveis de ambiente

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'db_aula',
    multipleStatements: true // Permite múltiplas consultas em uma única string
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
        throw err; // Se a conexão falhar, interrompe a execução
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
