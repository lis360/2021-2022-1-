function limpiar(){
    document.getElementById('calculadora').reset();
}
function  sumar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('r').innerHTML = x+y ;
    
}

function  restar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('r').innerHTML = x-y ;
    
}

function  multiplicar(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('r').innerHTML = x*y ;
    
}

function  dividir(){
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    document.getElementById('r').innerHTML = x/y ;
    
}

