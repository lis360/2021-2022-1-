function validar() {
    var correcto = true;
  
    var login = document.querySelector(".login").value;
    var web = document.querySelector(".web").value;
    var telefono = document.querySelector(".tel").value;
  
    if (login.length == 0 || web.length == 0 || telefono.length == 0) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Debe rellenar todos los campos";
      correcto = false;
    }
  
    if (login.length < 5) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Login debe ser superior a 5 caracteres";
      correcto = false;
    }
  
    if (telefono.value.lenght != 9) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Error telefono de 9 cifras";
      correcto = false;
    } else if (!telefono.value.startWith(9) && !telefono.value.startWith(6)) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Error telefono no empieza con 9 o 6";
      correcto = false;
    }
  
    if (!String(web).startsWith("http://")) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Web debe comenzar por http//";
      correcto = false;
    } else if (!String(web).endsWith(".es")) {
      document.querySelector(".js-span-resultado").innerHTML =
        "Web debe terminar por .es";
      correcto = false;
    }
  
    document.querySelector(".js-span-resultado").innerHTML =
      "Validación correcta";
  
    return correcto;
  }