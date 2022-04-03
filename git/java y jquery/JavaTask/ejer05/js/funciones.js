var aleatorio = parseInt(Math.random())*10+1;
var intentos = 3;


function calcular(){
    var base= parseInt(document.getElementById("base").value);
    var exponente = parseInt(document.getElementById("exponente").value);
    var resultado = Math.pow(base,exponente);  
    document.getElementById("res").innerHTML = resultado;
}



function comprobar(){
    var numero= parseInt(document.getElementById("numero").value);
    var resultado = "";
    if (intentos > 0){
    if (numero > aleatorio){
        intentos = intentos - 1;
        resultado = "tu numero es mayor. Intentos restantes =" + intentos;
    }else if (numero >aleatorio){
        intentos = intentos - 1;
        resultado = "tu numero es menor. Intentos restantes =" + intentos;
    }else {
        resultado = "!!HAS Acertado!!*";
    }
 
}else {
    resultado = "!!TE has quedado sin intento. FIN!!";
}
document.getElementById("res2").innerHTML = resultado;
}