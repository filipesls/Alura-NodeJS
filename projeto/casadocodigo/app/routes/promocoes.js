module.exports = function(app) {
    app.get("/promocoes/form", function(req,res) {
        var connection = app.infra.connectionFactory();
        var produtoDao = new app.infra.ProdutoDao(connection);

        produtoDao.lista(function(error,results){
            res.render('promocoes/form',{lista:results});
        });

        connection.end();
    });

    app.post("/promocoes", function(req,res) {
        var promocao = req.body;
        console.log(promocao);
        res.redirect("/promocoes/form");
    });

}