function iniciar(){
    var titulo = document.getElementById("titulo");
    var texto = document.getElementById("texto");

    var capa = document.getElementById("capa")
    if (capa.classList.contains("sucess")){
        titulo.innerHTML = "CORRECTO"
        texto.innerHTML = "Los Datos son correcto"
    } else if (capa.classList.contains("error")){
        titulo.innerHTML = "ERROR"
        texto.innerHTML = "Ha surgido un error";
    } else if (capa.classList.contains("warning")){
        titulo.innerHTML = "AVISO"
        texto.innerHTML = "Tenga Cuidado";
    }
}

window.addEventListener("load",iniciar,false);