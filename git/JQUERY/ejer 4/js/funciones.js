var numBorde = 1;
$(document).ready(function () {
$(".btn").on("click", function () {
    switch ($(this).attr("id")) {
        case "btnAnadir":
            $("#tabla3").css("border","1px solid black");
            break;
        case "btnRecupera":
            alert($("#tabla3").css("border"));
            break;
        case "btnElimina":
            $("#tabla3").css("border","");
            break;
        default:
            break;
    }
});
}); 