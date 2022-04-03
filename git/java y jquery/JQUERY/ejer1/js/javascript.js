$("document").ready(function () {
  $("#titulo01").click(function () {
    $("#titulo01").addClass("primero");
    $("#titulo02").removeClass("segundo");
  });

  $("#titulo02").click(function () {
    $("#titulo02").addClass("segundo");
    $("#titulo02").removeClass("primero");
  });

  $("#ocultar").click(function () {
    $("#lista li").hide();
  });

  $("#obtener").click(function () {
    alert($("#parrafo").text());
  });

  $("#modificar").click(function () {
    $("#tabla td").text("texto del td");
  });
});
