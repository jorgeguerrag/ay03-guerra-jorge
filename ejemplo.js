$(document).ready(function(){
    $("#boton").click(function(){
        $("#titulo").text("Esta NO es la Página")
    });
    $("#boton2").click(function(){
        $("#titulo").text("Esta es la Página")
    });
    $("#primera_foto").mouseenter(function(){
        $("#primera_foto").css("background-color","rgb(220, 93, 20");
    });
    $("#primera_foto").mouseleave(function(){
        $("#primera_foto").css("background-color","crimson");
    });
    
});