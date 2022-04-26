function validar(campo) {
  
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
      mostrarError("splogin", "Error: login vacío");
    } else {
      borrarError("splogin");
    }  
  }
  
  function mostrarError(loginSpan, mensaje) {
    document.getElementById(loginSpan).innerHTML = mensaje;
  }
  function borrarError(loginSpan) {
    document.getElementById(loginSpan).innerHTML = "";
  }
  
  function validarFormulario() {
    var cadenaError = "";
    var login = document.getElementById("login");
    if (login.value == null || login.value.length == 0) {
      cadenaError = cadenaError + "<li>Error: login vacío</li>";
        
    }
   
    var web = document.getElementById("web");
    if  (web.value == null ||web.value.length !="http://" ) {
      } else if (web.value.length !=".es") {
      cadenaError = cadenaError + "<li>Error: debe comenzar por  http:// y terminar .es </li>";
     
    }
  
    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
      cadenaError = cadenaError + "<li>Error: teléfono vacío</li>";
    } else if (tel.value.length != 9) {
      cadenaError = cadenaError + "<li>Error: teléfono de 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
      cadenaError = cadenaError + "<li>Error: teléfono 9 o 6</li>";
    }
  
    if (cadenaError.length == 0) {
      return true;
    } else {
      document.getElementById("capaerrores").style.visibility = "visible";
      mostrarError("sperrores", cadenaError);
      return false;
    }
  
    document.getElementById(".resultado").innerHTML = "Validación correcta";
  
    return correcto;
  }
  