<?php

$nombre = trim(htmlspecialchars(strip_tags($_REQUEST["nombre"]),ENT_QUOTES,"UTF-8" ));
if ($_REQUEST["nombre"] !="" ){
print "Su nombre es " . $_REQUEST["nombre"] ."<br>";
}
if (isset($_REQUEST["opc"])) {
    print "Opcion Marca" ."<br>";
}


print_r($_REQUEST);
print_r($_FILES);

?>