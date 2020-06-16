//Matrices 8x8
function transformMatrix(A, b){  
  function diagional(M) {
    var m = M.length;
    var n = M[0].length;
    for(var k=0; k<Math.min(m,n); ++k) {
      // Encontrar pivote en la diagonal
      i_max = encontrarPivote(M, k);
      if (A[i_max, k] == 0)
        throw "La matriz es singular";
      cambiar_filas(M, k, i_max);
      // Hacer por todos los elementos debajo del pivote
      for(var i=k+1; i<m; ++i) {
        // Hacerlo por todos los elementos restantes de la fila
        var c = A[i][k] / A[k][k];
        for(var j=k+1; j<n; ++j) {
          A[i][j] = A[i][j] - A[k][j] * c;
        }
        // Llenar matriz triangular inferior con 0
        A[i][k] = 0;
      }
    }
  }
  
  function encontrarPivote(M, k) {
    var i_max = k;
    for(var i=k+1; i<M.length; ++i) {
      if (Math.abs(M[i][k]) > Math.abs(M[i_max][k])) {
        i_max = i;
      }
    }
    return i_max;
  }
  
  function cambiar_filas(M, i_max, k) {
    if (i_max != k) {
      var temp = A[i_max];
      A[i_max] = A[k];
      A[k] = temp;
    }
  }
  
  function hacerM(A, b) {
    for(var i=0; i<A.length; ++i) {
      A[i].push(b[i]);
    }
  }
  
  function sustituir(M) {
    var m = M.length;
    for(var i=m-1; i>=0; --i) {
      var x = M[i][m] / M[i][i];
      for(var j=i-1; j>=0; --j) {
        M[j][m] -= x * M[j][i];
        M[j][i] = 0;
      }
      M[i][m] = x;
      M[i][i] = 1;
    }
  }
  
  function extraerX(M) {
    var x = [];
    var m = A.length;
    var n = A[0].length;
    for(var i=0; i<m; ++i){
      x.push(A[i][n-1]);
    }
    return x;
  }
  
  function resolver(A, b) {
    //print(A, "A");
    hacerM(A,b);
    //print(A, "M");
    diagional(A);
    //print(A, "diag");
    sustituir(A);
    //print(A, "subst");
    var x = extraerX(A);
    //print(x, "x");
    return x;
  }

  var response = [];
  var mistring = "";
  response.push("====== Valores en la matriz =========");
  for (let i = 0; i < A.length; i++) {
    mistring += " ["+A[i]+"] ";
  }
  response.push(mistring);
  mistring = "";
  response.push("==========================");
  response.push("====== Valores despues del igual =========");
  for (let i = 0; i < b.length; i++) {
    mistring += " ["+b[i]+"] ";
  }
  response.push(mistring);
  mistring = "";
  response.push("==========================");
  let x = resolver(A, b);
  response.push("====== Resultados de x =========");
  for (let i = 0; i < x.length; i++) {
    mistring += "x"+(i+1)+" = ["+x[i].toFixed(2)+"], ";
  }
  response.push(mistring);
  mistring = "";
  response.push("==========================");

  return response;
}

function sistemasDeEcuaciones(req, res) {
    console.log("\n\nProcesando peticion de sistemas de ecuaciones...");
    console.log("Ecuacion 1: "+req.params.equationF);
    console.log("Ecuacion 2: "+req.params.equationS);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/SistemasDeEcuaciones.py",
      req.params.equationF,
      req.params.equationS
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

function matrices8x8(req, res) {
    console.log("\n\nProcesando peticion de matrices 8x8...");
    console.log("Matriz1: "+req.params.matriz1);
    console.log("Valores de X: "+req.params.matriz2);
    console.log("Calculando...");
    var process = transformMatrix(JSON.parse(req.params.matriz1),JSON.parse(req.params.matriz2));
    console.log("Calculado, enviando respuesta...");
    res.send(process);
    console.log("Respuesta enviada, mostrando resultados:");
    console.log(process);
  }

function newtonRaphson(req, res) {
    console.log("\n\nProcesando peticion de newtonraphson...");
    console.log("Ecuacion: "+req.params.equation);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/NewtonRaphson.py",
      req.params.equation
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

function divisionSintetica(req, res) {
    console.log("\n\nProcesando peticion de division sintetica...");
    console.log("Exponente 1 para la x: "+req.params.arg1);
    console.log("Exponente 2 para la x: "+req.params.arg2);
    console.log("Exponente 3 para la x: "+req.params.arg3);
    console.log("Exponente 4 para la x: "+req.params.arg4);
    console.log("Exponente 5 para la x: "+req.params.arg5);
    console.log("Exponente 6 para la x: "+req.params.arg6);
    console.log("Exponente 7 para la x: "+req.params.arg7);
    console.log("Exponente 8 para la x: "+req.params.arg8);
    console.log("Exponente 9 para la x: "+req.params.arg9);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/DivisionSintetica.py",
      req.params.arg1,
      req.params.arg2,
      req.params.arg3,
      req.params.arg4,
      req.params.arg5,
      req.params.arg6,
      req.params.arg7,
      req.params.arg8,
      req.params.arg9
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

function metodoDeDescartes(req, res) {
    console.log("\n\nProcesando peticion de metodo de descartes...");
    console.log("Ecuacion: "+req.params.equation);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/MetodoDeDescartes.py",
      req.params.equation
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }


function regla4pasos(req, res) {
    console.log("\n\nProcesando peticion de regla de los 4 pasos...");
    console.log("Ecuacion: "+req.params.equation);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/ReglaDeLos4Pasos.py",
      req.params.equation
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

function maximosYMinimos(req, res) {
    console.log("\n\nProcesando peticion de maximos y minimos...");
    console.log("Ecuacion: "+req.params.equation);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/MaximosYMinimos.py",
      req.params.equation
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

function metodoDeSimpson(req, res) {
    console.log("\n\nProcesando peticion de metodo de simpson...");
    console.log("Ecuacion: "+req.params.arg1);
    console.log("Limite inferior: "+req.params.arg2);
    console.log("Limite superior: "+req.params.arg3);
    console.log("Numero de iteraciones: "+req.params.arg4);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/MetodoDeSimpson.py",
      req.params.arg1,
      req.params.arg2,
      req.params.arg3,
      req.params.arg4
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

  function finanzas(req, res) {
    console.log("\n\nProcesando peticion de finanzas...");
    console.log("Ecuacion1: "+req.params.equation1);
    console.log("Ecuacion2: "+req.params.equation2);
    // using spawn instead of exec, prefer a stream over a buffer
    // to avoid maxBuffer issue
    var spawn = require("child_process").spawn;
    var process = spawn('python', ["./programs/Finanzas1.py",
      req.params.equation1,
      req.params.equation2
    ]);
    console.log("Calculando...");
    process.stdout.on('data', function (data) {
      console.log("Calculado, enviando respuesta...");
      res.send(data.toString());
      console.log("Respuesta enviada, mostrando resultados:");
      console.log(data.toString());
    });
  }

  module.exports.sistemasDeEcuaciones = sistemasDeEcuaciones;
  module.exports.matrices8x8 = matrices8x8;
  module.exports.newtonRaphson = newtonRaphson;
  module.exports.divisionSintetica = divisionSintetica;
  module.exports.metodoDeDescartes = metodoDeDescartes;
  module.exports.regla4pasos = regla4pasos;
  module.exports.maximosYMinimos = maximosYMinimos;
  module.exports.metodoDeSimpson = metodoDeSimpson;
  module.exports.finanzas = finanzas;