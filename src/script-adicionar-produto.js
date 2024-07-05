

var conectarBancodeDados = require('./conectar-banco-de-dados');

function adicionarProduto(event) {


    var queryAdicionar = `INSERT INTO produtos (nome, quantidade, marca, codigo_produto) VALUES ('${nome}', '${quantidade}', '${marca}', '${codigo_produto}')`;

    conectarBancodeDados.query(queryAdicionar, function (error) {
        if (error) {
            console.log(error.code)
            console.log(error.fatal);
        } else {
            console.log('adicionado com sucesso')
        }
    });




    event.preventDefault()
    var nome = document.getElementById('nome').value
    var quantidade = document.getElementById('quantidade').value

    var marca = document.getElementById('marca').value

    var codigo_produto = document.getElementById('codigo_produto').value

    console.log(nome, quantidade, marca, codigo_produto)

    var queryInserir = `INSERT INTO produtos (nome, quantidade, marca, codigo_produto) VALUES ('${nome}', '${quantidade}', '${marca}', '${codigo_produto}')`;

    conectarBancodeDados.query(queryInserir, function (error) {
        if (error) {
            console.log(error.code)
            console.log(error.fatal);
        } else {
            console.log('adicionado com sucesso')
        }
    });

}

var formulario = document.getElementById('lidarComFormulario')
formulario.addEventListener('submit', adicionarProduto)