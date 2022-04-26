function validar(campo) {
    //var campo = document.getElementById("nombre");
    //alert(campo.value);
    if (campo.value == null || campo.value == "" || campo.value.length == 0) {
        //campo.style = "border: 2px solid red";
        //campo.focus();
        mostrarError("spnombre", "Error:nombre vacio");
    }else{
        //campo.style ="";
        borrarError("spnombre");
    }
    function mostrarError(nombreSpan, mensaje){
        document.getElementById(nombreSpan).innerHTML = mensaje;
    }
    function borrarError(nombreSpan){
        document.getElementById(nombreSpan).innerHTML = "";
    }
}