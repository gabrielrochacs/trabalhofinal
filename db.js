const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'passwd',
    database: 'db_aula'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;