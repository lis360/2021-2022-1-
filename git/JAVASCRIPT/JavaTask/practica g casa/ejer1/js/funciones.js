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
const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}


function validarFormulario() {
  var cadenaError = "";
  var login = document.getElementById("login");
  if (login.value == null || login.value.length == 0) {
    cadenaError = cadenaError + "<li>Error: login vacío</li>";
      
  }
  var password  = document.getElementById("pass1");
  if(password.value ==null || password.value.length == 0){
    cadenaError = cadenaError + "<li>Error: password vacío</li>";    
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
  function verificarPasswords() {

    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementById('pass1');
    pass2 = document.getElementById('pass2');

    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {

        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");

        return false;
    } else {

        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");

        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");

        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);

        return true;
    }

  }
}
