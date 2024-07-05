
var mysql = require('mysql2');

var conectarBancodeDados = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eletronTeste'
});
conectarBancodeDados.connect(function (error) {
    if (error) {
        console.log(error.code)
        console.log(error.fatal);


    } else {
        console.log('conectado com sucesso')
    }
});

module.exports = conectarBancodeDados;
