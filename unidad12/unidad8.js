
// var mostrar = document.getElementById("mostrar");
// mostrar.style.display = "block"

// var borrar = document.getElementById("borrar");
// borrar.parentNode.removeChild(borrar);

// var nodoPadre = document.getElementById("content2");
// var nodoHijo = document.createElement("div");


function evento(valor){
    var borrar = document.getElementById("borrar");
    borrar.parentNode.removeChild(borrar);
    var botonValor = valor.value;
    if(botonValor == 0){
        var documento = document.getElementById("content2");
        var agregar = document.createElement("div");
        documento.appendChild(agregar);
        agregar.style.height = "600px";
        agregar.style.backgroundImage = "url('imagenes/promo-lentes-comodos.jpg')";
        agregar.style.backgroundSize = "100%";
        agregar.style.backgroundRepeat ="no-repeat";
        documento.style.boxSizing = "content-box";
        documento.style.paddingBottom = "60px"; 
        documento.style.backgroundImage = "none";
       
        
    }
    if(botonValor == 1){
        var documento = document.getElementById("content2");
        var agregar = document.createElement("div");
        documento.appendChild(agregar);
        agregar.style.height = "600px";
        agregar.style.backgroundImage = "url('imagenes/promo-lentes-elegantes.jpg')";
        agregar.style.backgroundSize = "100%";
        agregar.style.backgroundRepeat ="no-repeat";
        documento.style.paddingBottom = "60px"; 
        documento.style.backgroundImage = "none";
       
        
    }
    if(botonValor == 2){
        var documento = document.getElementById("content2");
        var agregar = document.createElement("div");
        documento.appendChild(agregar);
        agregar.style.height = "600px";
        agregar.style.backgroundImage = "url('imagenes/promo-lentes-moda.jpg')";
        agregar.style.backgroundSize = "100%";
        agregar.style.backgroundRepeat ="no-repeat";
        documento.style.paddingBottom = "60px"; 
        documento.style.backgroundImage = "none";
        
    }

}
