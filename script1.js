/* se toman los botones y el contenedor en donde se guardarán las listas */
const contenedor = document.getElementById("lista");
const btnAñadir = document.getElementById("btnAñadirItem");
const btnEliminar = document.getElementById("btnEliminarItem");

/* se escucha cuando se presiona el botón y que hace */
/* se crea el nuevo item */

btnAñadir.addEventListener("click", function (){
    const nuevoLi = document.createElement("li");
    const nuevoCheckBox = document.createElement("input");
    const nuevoText = document.createElement("input");

    nuevoLi.className = ("activo");
    nuevoCheckBox.type = ("checkbox");
    nuevoText.type = ("text");

    contenedor.appendChild(nuevoLi);
    nuevoLi.appendChild(nuevoCheckBox);
    nuevoLi.appendChild(nuevoText);
});



/* se elimina el item de la lista */

lista.addEventListener("change", function (event){
    //debug checkbox seleccionado o no
/*     if (event.target.checked){
        console.log("ACTIVADO");
    };

    if (!event.target.checked){
        console.log("DESACTIVADO");
    };
 */    

    if (event.target.type == "checkbox"){

        if (event.target.checked){
            event.target.parentElement.className = ("inactivo");
        
        } else if(!event.target.checked){
            event.target.parentElement.className = ("activo");
        };
    };

});