'use strict'
var theInterface = {};
var typesNumber = 0;

//Pop up
function generatePop(details, code, url, ex){
  var body = document.querySelector("body");
        body.style.overflow = "hidden";
        var pop = document.createElement("div");
            pop.id = "pop";
            var type = theInterface.pop;
            pop.classList.add(type);
            var cont = document.createElement("div");
                cont.classList.add("cont");
                var close = document.createElement("span");
                    close.classList.add("icon-x");
                    close.addEventListener("click",()=>{
                      close.parentElement.style.transform = "scale(0)";
                      setTimeout(()=>{
                        close.parentElement.parentElement.style.opacity = "0";
                        close.parentElement.remove();
                        setTimeout(()=>{
                          document.querySelector("#pop").remove();
                          body.style.overflow = "auto";
                        },400);
                      },400);
                    });
                cont.append(close);
                var h2 = document.createElement("h2");
                    h2.innerHTML = details.title;
                cont.append(h2);
                var p = document.createElement("p");
                    p.innerHTML = details.instructions;
                cont.append(p);
                var calc = document.createElement("div");
                    calc.classList.add("calc");
                    for(var i = 0; i < ex.length; i++){
                      var input = document.createElement("input");
                        input.classList.add("eq");
                        input.placeholder = "Ingresa una ecuación, ex: " + ex[i];
                        input.value = ex[i];
                      calc.append(input);
                    }
                    var button = document.createElement("button");
                        button.innerHTML = "Calcular";
                        button.addEventListener("click",()=>{
                          var text = document.querySelectorAll("#pop .cont .calc .eq");
                          //console.log(text);
                          var prev = document.querySelectorAll("#pop .cont .results p");
                          if(prev.length > 1){
                            for (let i = 0; i < prev.length; i++) {
                              setTimeout(()=>{
                                prev[i].style.transform = "scale(0)";
                                setTimeout(()=>{
                                  prev[i].remove();
                                },150);
                              },(i * 300));
                            }
                            setTimeout(()=>{
                              code(text, url);
                            },(300 * prev.length));
                          } else code(text, url);
                        });
                    calc.append(button);
                cont.append(calc);
                var container = document.createElement("div");
                    container.classList.add("results");
                cont.append(container);
            pop.append(cont);
        body.append(pop);
}

