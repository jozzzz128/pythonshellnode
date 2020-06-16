const express = require('express'),
      programs = require("./execute_programs.js");
const app = express();

app.set("view engine", "jade");
app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {

    app.get('/',function(req,res) {
        res.render("index");
    });
    app.get('/sistemasDeEcuaciones/:equationF/:equationS', programs.sistemasDeEcuaciones);
    app.get('/matrices8x8/:matriz1/:matriz2/', programs.matrices8x8);
    app.get('/newtonRaphson/:equation', programs.newtonRaphson);
    app.get('/divisionSintetica/:arg1/:arg2/:arg3/:arg4/:arg5/:arg6/:arg7/:arg8/:arg9', programs.divisionSintetica);
    app.get('/metodoDeDescartes/:equation', programs.metodoDeDescartes);
    app.get('/regla4pasos/:equation', programs.regla4pasos);
    app.get('/maximosYMinimos/:equation', programs.maximosYMinimos);
    app.get('/metodoDeSimpson/:arg1/:arg2/:arg3/:arg4', programs.metodoDeSimpson);
    app.get('/finanzas/:equation1/:equation2', programs.finanzas);

  console.log('server running on port 3000');
})