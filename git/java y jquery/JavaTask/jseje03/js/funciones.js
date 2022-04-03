function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;

if (edad!=""|| edad.length > 0){
        var dias =edad + 365
      document.getElementById("resultado").innerHTML =
      "buenas tardes" +
      nombre +
      "usted tiene" +
      edad +
      "años, que son" +
      dias +
      "dias.gracias";
      
  }else {
      var fechaInicio = new Date(fecha).getTime();
      var fechaFin = new Date().getTime();

      var diff = fechaFin - fechaInicio;

      var dias = Math.floor(diff / (1000*60*60*24));
      document.getElementById("resultado").innerHTML = "Buenas Tardes"
     }   + nombre + "usted tiene" + dias + "dias de edad" + dias + "dias.gracias";
  }


  


  /*crear dos input para ver cual es mayor y cual es menor*/
  /*crear 3 input  para ver q numero es mayor menor y central*/