//Llamada de AJAX
function ajaxCall(url, functionality) {
  var content;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (this.readyState == 4 && this.status == 200) {
      //content = JSON.stringify(this.responseText);
      //console.log("Respuesta: ");
      content = JSON.parse(this.responseText);
      functionality(content);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

//LLamada a un script de python
function call_Script(programParams, url){
  var noBlank = true;
  for (let i = 0; i < programParams.length; i++) {
    if(programParams[i].length == 0){
      noBlank = false;
      break;
    }
  }
  if(noBlank){
    const containerS = document.querySelector("#pop .cont .results");
          var loading = document.createElement("p");
              loading.classList.add("loading");
              loading.innerHTML = "Calculando, por favor espere...";
          containerS.append(loading);

    var params = "";
    for (let i = 0; i < programParams.length-1; i++) params += programParams[i].value+"/";
    params += programParams[programParams.length-1].value;

    ajaxCall(url+params, (content)=>{
      const firstP = containerS.querySelector("p:nth-child(1)");
      firstP.style.transform = "scale(0)";

      setTimeout(()=>{
        firstP.remove();
      },400);

      setTimeout(()=>{
      //console.log("Resultado de la ecuación por NewtonRaphson:");
      //console.log(content);
      var count = 0;
      function printRes(){
        var p = document.createElement("p");
            p.innerHTML = content[count];
            p.classList.add("resultAppear");
        containerS.append(p);
        if(count < content.length-1){
          count++;
          setTimeout(printRes, 400);
        }
      };
      printRes();
      },1000);
    });
  }else{
    alert("Operación invalida");
  }
}

//Rellenar informacion con json
function fillInfo(information){
  //Titulo de la pagina
  document.querySelector("head title").innerHTML = information.Nombre + " " + information.Apellido + " | " + information.Titulo;
  //Nombre del header
  var name = document.querySelectorAll("header .limiter h1 .bold");
      name[0].innerHTML = information.Nombre;
      name[1].innerHTML = information.Apellido;
  //Titulo del header
  document.querySelector("header .limiter h1 .sub").innerHTML = information.Titulo;
  //Foto
  document.querySelector("#slide .limiter .thumb").style.background = 'url('+information.Foto+')';
  document.querySelector("#slide .thumb span").style.backgroundImage = 'url('+information.Foto+')';
  //Titulo del cuerpo
  document.querySelector("#slide .limiter .cont h1").innerHTML = information.Titulo;
  //Descripcion del cuerpo
  document.querySelector("#slide .limiter .cont p").innerHTML = information.Descripcion;
  //Calculadoras
  var calcInfo = document.querySelectorAll("#body-content .limiter article");
  for (let i = 0; i < calcInfo.length; i++) {
    calcInfo[i].querySelector(".cont h2").innerHTML = information.Calculadoras[i].title;
    calcInfo[i].querySelector(".cont p").innerHTML = information.Calculadoras[i].instructions;
  }
  //Pie de pagina
  var datos = document.querySelectorAll("footer .top .limiter ul li:nth-child(1) ul li");
      datos[0].innerHTML = "Nombre: " + information.Nombre + " " + information.Apellido;
      datos[1].innerHTML = "Expediente: " + information.Expediente;
  var contacto = document.querySelectorAll("footer .top .limiter ul li:nth-child(2) ul li");
      contacto[0].innerHTML = "Correo: " + information.Correo;
      contacto[1].innerHTML = "Telefono: " + information.Telefono;
  //Copyright
  document.querySelector("footer .bottom .limiter").innerHTML += ' '+information.Copyright;
  /*-- END --*/
}

//Generar tipo aleatorio
function randType(options){
  var number = (Math.floor(Math.random() * options)+1);
  return ("type"+number);
}

//Generar color aleatorio
function randColor(max = 100){
  var val1 = (Math.floor(Math.random() * max));
  var val2 = (Math.floor(Math.random() * max));
  var val3 = (Math.floor(Math.random() * max));
  return ("rgb("+val1+","+val2+","+val3+")")
}

//Definir tamaño limiter
function randOption(types){
  var number = (Math.floor(Math.random() * types.length));
  return types[number];
}

//Generar interfaz
function generateInterface(){
  var newInterface = {
    colors: [randColor(), randColor("30")],
    pop: randType(typesNumber),
    limiter: randOption(["big", "little"]),
    body: randType(typesNumber),
    header: randType(typesNumber),
    slide: {
      own: randType(typesNumber),
      thumb: {
          own: randType(typesNumber),
          icon: randOption(["icon-droplet", "icon-pacman", "icon-bubble", "icon-star-full"])
      }
    },
    bodyContent: randType(typesNumber),
    footer: randType(typesNumber)
  };

  return newInterface;
}

//Cargar interfaz interfaz
function loadInterface(){
  theInterface = JSON.parse(localStorage.getItem("interface"));
  if(theInterface == null){
    theInterface = generateInterface();
  }
  //Limiters
  var limiters = document.querySelectorAll(".limiter");
  for (let i = 0; i < limiters.length; i++) {
    limiters[i].classList.add(theInterface.limiter);
  }
  document.querySelector("body").classList.add(theInterface.body);
  document.querySelector("header").classList.add(theInterface.header);
  document.querySelector("#slide").classList.add(theInterface.slide.own);
  document.querySelector("#slide .limiter .thumb").classList.add(theInterface.slide.thumb.own);
  document.querySelector("#slide .limiter .thumb span").classList.add(theInterface.slide.thumb.icon);
  document.querySelector("#body-content").classList.add(theInterface.bodyContent);
  document.querySelector("footer").classList.add(theInterface.footer);
}

//Save interface
function saveInterface(){
    const elem = document.querySelector("header");
    var counter = 0;
    if(JSON.parse(localStorage.getItem("interface")) != null){
      elem.addEventListener("click", ()=>{
        document.querySelector("body").addEventListener("keypress", ()=>{
          var x = event.which || event.keyCode;
          console.log(x);
          if(x == 100 && counter < 2){
            counter++;
          } 
          else if(x != 100){
            counter = 0;
          }else if(x == 100 && counter == 2){
            localStorage.removeItem("interface");
            counter = 0;
            alert("Interfaz eliminada");
          }
        });
      });
    }else{
      elem.addEventListener("click", ()=>{
        document.querySelector("body").addEventListener("keypress", ()=>{
          var x = event.which || event.keyCode;
          if(x == 115 && counter < 2){
            counter++;
          } 
          else if(x != 115){
            counter = 0;
          }else if(x == 115 && counter == 2){
            localStorage.setItem("interface", JSON.stringify(theInterface));
            theInterface = JSON.parse(localStorage.getItem("interface"));
            counter = 0;
            alert("Interfaz guardada");
          }
        });
      });
    }

}

//Load user info
function getUserInfo(){
  var info = JSON.parse(localStorage.getItem("user"));
  if(info == null){
    var tempJson = {
      Nombre : "",
      Apellido : "",
      Expediente : "",
      Correo : "",
      Telefono : "",
      Titulo : "Calculadora de calculo integral y diferencial",
      Descripcion : "Proyecto final de la materia de Calculo integral y diferencial",
      Copyright: "",
      Foto: "foto.png",
      Calculadoras : [
          {
              title : "Sistemas de Ecuaciones",
              instructions: "Ingrese dos ecuaciones para calcular sus respectivos valores de 'x' y 'y'"
          },
          {
              title : "Transformaciones 8X8",
              instructions: "Ingrese valores en la matriz para calcular los valores de x"
          },
          {
              title : "Calculadora de Newton Raphson",
              instructions: "Ingrese una ecuacion para aplicarle el metodo de newton raphson, Nota: Para poner una potencia escriba ** seguido de la potencia, ejemplo: x^2 => x**2"
          },
          {
              title : "Division Sintetica",
              instructions: "Ingrese una ecuación para aplicar el metodo de Division Sintetica. Llene los campos vacios con el valor correspondiente a cada una de las potencias:<br>_x^8 + __x^7 + __x^6 + __x^5 + __x^4 + __x^3 + __x^2 + __x^1 + _"
          },
          {
              title : "Metodo de Descartes",
              instructions: "Ingrese una ecuación para calcular sus raices mediante una aproximación con el metodo de descartes"
          },
          {
              title : "Regla de los 4 pasos",
              instructions: ""
          },
          {
              title : "Maximos y minimos",
              instructions: "Ingrese una ecuación para calcular sus valores maximos y minimos en x"
          },
          {
              title : "Metodo de Simpson",
              instructions: "Ingrese la ecuación a la que se le va a aplicar el metodo, el limite inferior, el limite superior, y la cantidad de iteraciones a realizar"
          }
      ]
  };
    info = prompt("Ingresa tu JSON: ", "");
    if(info != null){
      info = info.replace(/\r/g, '').replace(/\n/g, '').trim();
      localStorage.setItem("user",info);
      info = JSON.parse(localStorage.getItem("user"));
    }else{
      location.reload();
    }
  }
  return info;
}

window.addEventListener("load",()=>{

  var information = getUserInfo();

    //Read styles
    typesNumber = document.querySelectorAll("head .typeStyle").length;

    //Cargar interfaz
    loadInterface();

    //Guardar interfaz
    saveInterface();

    /*-- Rellenar informacion con Json --*/
    fillInfo(information);

    var head = document.querySelector("head");
    var style = document.createElement("style");
        style.innerHTML = ':root{ --azul: '+theInterface.colors[0]+'; --blacked: '+theInterface.colors[1]+' !important; }';
    head.append(style);

    var calculators = document.querySelectorAll("#body-content .limiter article");

      //Sistemas de Ecuaciones
      calculators[0].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[0], call_Script, "/sistemasDeEcuaciones/", ["3*x+2*y=1", "4*x-5*y=2"]);
      });

      //Transformaciones 8x8
      calculators[1].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[1], call_Script, "/matrices8x8/", ["[[9,3,4,5],[4,3,4,7],[1,1,1,5],[1,3,6,5]]","[7,8,3,9]"]);
      });

      //NewtonRaphson
      calculators[2].querySelector("button").addEventListener("click",()=>{
          generatePop(information.Calculadoras[2], call_Script, "/newtonRaphson/", ["57*x**10+2*x**4+2"]);
      });

      //Division Sintetica
      calculators[3].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[3], call_Script, "/divisionSintetica/", ["0", "0", "0", "0", "0", "1", "3", "-18", "-40"]);
      });

      //Metodo de descartes
      calculators[4].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[4], call_Script, "/metodoDeDescartes/", ["2x+4x^3-6+4x^2-5x^4"]);
      });

      //Regla de los 4 pasos
      calculators[5].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[5], call_Script, "/regla4pasos/", ["8*x**5+2*x+3"]);
      });

      //Maximos y Minimos
      calculators[6].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[6], call_Script, "/maximosYMinimos/", ["x**3+x**2"]);
      });

      //Metodo de simson
      calculators[7].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[7], call_Script, "/metodoDeSimpson/", ["3x^3+6x^2+5x+2","2","5","100"]);
      });

      //Finanzas
      calculators[8].querySelector("button").addEventListener("click",()=>{
        generatePop(information.Calculadoras[8], call_Script, "/finanzas/", ["0.03*x+50","0.002*x**2+1.5*x"]);
      });
  
});
