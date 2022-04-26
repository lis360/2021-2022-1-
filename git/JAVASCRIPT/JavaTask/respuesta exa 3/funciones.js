function calcular() {
    var precio = document.getElementById("precio").value;
    var iva = document.getElementById("IVA");
    var selected = iva.options[iva.selectedIndex].value;
  
    resultado = precio * selected + precio;
  
    alert(resultado);
  }
  