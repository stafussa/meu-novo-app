

var conectarBancodeDados = require('./conectar-banco-de-dados');
var queryBuscar = 'SELECT * FROM produtos';

conectarBancodeDados.query(queryBuscar, function (error, produtos) {
    if (error) {
        console.log('ocorreu um erro ao buscar os produtos:${error.code}');

        console.log('ocorreu um erro ao buscar os produtos:${error.fatal}');
    } else {
        console.log(produtos)

        var listaProdutos = document.getElementById('lista-produtos');

        produtos.forEach(produto => {

            // criar um item de lista
            var criarItem = document.createElement('li');
            criarItem.setAttribute("class", "item")
            criarItem.innerText = produto.nome
            criarItem.id = produto.id

            // criar a div com icones
            var criarDiv = document.createElement('div');
            criarDiv.setAttribute("class", "icone-de-acao")
            criarItem.appendChild(criarDiv)


            // criar icone de editar
            var criarIconeEditar = document.createElement('img');
            criarIconeEditar.setAttribute("class", "icone-editar")
            criarIconeEditar.src = '../imagen/imageedi.png'


            // criar icone de excluir
            var criarIconeExcluir = document.createElement('img');
            criarIconeExcluir.setAttribute("class", "icone-excluir")
            criarIconeExcluir.src = '../imagen/imagedel.png'
            criarIconeExcluir.addEventListener('click', () => excluir(produto.id));


            // adicionar a li na ul
            criarDiv.appendChild(criarIconeEditar)
            criarDiv.appendChild(criarIconeExcluir)


            listaProdutos.appendChild(criarItem);


            function excluir(id) {
                var excluir = id
                var queryDeletar = `DELETE FROM produtos WHERE id = ${excluir}`;
                conectarBancodeDados.query(queryDeletar, function (error) {
                    if (error) {
                        console.log(error.code)
                        console.log(error.fatal);
                    } else {
                        console.log('deletado com sucesso')

                    
                        }
                    })
            }


        })
    }

})




