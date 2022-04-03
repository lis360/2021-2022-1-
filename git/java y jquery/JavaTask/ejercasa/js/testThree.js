var ans = 0;
$(document).ready(function(){
         var counter = ""; // Registra los datos de entrada y la cadena de resultado
    $("button").on("click",function(){
        var text = $(this).attr('value');
        if(text !== 'AC' && text !== 'CE' && text !== 'Ans' && text !== '='){
            counter +=text;
            $(".showAns").val(counter);
        }
        else if(text === 'AC'){
            counter="";
            $(".showAns").val(counter);
        }else if(text ==='CE'){
            counter = counter.slice(0,-1);
            $(".showAns").val(counter);
        }else if(text === '='){
            ans = eval(counter);
            $(".showAns").val(ans);
            counter = "";
        }
 
    });
 
});