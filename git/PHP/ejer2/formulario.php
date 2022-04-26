<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario</title>
</head>
<body>
    <form action="resultado.php"  enctype="multipart/form.data" method="post">
        <p><label for="nombre">Nombre</label></p>
        <p><input type="text" name="nombre" id="nombre" autofocus></p>

        <p><label for="apellidos">Apellidos</label></p>
        <p><input type="text" name="apellidos" id="apellidos"></p>
        

        <p><label for="pass">Password</label></p>
        <p><input type="password" name="pass" id="pass"></p>

        <p><label for="desc">Descripcion</label></p>
        <p><input type="desc" name="desc" id="desc" > Esta es la descripcion</p>

        <p><label for="opc">Opcion</label></p>
        <p><input type="checkbox" name="opc" id="opc" value="123" ></p>

        <p><label for="dato">Datos</label></p>
        <p><input type="radio" name="dato" id="dato" value="1" checked>Dato 1</p>
        <p><input type="radio" name="dato" id="dato" value="2" >Dato 2</p>

        <p>
            <select name="select[]" id="select" multiple>
                <option value="1">uno</option>
                <option value="2">dos</option>
                <option value="3">tres</option>

            </select>

        <p><input type="submit" value="Enviar"></p>



    </form>
</body>
</html>