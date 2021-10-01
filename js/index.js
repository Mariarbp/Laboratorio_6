$(document).ready(function() {
 

    $(".agregar").on("click", function(agregar) {
    
        agregar.preventDefault()
        var elementos = $("<div>");
        elementos.prop("class","lis");
        
        var lista = $("<li>");
        lista.prop("class", "post");
        lista.append($('input:text').val());
        elementos.append(lista);

        var eliminar = $("<button>");
        eliminar.prop("class", "del");
        eliminar.text("Completo");
        elementos.append(eliminar);

        var completar = $("<button>");
        completar.prop("class", "checar");
        completar.text("Eliminar");
        elementos.append(completar);
   
        

        $(".Lista").append(elementos);
    });

    $(".Lista").on("click", ".checar", function() {
        $(this).parent().remove();
        
    });

    $(".Lista").on("click", ".del", function() {
        $(this).prev().toggleClass("chec");
    });

});