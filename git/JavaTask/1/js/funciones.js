function iniciar(){
    var nombre = prompt("¿Quien eres?");
        if (nombre=="warning") {
            document.getElementById("capa").className="warning";
        } else if(nombre=="error") {
            document.getElementById("capa").className="error";
        }else if(nombre=="sucess") {
            document.getElementById("capa").className="sucess";
        } 
        }
     

    
    window.addEventListener("load",iniciar,false);