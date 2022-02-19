function validar(campo){
    //var campo = document.getElementById("nombre");
    //alert(campo.value);
    if(campo.value == null || campo.value =="" || campo.value.lenght == 0){
        //campo.style = "border: 2px solid red";
        //campo.focus();
        mostrarError("spnombre","Error: Nombre vacio")
    } else {
        //campo.style ="";
        borrarError("spnombre");
    }
}

    function mostrarError(nombreSpan, mensaje){
        document.getElementById (nombreSpan).innerHTML = mensaje;
    }
    function borrarError(nombreSpan){
        document.getElementById(nombreSpan).innerHTML = "";
    }

    function validarformulario(){
        var cadenaError = ""

        var nombre = document.getElementById("nombre");
        if(nombre.value == null || nombre.value.length == 0) {
            cadenaError = cadenaError + "<li>Error: nombre vacio</li>";
        }
        var postal = document.getElementById("postal");
        if (postal.value == null || postal.value.length == 0){
            cadenaError =cadenaError + <li>Error: cod postal vacio</li>;
        } else if (postal.value.lenght !=5){
            cadenaError = cadenaError + <li>Error :cod postalde 5 cifras</li>;

        }
        var tel = document.getElementById("telefono");
        if (postal.value == null || postal.value.length == 0){
            cadenaError =cadenaError + <li>Error: telefono vacio</li>;
        } else if (postal.value.lenght !=9){
            cadenaError = cadenaError + <li>Error :telefono de 9 cifras</li>;
        } else if (!tel.value.startswith(9) && !tel.value.startswith(6)){
            cadenaError = cadenaError + "<li> Error:telefono 9 o 6</li>";

        } 

        if (cadenaError.lenght ==0){
            return true;
        } else {
            document.getElementById("capaerrores").style.visibility="visible";
            mostrarError("sperrores",cadenaError);
        }

        
    }
    function mostarEdad(campoedad){
        document.getElementById("spedad").innerHTML = campoedad.value;
    }

