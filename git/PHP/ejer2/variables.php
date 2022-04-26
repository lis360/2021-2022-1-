<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .rojo{
            color:red;
        }
        .verde{
            color:green;
        }
        .azul{
            color:blue;
        }
        table,tr,td {
            border:black 2px solid ;
        }
    </style>
</head>
<body>

    <?php
    $aleatorio = rand(1,10);
    if ($aleatorio < 5 ) {
        echo "<p class='rojo'>El valor $aleatorio es menor que 5 </p>";
    }else if ($aleatorio > 5) {
        echo "<p class='azul'>El valor $aleatorio es mayor que 5 </p>";
    }else {
        echo "<p class='verde'>El valor $aleatorio es  5 </p>";
    }

    //for ($i=0; $i <6; $i++) { este  es 1 a  6
       // echo "<p>$i</p>";

        //for ($i=0; $i <6; $i = $i +2) { este i mas $i nos sirve para q valla de 2 en 2
        //echo "<p>$i</p>";  

        //for ($i=6; $i >0; $i--) {
            //echo "<p>$i</p>";

            for ($i=0; $i <6; $i++) {  //este tb sale de 2 en 2
                if ($i % 2 == 0){
                echo "<p>$i</p>";
            }
    }

    $filas = 3;
    $columnas = 4;
    echo "<table>";

    for ($i=0; $i < $filas; $i++) {
        echo "<tr>";
        for ($j=0; $j < $columnas; $j++){
        echo "<td>$i-$j</td>";
            
        }
        echo "</tr>";
    }
    echo "</table>";

    $hora = data(H);
    if ($hora >= 8 && $hora <= 12) {
        echo "<p>BUENOS DIAS </p>";
    }else if ($hora >= 12 && $hora <= 21) {
        echo "<p>Buenas tardes</p>";
    }else {
        echo "<p>Buenas noches</p>";
    }



    ?>
    
</body>
</html>
    
