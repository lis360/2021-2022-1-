<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action="resfortemperatura.php"  enctype="multipart/form.data" method="post">
    <p><label for="temp">Temperatura</label></p>
    <p><input type="numbre" name="temp" id="temp" autofocus></p>

    <p>
            <select name="opc" id="opc" multiple>
                <option value="c">Celsius</option>
                <option value="f">Fahrenheit</option>
                
            </select>

        

    <p><input type="submit" value="convertir"></p>
</form>
    
</body>
</html>