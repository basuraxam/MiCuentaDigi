

function cambiaColor(elementMiCuentaDigi){
    var elemento = elementMiCuentaDigi.getElementsByClassName("text-muted");
    for(var i = 0; i < elemento.length; i++)
        elemento[i].className += " text-color-green";
}

function pruebacolor(){

    var elementMiCuentaDigi = document.getElementById("idMiCuentaDigi");
    elementMiCuentaDigi.onload = cambiaColor(elementMiCuentaDigi.contentWindow.document);
}


