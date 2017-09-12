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
        res.render('produtos/form', {validationErrors:{}, produto:{}});
    });

    //Manda requisição para salvar novo item
    app.post("/produtos",function(req,res) {
        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);

        var validadorTitulo = req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco','Preco deve ser um número').isFloat();

        var errors = req.validationErrors();
        if(errors){
            res.format({
                html: function(){
                    res.status(400).render('produtos/form', {validationErrors:errors, produto:produto});
                },
                json: function(){
                    res.status(400).json(errors);
                }
            });
            return;
        }

        produtosDao.salva(produto,function(erros,resultado){
            res.redirect("/produtos");
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
