<?php

$pies =trim(htmlspecialchars(strip_tags($_REQUEST["pies"]),ENT_QUOTES,"UTF-8" ));
$pulgadas =trim(htmlspecialchars(strip_tags($_REQUEST["pulgadas"]),ENT_QUOTES,"UTF-8" ));

if (empty($pies) || empty($pulgadas)) {
    print "<p>Campos Vacios </p>";
}else if ($pies <= 0 || $pulgadas <= 0){
 print "<p>Campo Mayor 0 </p>";
}else{
    $cm = ($pies * 12 * $pulgadas) * 2.54;
    print "<p>$pies pies y $pulgadas pulgadas son $cm centrimetros</p>";
}
?>