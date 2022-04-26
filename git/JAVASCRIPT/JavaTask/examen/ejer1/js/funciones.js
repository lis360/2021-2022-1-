function validar(campo) {
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
        mostrarError("spnombre", "Error: Nombre vacío");
    } else {
        borrarError("spnombre");
    }
}

function mostrarError(nombreSpan, mensaje) {
    document.getElementById(nombreSpan).innerHTML = mensaje;
}

function borrarError(nombreSpan) {
    document.getElementById(nombreSpan).innerHTML = "";
}

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,30}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[iestriana]+\.[com]+$/,
}



function validarFormulario() {
    var cadenaError = "";

    var nombre = document.getElementById("nombre");
    if (nombre.value == null || nombre.value.length == 0) {
        cadenaError = cadenaError + "<li>Error: Nombre y Apellido vacío</li>";
    } 

    var web = document.getElementById("web");
    if  (web.value == null ||web.value.length ==0 ) {
        cadenaError = cadenaError + "<li>Error: web  no puede estar vacío</li>";
      
      }

    var tel = document.getElementById("correo");
    if (tel.value == null || tel.value.length == 0) {
        cadenaError = cadenaError + "<li>Error:correo no debe estar vacia</li>";
    }

    if (cadenaError.length == 0) {
        return true;
    } else {
        document.getElementById("capaerrores").style.visibility = "visible";
        mostrarError("sperrores", cadenaError);
        return false;
    }
}

function mostrarEdad(campoEdad) {
    document.getElementById("spedad").innerHTML = campoEdad.value;
} 