module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results)
                }
            });
            
        });

        connection.end();
    }

    //lista produtos
    app.get('/produtos', listaProdutos);

    //renderisa pagina de formulario
    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form');
    });

    //Manda requisição para salvar novo item
    app.post('/produtos', function(req, res) {
        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salva(produto, function(err, results) {
            res.redirect('/produtos');
        });

        connection.end();
    });

    // requisição para deletar um item
    app.get("/produtos/deletar/:id", function(req, res){
        var id = req.params.id;
        id = id.replace(":", "");

        //conectando com o banco var produtosDao = new app.infra.ProdutosDAO(connection);
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.deleta(id, function(err, results){
            res.redirect("/produtos");
        });

        connection.end();
    });
}
