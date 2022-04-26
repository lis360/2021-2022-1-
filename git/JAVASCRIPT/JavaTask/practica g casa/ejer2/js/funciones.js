var primero = document.querySelector(".uno");
var segundo = document.querySelector(".dos");
var tercero = document.querySelector(".tres");

function cambiarEnlaces() {
  primero = document.querySelector(".uno").className = "primero";
  segundo = document.querySelector(".dos").className = "segundo";
  tercero = document.querySelector(".tres").className = "tercero";
}

function calcular() {
  var viaje = document.querySelector(".viaje").value;
  var kilometros = Number(document.querySelector(".kilometros").value);
  var precio = Number(document.querySelector(".precio").value);

  var resultado = "";

  resultado = kilometros * precio;

  document.querySelector(".resultado").innerHTML =
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
