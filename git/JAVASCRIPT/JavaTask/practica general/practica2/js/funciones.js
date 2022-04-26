var primero = document.querySelector(".js-enunolace-uno");
var segundo = document.querySelector(".js-enlace-dos");
var tercero = document.querySelector(".js-enlace-tres");

function cambiarEnlaces() {
  primero = document.querySelector(".js-enlace-uno").className = "primero";
  segundo = document.querySelector(".js-enlace-dos").className = "segundo";
  tercero = document.querySelector(".js-enlace-tres").className = "tercero";
}

function calcular() {
  var viaje = document.querySelector(".js-input-viaje").value;
  var kilometros = Number(document.querySelector(".js-input-kilometros").value);
  var precio = Number(document.querySelector(".js-input-precio").value);

  var resultado = "";

  resultado = kilometros * precio;

  document.querySelector(".js-resultado").innerHTML =
    "El viaje de " +
    " " +
    viaje +
    " " +
    "de" +
    " " +
    kilometros +
    " " +
    "a" +
    " " +
    precio +
    " " +
    "el precio del kilometro hace un gasto total de" +
    " " +
    resultado +
    " " +
    "euros";
}
