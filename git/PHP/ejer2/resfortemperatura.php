<?php

$temperatura =trim(htmlspecialchars(strip_tags($_REQUEST["temp"]),ENT_QUOTES,"UTF-8" ));
$opc =trim(htmlspecialchars(strip_tags($_REQUEST["opciones"]),ENT_QUOTES,"UTF-8" ));


}if (empty($temp)){
    print "<p>Rellene la temperatura</p>";
}else if ($opc == "c" && $temp < -274.15) {
    print "<p>Temperatura Celcius Incorrecta</p>";
}else if ($opc == "f" && $temp < -459.67){
    print "<p>Temperatura Fahrenheit Incorrecta</p>"
}else {
    if ($opc == "c"){
        $result = ($temp *1.8) + 32;
        print "<p>$temp grados Celcius son $result grados Fahrenheit"
    }
}
?>