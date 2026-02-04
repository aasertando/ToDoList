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

    nuevoLi.className = ("item");
    nuevoCheckBox.type = ("checkbox");
    nuevoText.type = ("text");

    contenedor.appendChild(nuevoLi);
    nuevoLi.appendChild(nuevoCheckBox);
    nuevoLi.appendChild(nuevoText);

});